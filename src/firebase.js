import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyBwX06frbaGu3UuK9BcsPk3LXxVGmZpEiw",
  authDomain: "chat-app-react-acbf4.firebaseapp.com",
  projectId: "chat-app-react-acbf4",
  storageBucket: "chat-app-react-acbf4.appspot.com",
  messagingSenderId: "319601296339",
  appId: "1:319601296339:web:81ef6877a86776e832a526"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider};
export default db;