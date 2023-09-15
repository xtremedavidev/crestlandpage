
        // Select the navigation bar element
        const navBar = document.querySelector('nav');

        // Function to handle scroll event
        function handleScroll() {
            // Get the current scroll position
            const scrollY = window.scrollY;

            // Define a threshold value where you want to change the background
            const threshold = 200; // Adjust this value as needed

            // Check if the scroll position is beyond the threshold
            if (scrollY > threshold) {
                // Add the colorful background class
                navBar.classList.add('colorful-bg');
            } else {
                // Remove the colorful background class
                navBar.classList.remove('colorful-bg');
            }
        }

        // Listen for the scroll event and call the handleScroll function
        window.addEventListener('scroll', handleScroll);
