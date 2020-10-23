import * as firebase from 'firebase/app';
import 'firebase/firestore';

const app = firebase.initializeApp({
    apiKey: "AIzaSyBPiJUqVPrQWip9XjPdosPcBdbxIze7nZQ",
    authDomain: "coderhouse-mystore.firebaseapp.com",
    databaseURL: "https://coderhouse-mystore.firebaseio.com",
    projectId: "coderhouse-mystore",
    storageBucket: "coderhouse-mystore.appspot.com",
    messagingSenderId: "297912427263",
    appId: "1:297912427263:web:74485c9c39be3257e5a2ca"
});

export function getFirebase() {
  return app;
}

export function getFirestore() {
  return firebase.firestore(app);
}