// Initialize Firebase
  var config = {
    apiKey: "AIzaSyBwjqHHd1GkxOclHQ0rFPT82Y9eF1byNJ0",
    authDomain: "docuflow-dashboard.firebaseapp.com",
    databaseURL: "https://docuflow-dashboard.firebaseio.com",
    projectId: "docuflow-dashboard",
    storageBucket: "docuflow-dashboard.appspot.com",
    messagingSenderId: "642958788879"
  };
  firebase.initializeApp(config);

  const messaging = firebase.messaging();
  messaging.requestPermission().then(
    function(){
      console.log('Have permission');
      return messaging.getToken();
    })
    .then(function(token){
      console.log(token);
    })
    .catch(function(error){
      console.log('Error occurred');
    })

  messaging.onMessage(function(payload){
    console.log('onMessage: ', payload);
  });
