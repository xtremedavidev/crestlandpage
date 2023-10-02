
const navbar = document.querySelector(".navbar");

document.addEventListener("scroll", function () {
    if (window.scrollY > 100) { 
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
});

const backgroundImages = [
    'assets/Rectangle%20477.png',
    'assets/Rectangle%205.png',
    'assets/Property%201=Variant3.png'
];

const hero = document.querySelector('.hero');
let currentImageIndex = 0;

function changeBackgroundImage() {
    hero.style.backgroundImage = `url(${backgroundImages[currentImageIndex]})`;
    currentImageIndex = (currentImageIndex + 1) % backgroundImages.length;
}

changeBackgroundImage();

setInterval(changeBackgroundImage, 5000);


    document.addEventListener('DOMContentLoaded', function () {
        const container = document.querySelector('.staff-cards-container');
        const scrollAmount = 1; 
        const scrollSpeed = 2;   

        function autoScroll() {
            container.scrollLeft += scrollAmount * scrollSpeed;
            if (container.scrollLeft >= container.scrollWidth - container.clientWidth) {
                container.scrollLeft = 0;
            }
            requestAnimationFrame(autoScroll);
        }

        // Start auto-scrolling when the page loads
        autoScroll();
    });



    document.addEventListener('DOMContentLoaded', function () {
        const container = document.querySelector('.staff-cards-containers');
        const scrollAmount = 1; // Increase this value for faster scrolling
        const scrollSpeed = 2; // Increase this value for faster scrolling

        function autoScroll() {
            container.scrollLeft += scrollAmount * scrollSpeed;
            if (container.scrollLeft >= container.scrollWidth - container.clientWidth) {
                container.scrollLeft = 0;
            }
            requestAnimationFrame(autoScroll);
        }

        // Start auto-scrolling when the page loads
        autoScroll();
    });



    // JavaScript to handle card scrolling
document.addEventListener("DOMContentLoaded", function () {
    const nextButton = document.getElementById("nextButton");
    const prevButton = document.getElementById("prevButton");
    const cardContainer = document.querySelector(".card-container");

    // Define the scroll width to move cards
    const scrollWidth = 450;

    // Function to scroll cards to the left
    function scrollCardsLeft() {
        cardContainer.scrollLeft -= scrollWidth;
    }

    // Function to scroll cards to the right
    function scrollCardsRight() {
        cardContainer.scrollLeft += scrollWidth;
    }

    // Attach click event listeners to the next and previous buttons
    nextButton.addEventListener("click", scrollCardsRight);
    prevButton.addEventListener("click", scrollCardsLeft);
});


