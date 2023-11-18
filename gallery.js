document.addEventListener('DOMContentLoaded', function () {
    const categoryLinks = document.querySelectorAll('.category-navigation a');
    const imageGrid = document.querySelector('.image-grid');
    const viewMoreButton = document.querySelector('.view-more');
    const categories = {
        all: 'All',
        activities: 'Activities',
        weekend: 'Weekend',
        boarding: 'Boarding',
        programs: 'Programs',
        facilities: 'Facilities',
        staffs: 'Staffs',
    };

    // Define online image URLs for each category
    const imageUrls = {
        all: [
          
        ],

        activities: [
            `assets/Activities/02.jpg`,
            `assets/Activities/05.jpg`,
            `assets/Activities/06.jpg`,
            `assets/Activities/07.jpg`,
            `assets/Activities/08.jpg`,
            `assets/Activities/09.jpg`,
            `assets/Activities/010.jpg`,
            `assets/Activities/01.heic`,

        ],
        facilities: [
            'https://images.picxy.com/cache/2019/7/10/34614617ad921f26733a99413ab1b1b1.jpg',
            'https://images.picxy.com/cache/2019/7/10/34614617ad921f26733a99413ab1b1b1.jpg',
            'https://images.picxy.com/cache/2019/7/10/34614617ad921f26733a99413ab1b1b1.jpg',
            'https://images.picxy.com/cache/2019/7/10/34614617ad921f26733a99413ab1b1b1.jpg',
            'https://images.picxy.com/cache/2019/7/10/34614617ad921f26733a99413ab1b1b1.jpg',
        ],
        staffs: [
            "assets/Our Educators//Azeez Kabiroh (Play Group Class Teacher).jpg",
            "assets/Our Educators/Malam AbdulBasheer Balogun.jpg",
            "assets/Our Educators/Malam AbdulHamid AbdulGoniy.jpg",
            "assets/Our Educators/Malam Isa Rosheed Buwaeb.jpg",
            "assets/Our Educators/Miss Rofiah Basic 5 class teacher.jpg",
            "assets/Our Educators/Miss Shakirah Nursery Gold Class Teacher.jpg",
            "assets/Our Educators/Mr Abdullah W.A.jpg",
            "assets/Our Educators/Mr Ismail Basic 2  Diamond class teacher.jpg",
            "assets/Our Educators/Mr. Ademola Habibullah Jss2 class teacher.jpg",
            "assets/Our Educators/Mr. Adetoro Abdulwasiu Basic 4 Gold class teacher.jpg",
            "assets/Our Educators/Mrs AbdulAzeez Basic 1 Gold Class Teacher.jpg",
            "assets/Our Educators/Mrs Adeyemi.jpg",
            "assets/Our Educators/Mrs Bamidele Latifa.jpg",
            "assets/Our Educators/Mrs Ibidun (Playgroup Class Teacher).jpg",
            "assets/Our Educators/Mrs Lawal.jpg",
            "assets/Our Educators/Mrs Mohammad.jpg",
            "assets/Our Educators/Mrs Moshood Mariam Basic 3 Class teacher.jpg",
            "assets/Our Educators/Mrs Popoola SS1 Class teacher.jpg",
            "assets/Our Educators/Mrs Rabiu Zainab.jpg",
            "assets/Our Educators/Mrs Salaudeen Basic 4 Diamond class teacher.jpg",
            "assets/Our Educators/Mrs Sodiq Aminat.jpg",
            "assets/Our Educators/Mrs Uthman basic 1 diamond class teacher.jpg",
            "assets/Our Educators/Mrs. AbdulAzeez S. JSS3 class teacher.jpg",
            "assets/Our Educators/Sanusi Iqmat.jpg",
            "assets/Our Educators/Uztaz Abubakr A. Umar (Head of Islamic Department).jpg",
            "assets/Our Educators/Miss Adeola SS1 class teacher.jpg",
        ],

        weekends: [
            'https://www.achrnews.com/ext/resources/sm/issues/2016/March/Spa-Paw--Tail-Guest-Rooms.jpg?1675271496'
            // Include your 'weekends' images here
        ],
        boarding: [
            'https://www.achrnews.com/ext/resources/sm/issues/2016/March/Spa-Paw--Tail-Guest-Rooms.jpg?1675271496'
            // Include your 'boarding' images here
        ],
        sports: [
            'https://sportsfacilities.com/wp-content/uploads/2016/03/sports-facilities-complex.jpg'
            // Include your 'sports' images here
        ],
        stakeholders: [
            'https://sportsfacilities.com/wp-content/uploads/2016/03/sports-facilities-complex.jpg'
            // Include your 'sports' images here

        ]
    };

    // Function to load images based on category
    function loadImages(category) {
        imageGrid.innerHTML = '';
        const images = imageUrls[category] || [];
        images.forEach(imageUrl => {
            const imgElement = document.createElement('img');
            imgElement.src = imageUrl;
            imgElement.alt = 'Image'; // Set alt text for accessibility
            imageGrid.appendChild(imgElement);
        });
    }

    // Add click event listeners to category links
    categoryLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            const category = event.target.getAttribute('data-category');
            if (category) {
                loadImages(category);
                viewMoreButton.style.display = 'block'; // Show the "View More" button
            }
        });
    });

    // Click event listener for the "View More" button
    loadImages('all');
    viewMoreButton.addEventListener('click', () => {
        // Add code here to view more images or open a modal
    });
});



document.addEventListener('DOMContentLoaded', function () {
    const categoryLinks = document.querySelectorAll('.category-navigation ul li a');
    
    categoryLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            
            // Remove the 'active' class from all category links
            categoryLinks.forEach(link => link.classList.remove('active'));
            
            // Add the 'active' class to the clicked category link
            event.target.classList.add('active');
            
            // Get the selected category from the data attribute
            const selectedCategory = event.target.getAttribute('data-category');
            
            // Use the selectedCategory to load images or perform other actions
            loadImages(selectedCategory);
        });
    });

    // Your existing code for loading images and categories

});
