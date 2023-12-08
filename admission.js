import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.6.0/firebase-app.js';
import { getFirestore, collection, getDocs, getDoc, doc } from 'https://www.gstatic.com/firebasejs/9.6.0/firebase-firestore.js';


document.getElementById('nav-toggle').addEventListener('click', function() {
  var navMenu = document.querySelector('.nav-menu');
  var navToggle = document.querySelector('.nav-toggle');

  navMenu.classList.toggle('active');
  navToggle.classList.toggle('active');
});


var pagedata = null;

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
    const dataRef = doc(db, 'cms', "admissionsPage");
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




const fees = fetch.fees;


console.log("fees", fees);




// Assuming fees is the array containing your data
const feesContainer = document.getElementById("fees-container");

fees.forEach((fee) => {
  // Create the main container for each fee
  const feeContainer = document.createElement("div");
  feeContainer.classList.add("admissioncarddetails");

  // Create the image element
  const imgElement = document.createElement("img");
  imgElement.src = "/assets/Group 22296.png";
  feeContainer.appendChild(imgElement);

  // Create the h2 element with fee title
  const h2Element = document.createElement("h2");
  h2Element.textContent = `${fee.feeTitle}`; // Assuming you have a feeAmount property
  feeContainer.appendChild(h2Element);

  // Create the ul element
  const ulElement = document.createElement("ul");

  // Iterate through fee features and create li elements
  fee.feeFeatures.forEach((feature) => {
    const liElement = document.createElement("li");
    const pElement = document.createElement("p");
    pElement.textContent = feature;
    liElement.appendChild(pElement);
    ulElement.appendChild(liElement);
  });

  // Append the ul element to the fee container
  feeContainer.appendChild(ulElement);

  // Append the fee container to the main container
  feesContainer.appendChild(feeContainer);
});





// Example: Populate HTML elements
const titleElement = document.getElementById("herotitle");
titleElement.innerHTML = `${fetch.heroTitle.replace(/\n/g, '<br/>')}`;
titleElement.style.whiteSpace = 'pre-line';

const subtextElement = document.getElementById("herosub");
subtextElement.innerHTML = `${fetch.heroSubtitle.replace(/\n/g, '<br/>')}`;
subtextElement.style.whiteSpace = 'pre-line';


const tsubtextElement = document.getElementById("herosubtext");
tsubtextElement.innerHTML = `${fetch.heroSubtitletext.replace(/\n/g, '<br/>')}`;
tsubtextElement.style.whiteSpace = 'pre-line';
