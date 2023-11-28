

import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.6.0/firebase-app.js';
import { getFirestore, collection, getDocs, getDoc, doc } from 'https://www.gstatic.com/firebasejs/9.6.0/firebase-firestore.js';


var pagedata = null;

const firebaseConfig = {
    // Your Firebase configuration

    apiKey: "AIzaSyBYcl_xWRjmqvexrohOMkNPpgnVDvmyZQc",
    authDomain: "cresthive-88396.firebaseapp.com",
    projectId: "cresthive-88396",
    storageBucket: "cresthive-88396.appspot.com",
    messagingSenderId: "1094759056974",
    appId: "1:1094759056974:web:5296327482ffe0b459651f",
    measurementId: "G-FXDQ0S20EW",


  };
          const app = initializeApp(firebaseConfig);
          const db = getFirestore(app);

          console.log(db, "db")
// Use Firestore functionality
const fetchData = async () => {
  try {
    const dataRef = doc(db, 'cms', "basicsPage");
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


