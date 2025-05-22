const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

console.log('Starting to undo Git LFS...');

// Step 1: Make sure we have all LFS files pulled
try {
  console.log('Pulling all LFS files...');
  execSync('git lfs pull', { stdio: 'inherit' });
} catch (error) {
  console.error('Error pulling LFS files:', error.message);
  console.log('Continuing anyway...');
}

// Step 2: Update .gitattributes to stop tracking media files with LFS
try {
  console.log('Updating .gitattributes file...');
  
  // Read the current .gitattributes file
  const gitattributesPath = path.join(__dirname, '.gitattributes');
  let gitattributesContent = '';
  
  if (fs.existsSync(gitattributesPath)) {
    gitattributesContent = fs.readFileSync(gitattributesPath, 'utf8');
    
    // Comment out all LFS tracking lines
    const updatedContent = gitattributesContent
      .split('\n')
      .map(line => {
        if (line.includes('filter=lfs') && !line.startsWith('#')) {
          return `# ${line} (LFS tracking disabled)`;
        }
        return line;
      })
      .join('\n');
    
    // Add a note about LFS being disabled
    const finalContent = `# Git LFS tracking has been disabled\n# To re-enable, uncomment the lines below\n${updatedContent}`;
    
    // Write the updated content back to the file
    fs.writeFileSync(gitattributesPath, finalContent);
    console.log('Updated .gitattributes file to disable LFS tracking');
  } else {
    console.log('.gitattributes file not found, creating a new one');
    const newContent = `# Git LFS tracking has been disabled\n# To track media files with LFS, uncomment the lines below\n# *.jpg filter=lfs diff=lfs merge=lfs -text\n# *.jpeg filter=lfs diff=lfs merge=lfs -text\n# *.png filter=lfs diff=lfs merge=lfs -text\n# *.gif filter=lfs diff=lfs merge=lfs -text\n# *.JPG filter=lfs diff=lfs merge=lfs -text`;
    fs.writeFileSync(gitattributesPath, newContent);
    console.log('Created new .gitattributes file with LFS tracking disabled');
  }
} catch (error) {
  console.error('Error updating .gitattributes file:', error.message);
}

// Step 3: Copy all media files to public directory
try {
  console.log('Copying media files to public directory...');
  
  // Source and destination directories
  const sourceDir = path.join(__dirname, 'src', 'media');
  const destDir = path.join(__dirname, 'public', 'media');
  
  // Create destination directory if it doesn't exist
  if (!fs.existsSync(destDir)) {
    fs.mkdirSync(destDir, { recursive: true });
    console.log('Created destination directory:', destDir);
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
  copyFiles(sourceDir, destDir);
  console.log('Media files copied successfully!');
} catch (error) {
  console.error('Error copying media files:', error);
}

console.log('\nGit LFS has been disabled. To complete the process:');
console.log('1. Commit the changes to .gitattributes');
console.log('2. Run "git lfs uninstall" to remove LFS hooks (optional)');
console.log('3. Push the changes to your repository');
console.log('4. Redeploy your application on Vercel');
