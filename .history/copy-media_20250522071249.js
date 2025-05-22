const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Source and destination directories
const sourceDir = path.join(__dirname, 'src', 'media');
const destDir = path.join(__dirname, 'public', 'media');

// Create destination directory if it doesn't exist
if (!fs.existsSync(destDir)) {
  fs.mkdirSync(destDir, { recursive: true });
  console.log('Created destination directory:', destDir);
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

// Function to check if a file is an LFS pointer
function isLFSPointer(filePath) {
  try {
    const fileContent = fs.readFileSync(filePath, 'utf8').trim();
    return fileContent.startsWith('version https://git-lfs.github.com/spec/');
  } catch (error) {
    return false;
  }
}

// Function to copy files recursively
function copyFiles(source, destination) {
  // Get all files and directories in the source
  const items = fs.readdirSync(source, { withFileTypes: true });

  // Process each item
  for (const item of items) {
    const sourcePath = path.join(source, item.name);
    const destPath = path.join(destination, item.name);

    if (item.isDirectory()) {
      // Create the directory in the destination if it doesn't exist
      if (!fs.existsSync(destPath)) {
        fs.mkdirSync(destPath, { recursive: true });
      }

      // Recursively copy files from this directory
      copyFiles(sourcePath, destPath);
    } else {
      // Check if this is an LFS pointer file
      if (isGitLFS && isLFSPointer(sourcePath)) {
        console.warn(`LFS pointer detected: ${sourcePath}`);
        console.log(`Attempting to pull LFS content for: ${sourcePath}`);

        try {
          // Try to pull the actual content using Git LFS
          execSync(`git lfs pull --include="${sourcePath}"`, { stdio: 'inherit' });
        } catch (error) {
          console.error(`Failed to pull LFS content for ${sourcePath}:`, error.message);
        }
      }

      // Copy the file
      try {
        fs.copyFileSync(sourcePath, destPath);
        console.log(`Copied: ${sourcePath} -> ${destPath}`);
      } catch (error) {
        console.error(`Error copying ${sourcePath}:`, error.message);
      }
    }
  }
}

// Start copying files
try {
  // If we're using Git LFS, make sure we have the actual files
  if (isGitLFS) {
    console.log('Pulling LFS files before copying...');
    try {
      execSync('git lfs pull', { stdio: 'inherit' });
    } catch (error) {
      console.error('Failed to pull LFS files:', error.message);
    }
  }

  copyFiles(sourceDir, destDir);
  console.log('Media files copied successfully!');
} catch (error) {
  console.error('Error copying media files:', error);
  process.exit(1);
}
