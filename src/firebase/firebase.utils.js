import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = 
{
    apiKey: "AIzaSyDKgedqHZqPNMETP5m7Tt_kHDv8tPCtpBM",
    authDomain: "crwn-db-764bb.firebaseapp.com",
    projectId: "crwn-db-764bb",
    storageBucket: "crwn-db-764bb.appspot.com",
    messagingSenderId: "566412141902",
    appId: "1:566412141902:web:afba94fcab61879fb4ea1f",
    measurementId: "G-3MPGXFWPDM"
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ promp: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;