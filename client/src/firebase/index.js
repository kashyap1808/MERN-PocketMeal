import firebase from '@firebase/app';
import '@firebase/storage';
import '@firebase/firestore';
import '@firebase/auth';

// Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyCS4PCalHIPXKtXsIgbkUPrMO6J0xc7oVY",
    authDomain: "loyal-vent-273319.firebaseapp.com",
    databaseURL: "https://loyal-vent-273319.firebaseio.com",
    projectId: "loyal-vent-273319",
    storageBucket: "loyal-vent-273319.appspot.com",
    messagingSenderId: "793711646560",
    appId: "1:793711646560:web:bec2c7f781ba49dcb4f005",
  };
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


const storage = firebase.storage();

export {
  storage, firebase as default
}