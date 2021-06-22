import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCPcyMoGt5TF1YcKynarvyuQgaJB8UPpXI",
  authDomain: "netflix-clone-bk-860b6.firebaseapp.com",
  projectId: "netflix-clone-bk-860b6",
  storageBucket: "netflix-clone-bk-860b6.appspot.com",
  messagingSenderId: "44990261210",
  appId: "1:44990261210:web:37fd1bffdfd88299b302e3",
  measurementId: "G-XVBG6ET133",
};
//this takes in the firebaseConfig as the object
const firebaseApp = firebase.initializeApp(firebaseConfig);
//this the database we gona be using
const db = firebaseApp.firestore();
//for authentication
const auth = firebase.auth();

//now over here  i wanna go ahead and export everything that am gona use
//explicit export and we can have many explicit exports but we can have only one default export
export { auth };
//default export
export default { db };
