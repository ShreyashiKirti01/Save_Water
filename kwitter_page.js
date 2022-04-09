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
   
user_name = localStorage.getItem("user_name");
room_name = localStorage.getItem("room_name");

function send() {
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            likes: 0,
            message: msg,
            name: user_name
      });
      document.getElementById("msg").value = "";
}

function getData() {
      firebase.database().ref("/" + room_name).on('value', function (snapshot) {
            document.getElementById("output").innerHTML = ""; snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key; childData = childSnapshot.val(); if (childKey != "purpose") {
                        firebase_message_id = childKey;
                        message_data = childData;
                        //Start code
                        name = message_data["name"];
                        message = message_data["message"];
                        likes = message_data["likes"];

                        name_with_tag = "<h4>" + name + "<img src='tick.png' class='user_tick'></h4>";
                        msg_with_tag = "<h4 class='user_msg'>" + message + "</h4>";
                        likes_with_tag = "<button id=" + firebase_message_id + " class='btn btn-danger' value=" +likes+ " onclick ='updatelikes(this.id)'>";
                        span_tag = "<span class='glyphicon glyphicon-thumbs-up'>Like:" + likes + " </span> </button> <hr>";
                        row = name_with_tag + msg_with_tag + likes_with_tag + span_tag;
                        document.getElementById("output").innerHTML += row;
                        //End code
                  }
            });
      });
}
getData();




function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}

function updatelikes(message_id) {
      button_id = message_id;
      like = document.getElementById(button_id).value;
      update_like = Number(like) + 1;
      firebase.database().ref(room_name).child(message_id).update({
            likes: update_like
      });
}