import firebase from 'firebase'
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCx-U0QqTL8MLnX94zbB5fnsBlKUcbcJuQ",
    authDomain: "facebook-clone-20dfe.firebaseapp.com",
    projectId: "facebook-clone-20dfe",
    storageBucket: "facebook-clone-20dfe.appspot.com",
    messagingSenderId: "741664801890",
    appId: "1:741664801890:web:31b544aad9dd788c79fd3b",
    measurementId: "G-CF168R0TYL"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebaseApp.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export {auth,provider};
  export default db;