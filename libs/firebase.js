import firebase from 'firebase/compat/app'
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';

const firebaseConfig = {
    apiKey: "AIzaSyD3ngm2O5pszWQMY-eU6YqgLNXoLPlVWCE",
    authDomain: "dinner-bca8e.firebaseapp.com",
    databaseURL: "https://dinner-bca8e-default-rtdb.firebaseio.com",
    projectId: "dinner-bca8e",
    storageBucket: "dinner-bca8e.appspot.com",
    messagingSenderId: "46450860407",
    appId: "1:46450860407:web:26203625b029dddc88c172"
  };    

  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig)
}

if (location.hostname === 'localhost') {
    firebase.firestore().settings({
        host: 'localhost:8080',
        ssl: false,
        experimentalForceLongPolling: true
    })
}

export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
export const firestore = firebase.firestore();
export const storage = firebase.storage();