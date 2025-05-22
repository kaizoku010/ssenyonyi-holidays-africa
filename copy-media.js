const fs = require('fs');
const path = require('path');

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
      fs.copyFileSync(sourcePath, destPath);
      console.log(`Copied: ${sourcePath} -> ${destPath}`);
    }
  }
}

// Start copying files
try {
  copyFiles(sourceDir, destDir);
  console.log('Media files copied successfully!');
} catch (error) {
  console.error('Error copying media files:', error);
  process.exit(1);
}
