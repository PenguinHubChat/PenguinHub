var firebaseConfig = {
apiKey: "AIzaSyA8BORa2n-0tQbujGtiXm320uD3Oej1TAY",
  authDomain: "penguinhub-ff0d9.firebaseapp.com",
  databaseURL: "https://penguinhub-ff0d9-default-rtdb.firebaseio.com",
  projectId: "penguinhub-ff0d9",
  storageBucket: "penguinhub-ff0d9.appspot.com",
  messagingSenderId: "888623892856",
  appId: "1:888623892856:web:a2aded50f6096d2573208d",
  measurementId: "G-GRSPM3N8DX"
};

firebase.initializeApp(firebaseConfig);

const db = firebase.database();

const username = prompt("Please Tell Us Your Name");
