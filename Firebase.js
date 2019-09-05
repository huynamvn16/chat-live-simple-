// after adding keys
// rename this file to "firebaseSDK.js"

import firebase from 'firebase';

// Initialize Firebaseconst firebaseConfig = {
  
  const firebaseConfig = {
    apiKey: "AIzaSyAiRtpzonQ6B0z6PfG3ONEaXTs7r4EOfNo",
    authDomain: "rnfirebasechat-f28dd.firebaseapp.com",
    databaseURL: "https://rnfirebasechat-f28dd.firebaseio.com",
    projectId: "rnfirebasechat-f28dd",
    storageBucket: "rnfirebasechat-f28dd.appspot.com",
    messagingSenderId: "838226867779",
    appId: "1:838226867779:web:10826b5e62294d0d"
  };
const firebaseSDK = firebase.initializeApp(firebaseConfig);

export default firebaseSDK;