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

// Call the function to fetch data


    const fetch = await fetchData();




// Example: Retrieve data from Firestore


console.log("fetch",  fetch)










// Example: Populate HTML elements
const titleElement = document.getElementById("aboutTitle");
titleElement.innerHTML = `${fetch.heroTitle.replace(/\n/g, '<br/>')}`;
titleElement.style.whiteSpace = 'pre-line';

const subtextElement = document.getElementById("aboutSubtitle");
subtextElement.innerHTML = `${fetch.heroSubtitle.replace(/\n/g, '<br/>')}`;
subtextElement.style.whiteSpace = 'pre-line';


const sec1subtextElement = document.getElementById("sction1");
sec1subtextElement.innerHTML = `${fetch.heroSubtitletext.replace(/\n/g, '<br/>')}`;
sec1subtextElement.style.whiteSpace = 'pre-line';


})
.catch(error => console.error('Error fetching Firebase config:', error));
