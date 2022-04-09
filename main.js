function login(){
    user_name= document.getElementById("user_name").value;
    user_age= document.getElementById("user_age").value;
localStorage.setItem("user_name", user_name);
localStorage.setItem("user_age", user_age);
window.location= "menu.html";
}

function newsgroup(){
window.location="room.html";
}

function donate(){
    window.location="donate.html";
    }

  