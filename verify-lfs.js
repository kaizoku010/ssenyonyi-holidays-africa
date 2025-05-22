const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Function to check if a file is an LFS pointer
function isLFSPointer(filePath) {
  try {
    const fileContent = fs.readFileSync(filePath, 'utf8').trim();
    return fileContent.startsWith('version https://git-lfs.github.com/spec/');
  } catch (error) {
    return false;
  }
}

// Function to get file size in a human-readable format
function getFileSize(filePath) {
  try {
    const stats = fs.statSync(filePath);
    const fileSizeInBytes = stats.size;
    
    if (fileSizeInBytes < 1024) {
      return `${fileSizeInBytes} bytes`;
    } else if (fileSizeInBytes < 1024 * 1024) {
      return `${(fileSizeInBytes / 1024).toFixed(2)} KB`;
    } else {
      return `${(fileSizeInBytes / (1024 * 1024)).toFixed(2)} MB`;
    }
  } catch (error) {
    return 'Unknown size';
  }
}

// Check if we're in a Git repository with LFS
let isGitLFS = false;
try {
  const gitLfsStatus = execSync('git lfs status', { stdio: 'pipe' }).toString();
  isGitLFS = gitLfsStatus.includes('Git LFS');
  console.log('Git LFS is enabled:', isGitLFS);
} catch (error) {
  console.warn('Git LFS not detected or not installed:', error.message);
}

// Verify LFS files in src/media
console.log('\nChecking files in src/media:');
const mediaDir = path.join(__dirname, 'src', 'media');
if (fs.existsSync(mediaDir)) {
  const files = fs.readdirSync(mediaDir).filter(file => 
    ['.jpg', '.jpeg', '.png', '.gif', '.JPG'].some(ext => file.endsWith(ext))
  );
  
  for (const file of files.slice(0, 5)) { // Check first 5 image files
    const filePath = path.join(mediaDir, file);
    const isPointer = isLFSPointer(filePath);
    const fileSize = getFileSize(filePath);
    
    console.log(`- ${file}: ${fileSize} ${isPointer ? '(LFS POINTER)' : '(ACTUAL FILE)'}`);
  }
} else {
  console.log('src/media directory not found');
}

// Verify files in public/media
console.log('\nChecking files in public/media:');
const publicMediaDir = path.join(__dirname, 'public', 'media');
if (fs.existsSync(publicMediaDir)) {
  const files = fs.readdirSync(publicMediaDir).filter(file => 
    ['.jpg', '.jpeg', '.png', '.gif', '.JPG'].some(ext => file.endsWith(ext))
  );
  
  for (const file of files.slice(0, 5)) { // Check first 5 image files
    const filePath = path.join(publicMediaDir, file);
    const isPointer = isLFSPointer(filePath);
    const fileSize = getFileSize(filePath);
    
    console.log(`- ${file}: ${fileSize} ${isPointer ? '(LFS POINTER)' : '(ACTUAL FILE)'}`);
  }
} else {
  console.log('public/media directory not found');
}

// If we're using Git LFS, try to pull the files
if (isGitLFS) {
  console.log('\nAttempting to pull LFS files...');
  try {
    execSync('git lfs pull', { stdio: 'inherit' });
    console.log('LFS pull completed successfully');
  } catch (error) {
    console.error('Failed to pull LFS files:', error.message);
  }
}
