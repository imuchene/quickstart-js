

define(['dyn_modules', 'dotenv'], function (dynModules) {
    for(name in dynModules) {
        //var module = require(path); // Call RequireJS require
        var config = require('dotenv').config()
    }

    // ...
});

// Initialize Firebase
  var config = {
    apiKey: process.env.apiKey,
    authDomain: process.env.authDomain,
    databaseURL: process.env.databaseURL,
    projectId: process.env.projectId,
    storageBucket: process.env.storageBucket,
    messagingSenderId: process.env.messagingSenderId
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
