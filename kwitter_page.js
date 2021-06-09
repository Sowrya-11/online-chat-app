//YOUR FIREBASE LINKS
// this a very dark green colour
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

    user_name=localStorage.getItem("user name");

    room_name.localStorage.getItem("room_name");

    function send(){
          var msg=document.getElementById("message").value;
          
          firebase.database().ref(room_name).push({
name:user_name,message:msg,like:0
          });
    document.getElementById("message").value="";
    }

    function logout(){
          localStorage.removeItem("user name");
          localStorage.removeItem("room_name");
          
          window.location='index.html';
    }

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
console.log(firebase_message_id+"=firebase messange id");
console.log(message_data+"=message data");
var name = message_data['name'];
var message = message_data['message'];
var like = message_data['like'];
var name_with_tag="<h4>"+name+"<img class='user_tick' src='tick.png'></h4>";
var message_with_tag="<h4 class=message_h4>"+message+"</h4>";

var likebutton ="<button class='btn btn-warning' id="+firebase_message_id+" value="+like+" onclick='updatelike(this.id)'>";
var span_with_tag ="<span class='glyphicon glyphicon-thumbs-up'> like:"+like+"</span></button><hr>";
var row = name_with_tag+message_with_tag+likebutton+span_with_tag;
document.getElementById("output").innerHTML += row;


//End code
      } });  }); }
getData();

function updatelike(message_id)
var button_id=message_id;
var likes = document.getElementById(button_id).value;
updatelikes = Number(likes)+1
console.log(updatelikes+"=updated likes");
firebase.database().ref(room_name).child(message_id).update({ like : updatelikes });
