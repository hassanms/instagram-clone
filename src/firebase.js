import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAwpy8bNG7hLQAsJTOJcPH8gNcrahjIavw",
    authDomain: "instagram-clone-react-35a4b.firebaseapp.com",
    databaseURL: "https://instagram-clone-react-35a4b.firebaseio.com",
    projectId: "instagram-clone-react-35a4b",
    storageBucket: "instagram-clone-react-35a4b.appspot.com",
    messagingSenderId: "259315041011",
    appId: "1:259315041011:web:cf2c48e9886c57c1acad86",
    measurementId: "G-PBQSSFLNDF"
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };