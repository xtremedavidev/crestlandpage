
document.addEventListener("DOMContentLoaded", function () {
    const snowfallContainer = document.querySelector(".snowfall");
  
    // Adjust the number of snowflakes
    const numberOfSnowflakes = 50;
  
    setInterval(createSnowflake, 500); // Create a snowflake every 500 milliseconds
  
    function createSnowflake() {
        const snowflake = document.createElement("div");
        snowflake.className = "snowflake";
  
        // Randomize the initial position of each snowflake
        const initialX = Math.random() * window.innerWidth;
        const initialY = Math.random() * window.innerHeight;
        snowflake.style.left = initialX + "px";
        snowflake.style.top = initialY + "px";
  
        // Randomize the color with a preference for white
        const randomColor = Math.random() < 0.9 ? "#ffffff" : getRandomColor();
        snowflake.style.backgroundColor = randomColor;
  
        snowfallContainer.appendChild(snowflake);
  
        animateSnowflake(snowflake);
    }
  
    function animateSnowflake(snowflake) {
        const animationDuration = Math.random() * 5 + 1; // Random duration between 5 and 10 seconds
  
        snowflake.style.animation = `snowfall ${animationDuration}s linear`;
  
        snowflake.addEventListener("animationend", function () {
            snowflake.remove(); // Remove the snowflake after the animation ends
        });
    }
  
    function getRandomColor() {
        const letters = "0123456789ABCDEF";
        let color = "#";
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }









     
  document.getElementById('nav-toggle').addEventListener('click', function() {
    var navMenu = document.querySelector('.nav-menu');
    var navToggle = document.querySelector('.nav-toggle');
  
    navMenu.classList.toggle('active');
    navToggle.classList.toggle('active');
  });
  

  });
  


 
  


  