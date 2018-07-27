import firebase from 'firebase/app';
import 'firebase/auth';

// Initialize Firebase
const config = {
    apiKey: "AIzaSyATCo1V-QzxoeBcsCPmUSINTCBbHSuADa0",
    authDomain: "codeforum-3802a.firebaseapp.com",
    databaseURL: "https://codeforum-3802a.firebaseio.com",
    projectId: "codeforum-3802a",
    storageBucket: "codeforum-3802a.appspot.com",
    messagingSenderId: "401314268918"
};

if (!firebase.apps.length) {
    firebase.initializeApp(config);
}

const auth = firebase.auth();
export {
    auth
};