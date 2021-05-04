import firebase from 'firebase';

require('@firebase/firestore')

var firebaseConfig = {
    apiKey: "AIzaSyD0bc1sPhCSKJ7pKuJTIgdDcAV-So0X3dc",
    authDomain: "bartering101-ed230.firebaseapp.com",
    projectId: "bartering101-ed230",
    storageBucket: "bartering101-ed230.appspot.com",
    messagingSenderId: "117552608013",
    appId: "1:117552608013:web:89aec128d741fca342f644"
}

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();