

// gallery.js
const imagePaths = [
    'assets/Rectangle%20477.png',
    'assets/Rectangle%205.png',
    'assets/Property%201=Variant3.png'
    // Add more image paths as needed
];

const gallery = document.querySelector('.gallery');

// Function to add images to the gallery
function addImagesToGallery() {
    imagePaths.forEach((imagePath) => {
        const img = document.createElement('img');
        img.src = imagePath;
        // Apply styles to your images (e.g., width, height)
        img.style.width = '100%'; // Adjust the width as needed
        img.style.height = 'auto'; // Maintain aspect ratio
        gallery.appendChild(img);
    });
}

// Load images when the page is ready
window.addEventListener('DOMContentLoaded', addImagesToGallery);

