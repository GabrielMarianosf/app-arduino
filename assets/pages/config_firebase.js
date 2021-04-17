import * as firebase from 'firebase';

import 'firebase/storage';
import 'firebase/firestore';

var firebaseConfig = {
    apiKey: "AIzaSyDgqNLlQ6KC7Gd-4oJCFxBPFQA6Z_2YrzQ",
    authDomain: "ard-cg.firebaseapp.com",
    databaseURL: "https://ard-cg-default-rtdb.firebaseio.com",
    projectId: "ard-cg",
    storageBucket: "ard-cg.appspot.com",
    messagingSenderId: "214398960322",
    appId: "1:214398960322:web:281baad7327e163f59b15b",
    measurementId: "G-41VVSBTW4V"
};
  firebase.initializeApp (firebaseConfig);

  export const database = firebase.firestore();