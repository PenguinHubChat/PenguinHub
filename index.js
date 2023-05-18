// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA8BORa2n-0tQbujGtiXm320uD3Oej1TAY",
  authDomain: "penguinhub-ff0d9.firebaseapp.com",
  databaseURL: "https://penguinhub-ff0d9-default-rtdb.firebaseio.com",
  projectId: "penguinhub-ff0d9",
  storageBucket: "penguinhub-ff0d9.appspot.com",
  messagingSenderId: "888623892856",
  appId: "1:888623892856:web:a2aded50f6096d2573208d",
  measurementId: "G-GRSPM3N8DX"
};
var firebaseConfig = {
  apiKey: "xxx-xxx-xxx-xxx-xxx-xxx-xxx-xxx",
  authDomain: "xxx-xxx-xxx-xxx-xxx-xxx-xxx-xxx",
  databaseURL: "xxx-xxx-xxx-xxx-xxx-xxx-xxx-xxx",
  projectId: "xxx-xxx-xxx-xxx-xxx-xxx-xxx-xxx",
  storageBucket: "xxx-xxx-xxx-xxx-xxx-xxx-xxx-xxx",
  messagingSenderId: "xxx-xxx-xxx-xxx-xxx-xxx-xxx-xxx",
  appId: "xxx-xxx-xxx-xxx-xxx-xxx-xxx-xxx",
};

firebase.initializeApp(firebaseConfig);

const db = firebase.database();

const username = prompt("Please Tell Us Your Name");
var firebaseConfig = {
  apiKey: "xxx-xxx-xxx-xxx-xxx-xxx-xxx-xxx",
  authDomain: "xxx-xxx-xxx-xxx-xxx-xxx-xxx-xxx",
  databaseURL: "xxx-xxx-xxx-xxx-xxx-xxx-xxx-xxx",
  projectId: "xxx-xxx-xxx-xxx-xxx-xxx-xxx-xxx",
  storageBucket: "xxx-xxx-xxx-xxx-xxx-xxx-xxx-xxx",
  messagingSenderId: "xxx-xxx-xxx-xxx-xxx-xxx-xxx-xxx",
  appId: "xxx-xxx-xxx-xxx-xxx-xxx-xxx-xxx",
};

firebase.initializeApp(firebaseConfig);

const db = firebase.database();

const username = prompt("Please Tell Us Your Name");

function sendMessage(e) {
  e.preventDefault();

  // get values to be submitted
  const timestamp = Date.now();
  const messageInput = document.getElementById("message-input");
  const message = messageInput.value;

  // clear the input box
  messageInput.value = "";

  //auto scroll to bottom
  document
    .getElementById("messages")
    .scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" });

  // create db collection and send in the data
  db.ref("messages/" + timestamp).set({
    username,
    message,
  });
}

const fetchChat = db.ref("messages/");

fetchChat.on("child_added", function (snapshot) {
  const messages = snapshot.val();
  const message = `<li class=${
    username === messages.username ? "sent" : "receive"
  }><span>${messages.username}: </span>${messages.message}</li>`;
  // append the message on the page
  document.getElementById("messages").innerHTML += message;
});
