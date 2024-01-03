
const navbar = document.querySelector(".navbar");

document.addEventListener("scroll", function () {
    if (window.scrollY > 100) { 
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
});





   


    document.addEventListener('DOMContentLoaded', function () {
        const container = document.querySelector('.staff-cards-containers');
        const scrollAmount = 1; // Increase this value for faster scrolling
        const scrollSpeed = 1; // Increase this value for faster scrolling

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


    
    document.getElementById('nav-toggle').addEventListener('click', function() {
        var navMenu = document.querySelector('.nav-menu');
        var navToggle = document.querySelector('.nav-toggle');
      
        navMenu.classList.toggle('active');
        navToggle.classList.toggle('active');
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







// Import necessary Firebase modules
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.6.0/firebase-app.js';
import { getFirestore, collection, getDocs, getDoc, doc } from 'https://www.gstatic.com/firebasejs/9.6.0/firebase-firestore.js';


var pagedata = null;

fetch('./../api/configfile.js')
  .then(response => response.json())
  .then (async data => {
    const firebaseConfig = data.firebaseConfig;
    // Now you can use firebaseConfig in your Firebase initialization

          const app = initializeApp(firebaseConfig);
          const db = getFirestore(app);

          console.log(db, "db")
// Use Firestore functionality
const fetchData = async () => {
  try {
    const dataRef = doc(db, 'cms', "indexPage");
    const querySnapshot = await getDoc(dataRef);
    console.log(querySnapshot, "qs")

    const data = querySnapshot.data();

    pagedata = data;
    console.log("page data is now", pagedata);

    return data;




    
  } catch (error) {
    console.error('Error fetching data:', error);
    return null;
  }
};

// Call the function to fetch data


    const fetch = await fetchData();




// Example: Retrieve data from Firestore


console.log("fetch",  fetch)












// Example: Populate HTML elements
const titleElement = document.getElementById("herotitle");
titleElement.innerHTML = `${fetch.heroTitle.replace(/\n/g, '<br/>')}`;
titleElement.style.whiteSpace = 'pre-line';

const textElement = document.getElementById("herosub");
textElement.innerHTML = `${fetch.heroSubtitle.replace(/\n/g, '<br/>')}`;
textElement.style.whiteSpace = 'pre-line';


//sec 1


const sec1titleElement = document.getElementById("sec1title");
sec1titleElement.innerHTML = `${fetch.section1Title.replace(/\n/g, '<br/>')}`;
sec1titleElement.style.whiteSpace = 'pre-line';


const sec1textElement = document.getElementById("sec1text");
sec1textElement.innerHTML = `${fetch.section1Text.replace(/\n/g, '<br/>')}`;
titleElement.style.whiteSpace = 'pre-line';


// //sec 2

const sec2titleElement = document.getElementById("sec2title");
sec2titleElement.innerHTML = `${fetch.section2Title.replace(/\n/g, '<br/>')}`;
sec2titleElement.style.whiteSpace = 'pre-line';


const sec2text = document.getElementById("sec2text");
sec2text.innerHTML = `${fetch.section2Text.replace(/\n/g, '<br/>')}`;
sec2text.style.whiteSpace = 'pre-line';



// // sc 3


const sec3titleElement = document.getElementById("sec3title");
sec3titleElement.innerHTML = `${fetch.section3Title.replace(/\n/g, '<br/>')}`;
sec3titleElement.style.whiteSpace = 'pre-line';



const sec3textElement = document.getElementById("sec3text");
sec3textElement.innerHTML = `${fetch.section3Text.replace(/\n/g, '<br/>')}`;
sec3textElement.style.whiteSpace = 'pre-line';

const sec3subtitleElement = document.getElementById("sec3subtitle");
sec3subtitleElement.innerHTML = `${fetch.section3Subtitle.replace(/\n/g, '<br/>')}`;
sec3subtitleElement.style.whiteSpace = 'pre-line';



// vs an ms


const 
vissionElement = document.getElementById("visionText");
vissionElement.innerHTML = `${fetch.visionText.replace(/\n/g, '<br/>')}`;
vissionElement.style.whiteSpace = 'pre-line';

const 
missionElement = document.getElementById("missionText");
missionElement.innerHTML = `${fetch.missionText.replace(/\n/g, '<br/>')}`;
missionElement.style.whiteSpace = 'pre-line';













// Assuming testimonials is an array of testimonial objects
const testimonials = fetch.testimonials;
// Get the container element to append cards
const cardContainer = document.querySelector(".blog-card-container");

// Loop through testimonials and create cards
testimonials.forEach((testimonial) => {
  // Create card element
  const card = document.createElement("div");
  card.className = "blog-card";

  // Create card-image container
  const cardImageContainer = document.createElement("div");
  cardImageContainer.className = "blog-card-image";
  cardImageContainer.style.backgroundImage = `url('./assets/logo.png')`;

  // Create p-paragraph container
  const pParagraphContainer = document.createElement("div");
  pParagraphContainer.className = "blog-card-paragraph";

  const titleP = document.createElement("p");
  // Split the paragraph into lines using '<br>' for line breaks
  const title = testimonial.testimonialTitle.split('\n');
  titleP.innerHTML = title.join('<br>');

  // Create paragraph element
  const paragraph = document.createElement("p");
  // Split the paragraph into lines using '<br>' for line breaks
  const paragraphLines = testimonial.parentName.split('\n');
  paragraph.innerHTML = paragraphLines.join('<br>');

  // Append paragraph to p-paragraph container
  pParagraphContainer.appendChild(paragraph);

  // Append card-image and p-paragraph containers to card
  card.appendChild(cardImageContainer);
  card.appendChild(titleP);
  card.appendChild(pParagraphContainer);

  // Append card to card container
  cardContainer.appendChild(card);
});












  // Assuming teachers is an object where each key represents a teacher
const teachers = fetch.teachers;
  
  // Get the container element to append staff cards
  const staffCardsContainer = document.querySelector(".staff-cards-container");
  
  // Loop through teachers and create staff cards
  Object.keys(teachers).forEach((teacherKey) => {
    const teacher = teachers[teacherKey];
  
    // Create staff card element
    const staffCard = document.createElement("div");
    staffCard.className = "staff-card";
  
    // Create image element
    const img = document.createElement("img");
    img.src = teacher.teacherPicture;
    img.alt = teacher.teacherName;
  
    // Create heading element
    const h3 = document.createElement("h3");
    h3.textContent = teacher.teacherName;
  
    // Create paragraph elements
    const pRole = document.createElement("p");
    pRole.textContent = `Role: ${teacher.teacherRole}`;
  
    // Append elements to staff card
    staffCard.appendChild(img);
    staffCard.appendChild(h3);
    staffCard.appendChild(pRole);
  
    // Append staff card to staff cards container
    staffCardsContainer.appendChild(staffCard);
  });
  

})
.catch((error) => console.log('Error fetching Firebase config:', error));
