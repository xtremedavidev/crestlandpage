
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.6.0/firebase-app.js';
import { getFirestore, collection, getDocs, getDoc, doc } from 'https://www.gstatic.com/firebasejs/9.6.0/firebase-firestore.js';

  
  

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
  const dataRef = doc(db, 'cms', "admissionsPage");
  const querySnapshot = await getDoc(dataRef);
  console.log(querySnapshot, "qs")

  const data = querySnapshot.data();

  const pagedata = data;
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




const admission = fetch.admission;


const requrements = admission[0].requirements;



console.log("admission", admission);




// Assuming admission is the array containing your data

// Create the h2 element with requrements title// Assuming you have a feeAmount property

// Create the ul element
const ulElement = document.getElementById("admp_ul");

// Iterate through requrements features and create li elements
requrements.forEach((feature) => {
   const pElement = document.createElement("li");
  pElement.textContent = feature;
  pElement.classList.add("text-gray-700");
  ulElement.appendChild(pElement);
});

// Append the ul element to the requrements container




// Example: Populate HTML elements
const admptitleElement = document.getElementById("admpTitle");
admptitleElement.innerHTML = `${fetch.admprocessTitle.replace(/\n/g, '<br/>')}`;
admptitleElement.style.whiteSpace = 'pre-line';

const admptextElement = document.getElementById("admpText");
admptextElement.innerHTML = `${fetch.admprocessText.replace(/\n/g, '<br/>')}`;
admptextElement.style.whiteSpace = 'pre-line';

})
.catch(error => console.error('Error fetching Firebase config:', error));


 
  


       
document.getElementById('nav-toggle').addEventListener('click', function() {
  var navMenu = document.querySelector('.nav-menu');
  var navToggle = document.querySelector('.nav-toggle');

  navMenu.classList.toggle('active');
  navToggle.classList.toggle('active');
});

