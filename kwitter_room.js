var firebaseConfig = {
  apiKey: "AIzaSyAREYQyapcn3gmnObEQp17tONht7WUcclk",
  authDomain: "save-water-af6f4.firebaseapp.com",
  databaseURL: "https://save-water-af6f4-default-rtdb.firebaseio.com",
  projectId: "save-water-af6f4",
  storageBucket: "save-water-af6f4.appspot.com",
  messagingSenderId: "866170214141",
  appId: "1:866170214141:web:170bcaba468544434a5094"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

user_name= localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML="<h3>Welcome "+user_name+" ! </h3>";

function add_room(){
room_name= document.getElementById("add_room").value;
firebase.database().ref("/").child(room_name).update({
room_name: room_name
});

localStorage.setItem("room_name", room_name);
document.getElementById("add_room").value="";
window.location="awareness_page.html";

}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
     row="<div class='rooms_name' id='"+Room_names+"' onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
     document.getElementById("output").innerHTML+=row;
      });});}
getData();

function redirectToRoomName(name){
localStorage.setItem("room_name", name);
window.location="awareness_page.html";
}

function logout(){
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
window.location="index.html";
}
