const firebaseConfig = {
    apiKey: "AIzaSyBPH8uirPsmVWqxlTq164uhfe4J1jj-K4U",
    authDomain: "kwitter-3170c.firebaseapp.com",
    databaseURL: "https://kwitter-3170c-default-rtdb.firebaseio.com",
    projectId: "kwitter-3170c",
    storageBucket: "kwitter-3170c.appspot.com",
    messagingSenderId: "148735705210",
    appId: "1:148735705210:web:dc43ffa287e3dd32313bc3"
  };
  firebase.initializeApp(firebaseConfig);
  
  
  
  user_name = localStorage.getItem("user_name");
  room_name = localStorage.getItem("room_name");
  
  function send(){
    msg = document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
        Name : user_name,
        Message : msg
    });

  }













  function logout(){
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location = "index.html";
  }