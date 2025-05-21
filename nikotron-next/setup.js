/**
 * This script copies necessary files from the old structure to the new structure.
 * Run this script with Node.js to set up your project properly.
 */
const fs = require('fs');
const path = require('path');

// Directory paths
const oldRootDir = path.join(__dirname, '../nikotron');
const publicDir = path.join(__dirname, 'public');
const imagesDir = path.join(publicDir, 'images');
const projectsDir = path.join(imagesDir, 'projects');

// Create directories if they don't exist
[publicDir, imagesDir, projectsDir].forEach(dir => {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
    console.log(`Created directory: ${dir}`);
  }
});

// Copy images from old structure
function copyImages() {
  try {
    const oldImagesDir = path.join(oldRootDir, 'images');
    
    if (fs.existsSync(oldImagesDir)) {
      // Copy profile image
      const profileImage = path.join(oldImagesDir, 'image (8).png');
      if (fs.existsSync(profileImage)) {
        fs.copyFileSync(profileImage, path.join(imagesDir, 'profile.webp'));
        console.log('Copied profile image');
      }
      
      // Add sample project images
      const sampleImages = [
        { name: 'ai-chatbot.webp', content: 'AI Chatbot Placeholder' },
        { name: 'blockchain-voting.webp', content: 'Blockchain Voting Placeholder' },
        { name: 'ml-dashboard.webp', content: 'ML Dashboard Placeholder' }
      ];
      
      sampleImages.forEach(img => {
        fs.writeFileSync(path.join(projectsDir, img.name), img.content);
        console.log(`Created placeholder for ${img.name}`);
      });
      
      // Create professional portrait placeholder
      fs.writeFileSync(path.join(imagesDir, 'professional-portrait.webp'), 'Professional Portrait Placeholder');
      console.log('Created professional portrait placeholder');
      
      // Create OG and Twitter images
      fs.writeFileSync(path.join(imagesDir, 'og-image.jpg'), 'OG Image Placeholder');
      fs.writeFileSync(path.join(imagesDir, 'twitter-image.jpg'), 'Twitter Image Placeholder');
      console.log('Created social media image placeholders');
    }
  } catch (error) {
    console.error('Error copying images:', error);
  }
}

// Create CV placeholder
function createCVPlaceholder() {
  try {
    const cvPath = path.join(publicDir, 'Nicanor_Nicolas_CV.pdf');
    fs.writeFileSync(cvPath, 'CV Placeholder');
    console.log('Created CV placeholder');
  } catch (error) {
    console.error('Error creating CV placeholder:', error);
  }
}

// Run the setup
copyImages();
createCVPlaceholder();

console.log('Setup completed. You should now:');
console.log('1. Replace placeholder files with actual content');
console.log('2. Run "npm install" to install dependencies');
console.log('3. Run "npm run dev" to start the development server'); 