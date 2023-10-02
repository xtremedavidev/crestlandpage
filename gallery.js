document.addEventListener('DOMContentLoaded', function () {
    const sidebarLinks = document.querySelectorAll('.sidebar a');
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
            'https://example.com/image2.jpg',
            'https://example.com/image3.jpg',
            // Add more image URLs here
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
            'https://example.com/activity2.jpg',
            'https://example.com/activity3.jpg',
            // Add more image URLs here
        ],
        facilities: [
            'https://images.picxy.com/cache/2019/7/10/34614617ad921f26733a99413ab1b1b1.jpg',
            'https://images.picxy.com/cache/2019/7/10/34614617ad921f26733a99413ab1b1b1.jpg',
            'https://images.picxy.com/cache/2019/7/10/34614617ad921f26733a99413ab1b1b1.jpg',
            'https://images.picxy.com/cache/2019/7/10/34614617ad921f26733a99413ab1b1b1.jpg',
            'https://images.picxy.com/cache/2019/7/10/34614617ad921f26733a99413ab1b1b1.jpg',
            'https://example.com/weekend2.jpg',
            'https://example.com/weekend3.jpg',
            // Add more image URLs here
        ],


        staffs: [
            'https://media.istockphoto.com/id/1351445530/photo/african-student-sitting-in-classroom.jpg?s=612x612&w=0&k=20&c=1ICaZ03iFLzDmxfBkfDkmBGSgj1SDEpsM3eSDgB1KBk=',
            'https://media.istockphoto.com/id/1351445530/photo/african-student-sitting-in-classroom.jpg?s=612x612&w=0&k=20&c=1ICaZ03iFLzDmxfBkfDkmBGSgj1SDEpsM3eSDgB1KBk=',
            'https://media.istockphoto.com/id/1351445530/photo/african-student-sitting-in-classroom.jpg?s=612x612&w=0&k=20&c=1ICaZ03iFLzDmxfBkfDkmBGSgj1SDEpsM3eSDgB1KBk=',
            'https://media.istockphoto.com/id/1351445530/photo/african-student-sitting-in-classroom.jpg?s=612x612&w=0&k=20&c=1ICaZ03iFLzDmxfBkfDkmBGSgj1SDEpsM3eSDgB1KBk=',
            'https://media.istockphoto.com/id/1351445530/photo/african-student-sitting-in-classroom.jpg?s=612x612&w=0&k=20&c=1ICaZ03iFLzDmxfBkfDkmBGSgj1SDEpsM3eSDgB1KBk=',
            'https://media.istockphoto.com/id/1351445530/photo/african-student-sitting-in-classroom.jpg?s=612x612&w=0&k=20&c=1ICaZ03iFLzDmxfBkfDkmBGSgj1SDEpsM3eSDgB1KBk=',

        ]


        // Define online URLs for other categories in a similar manner
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

    // Add click event listeners to sidebar links
    sidebarLinks.forEach(link => {
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
    viewMoreButton.addEventListener('click', () => {
        // Add code here to view more images or open a modal
    });
});
