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
            'https://images.unsplash.com/photo-1660798027105-5da8ad164e27?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c3R1ZGVudHxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80',
            'https://images.unsplash.com/photo-1660798027105-5da8ad164e27?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c3R1ZGVudHxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80',
            'https://images.unsplash.com/photo-1660798027105-5da8ad164e27?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c3R1ZGVudHxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80',
            'https://images.unsplash.com/photo-1660798027105-5da8ad164e27?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c3R1ZGVudHxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80',
            'https://images.unsplash.com/photo-1660798027105-5da8ad164e27?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c3R1ZGVudHxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80',
            'https://images.unsplash.com/photo-1660798027105-5da8ad164e27?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c3R1ZGVudHxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80',
            'https://images.unsplash.com/photo-1660798027105-5da8ad164e27?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c3R1ZGVudHxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80',
            'https://images.unsplash.com/photo-1660798027105-5da8ad164e27?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c3R1ZGVudHxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80',
            'https://images.unsplash.com/photo-1660798027105-5da8ad164e27?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c3R1ZGVudHxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80',
            'https://images.unsplash.com/photo-1660798027105-5da8ad164e27?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c3R1ZGVudHxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80',
            'https://images.unsplash.com/photo-1660798027105-5da8ad164e27?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c3R1ZGVudHxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80',
           
        ],
        activities: [
            'https://images.picxy.com/cache/2019/5/22/17c5114499f0fd8c2b033bdeb3d124c2.jpg',
            'https://images.picxy.com/cache/2019/5/22/17c5114499f0fd8c2b033bdeb3d124c2.jpg',
            'https://images.picxy.com/cache/2019/5/22/17c5114499f0fd8c2b033bdeb3d124c2.jpg',
            'https://images.picxy.com/cache/2019/5/22/17c5114499f0fd8c2b033bdeb3d124c2.jpg',
            'https://images.picxy.com/cache/2019/5/22/17c5114499f0fd8c2b033bdeb3d124c2.jpg',
            'https://images.picxy.com/cache/2019/5/22/17c5114499f0fd8c2b033bdeb3d124c2.jpg',
            'https://images.picxy.com/cache/2019/5/22/17c5114499f0fd8c2b033bdeb3d124c2.jpg',
            'https://images.picxy.com/cache/2019/5/22/17c5114499f0fd8c2b033bdeb3d124c2.jpg',
            'https://images.picxy.com/cache/2019/5/22/17c5114499f0fd8c2b033bdeb3d124c2.jpg',
            'https://images.picxy.com/cache/2019/5/22/17c5114499f0fd8c2b033bdeb3d124c2.jpg',
        ],
        facilities: [
            'https://images.picxy.com/cache/2019/7/10/34614617ad921f26733a99413ab1b1b1.jpg',
            'https://images.picxy.com/cache/2019/7/10/34614617ad921f26733a99413ab1b1b1.jpg',
            'https://images.picxy.com/cache/2019/7/10/34614617ad921f26733a99413ab1b1b1.jpg',
            'https://images.picxy.com/cache/2019/7/10/34614617ad921f26733a99413ab1b1b1.jpg',
            'https://images.picxy.com/cache/2019/7/10/34614617ad921f26733a99413ab1b1b1.jpg',
        ],
        staffs: [
            'https://media.istockphoto.com/id/1351445530/photo/african-student-sitting-in-classroom.jpg?s=612x612&w=0&k=20&c=1ICaZ03iFLzDmxfBkfDkmBGSgj1SDEpsM3eSDgB1KBk=',
            'https://media.istockphoto.com/id/1351445530/photo/african-student-sitting-in-classroom.jpg?s=612x612&w=0&k=20&c=1ICaZ03iFLzDmxfBkfDkmBGSgj1SDEpsM3eSDgB1KBk=',
            'https://media.istockphoto.com/id/1351445530/photo/african-student-sitting-in-classroom.jpg?s=612x612&w=0&k=20&c=1ICaZ03iFLzDmxfBkfDkmBGSgj1SDEpsM3eSDgB1KBk=',
            'https://media.istockphoto.com/id/1351445530/photo/african-student-sitting-in-classroom.jpg?s=612x612&w=0&k=20&c=1ICaZ03iFLzDmxfBkfDkmBGSgj1SDEpsM3eSDgB1KBk=',
            'https://media.istockphoto.com/id/1351445530/photo/african-student-sitting-in-classroom.jpg?s=612x612&w=0&k=20&c=1ICaZ03iFLzDmxfBkfDkmBGSgj1SDEpsM3eSDgB1KBk=',
            'https://media.istockphoto.com/id/1351445530/photo/african-student-sitting-in-classroom.jpg?s=612x612&w=0&k=20&c=1ICaZ03iFLzDmxfBkfDkmBGSgj1SDEpsM3eSDgB1KBk=',
            // Add more image URLs here
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
