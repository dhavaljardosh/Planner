import firebase from 'firebase/app';
import 'firebase/firestore'
import 'firebase/auth'

// Initialize Firebase
var config = {
    apiKey: "AIzaSyCBSRRMjmFqT_FXiGhMSUX6kHfARmWJSAU",
    authDomain: "net-ninja-marioplan-7dd21.firebaseapp.com",
    databaseURL: "https://net-ninja-marioplan-7dd21.firebaseio.com",
    projectId: "net-ninja-marioplan-7dd21",
    storageBucket: "net-ninja-marioplan-7dd21.appspot.com",
    messagingSenderId: "530260301633"
  }

firebase.initializeApp(config);
firebase.firestore().settings({
    timestampsInSnapshots: true
})

export default firebase;