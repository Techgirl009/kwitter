var firebaseConfig = {
      apiKey: "AIzaSyDUOcdyLsGyiQVFUozNH6V8Bv7-SqijLTM",
      authDomain: "kwitter-f29ec.firebaseapp.com",
      databaseURL: "https://kwitter-f29ec-default-rtdb.firebaseio.com",
      projectId: "kwitter-f29ec",
      storageBucket: "kwitter-f29ec.appspot.com",
      messagingSenderId: "348487665550",
      appId: "1:348487665550:web:0ba38f292545f1cbe706df"
    };
    
    firebase.initializeApp(firebaseConfig);

    user_name = localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'># "+ Room_names +" </div><hr>";
      document.getElementById("output").innerHTML += row;
      });});}
getData();

function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}

function logout()
{
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}

function addRoom()
{
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
        item2 : "Cake"
      });
           localStorage.setItem("room_name", room__name);
           window.location = "kwitter_page.html";
}