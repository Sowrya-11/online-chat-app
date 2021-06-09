
//ADD YOUR FIREBASE LINKS HERE
// this a dark green colour
// Your web app's Firebase configuration
var firebaseConfig = {
      apiKey: "AIzaSyALIqcSku-yTUBV7UCJj5X_H-0cOSoDnfU",
      authDomain: "greetingbot-winw.firebaseapp.com",
      databaseURL: "https://greetingbot-winw-default-rtdb.firebaseio.com",
      projectId: "greetingbot-winw",
      storageBucket: "greetingbot-winw.appspot.com",
      messagingSenderId: "778601697744",
      appId: "1:778601697744:web:dc7dd6d145d6571780e9d5"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    
  var user_name = localStorage.getItem("user name");
  document.getElementById("user_name").innerHTML="welcome "+user_name+"!";

  
  function add(){
    var room_name=document.getElementById("room_name?").value;
    firebase.database().ref("/").child(room_name).update({
      adding:"rooms"
    });
    localStorage.setItem("room:",room_name);
    //window.location='kwitter_page.html';
  }


function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
    console.log(Room_names);
    row="<div class='room_name' id="+Room_names+" onclick='rom(this.id)'>#"+Room_names+"</div><hr>";
    document.getElementById('output').innerHTML=row;

      //End code
      });});}
getData();

function rom(name){
console.log(name)
localStorage.setItem("room_name", name);
window.location='kwitter_page.html';
}
