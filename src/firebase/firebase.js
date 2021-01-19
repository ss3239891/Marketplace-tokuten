import firebase from "firebase";  
  
var firebaseConfig = {
    apiKey: "AIzaSyCVlyCPFNljeNuR1GCqN38HbSRfOZaiISY",
    authDomain: "rewards-marketplace-ceb04.firebaseapp.com",
    projectId: "rewards-marketplace-ceb04",
    storageBucket: "rewards-marketplace-ceb04.appspot.com",
    messagingSenderId: "473038938195",
    appId: "1:473038938195:web:431b33d0f916be8be2a6a6",
    measurementId: "G-F9BMVYG4BQ"
};
  
// Initialize Firebase  
var fire = firebase.initializeApp(firebaseConfig);
const database = fire.database();
const rootRef = database.ref('users'); 
export const rewardRef = database.ref('rewards'); 
export default rootRef; 