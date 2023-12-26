import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.6.0/firebase-app.js';
import { getFirestore, collection, getDocs, getDoc, doc } from 'https://www.gstatic.com/firebasejs/9.6.0/firebase-firestore.js';


var pagedata = null;
document.getElementById('nav-toggle').addEventListener('click', function() {
  var navMenu = document.querySelector('.nav-menu');
  var navToggle = document.querySelector('.nav-toggle');

  navMenu.classList.toggle('active');
  navToggle.classList.toggle('active');
});









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
    const dataRef = doc(db, 'cms', "aboutPage");
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




const fetchData2 = async () => {
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


    const fetch2 = await fetchData2();







// Call the function to fetch data


    const fetch = await fetchData();




// Example: Retrieve data from Firestore


console.log("fetch",  fetch)




  // Assuming teachers is an object where each key represents a teacher
  const teachers = fetch2.teachers;
  
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









// Example: Populate HTML elements
const titleElement = document.getElementById("aboutTitle");
titleElement.innerHTML = `${fetch.aboutTitle.replace(/\n/g, '<br/>')}`;
titleElement.style.whiteSpace = 'pre-line';

const subtextElement = document.getElementById("aboutSubtitle");
subtextElement.innerHTML = `${fetch.aboutSubtitle.replace(/\n/g, '<br/>')}`;
subtextElement.style.whiteSpace = 'pre-line';


const sec1textElement = document.getElementById("section1Text");
sec1textElement.innerHTML = `${fetch.section1Text.replace(/\n/g, '<br/>')}`;
sec1textElement.style.whiteSpace = 'pre-line';

const sec1TitleElement = document.getElementById("section1Title");
sec1TitleElement.innerHTML = `${fetch.section1Title.replace(/\n/g, '<br/>')}`;
sec1TitleElement.style.whiteSpace = 'pre-line';


})
.catch(error => console.error('Error fetching Firebase config:', error));
