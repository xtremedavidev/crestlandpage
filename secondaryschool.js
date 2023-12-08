

import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.6.0/firebase-app.js';
import { getFirestore, collection, getDocs, getDoc, doc } from 'https://www.gstatic.com/firebasejs/9.6.0/firebase-firestore.js';


var pagedata = null;
document.getElementById('nav-toggle').addEventListener('click', function() {
  var navMenu = document.querySelector('.nav-menu');
  var navToggle = document.querySelector('.nav-toggle');

  navMenu.classList.toggle('active');
  navToggle.classList.toggle('active');
});




const firebaseConfig = {
  // Your Firebase configuration

  apiKey: process.env.FIREBASE_APIKEY,
  authDomain: process.env.FIREBASE_AUTHDOMAIN,
  projectId: process.env.FIREBASE_PROJECTID,
  storageBucket: process.env.FIREBASE_STORAGEBUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGINGSENDERID,
  appId: process.env.FIREBASE_APPID,
  measurementId: process.env.FIREBASE_MEASUREMENTID,


};
          const app = initializeApp(firebaseConfig);
          const db = getFirestore(app);

          console.log(db, "db")
// Use Firestore functionality
const fetchData = async () => {
  try {
    const dataRef = doc(db, 'cms', "secondaryPage");
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

    const notables = fetch.notables;







    // Assuming notables is the array containing your data
const activitiesContainer = document.getElementById("activities-container");

// Create the main container for activities
const activitiesListContainer = document.createElement("div");
activitiesListContainer.classList.add("activitylist");

// Create the ul element
const ulElement = document.createElement("ul");
ulElement.classList.add("activity-list");

// Iterate through notables and create li elements
notables.forEach((notable) => {
  const liElement = document.createElement("li");
  const spanElement = document.createElement("span");
  spanElement.classList.add("bullet");
  spanElement.textContent = "+";
  liElement.appendChild(spanElement);
  liElement.innerHTML += ` ${notable}`;
  ulElement.appendChild(liElement);
});

// Append the ul element to the activities container
activitiesListContainer.appendChild(ulElement);

// Append the activities container to the main container
activitiesContainer.appendChild(activitiesListContainer);


