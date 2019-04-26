// Initialize Firebase
import firebase from 'firebase/app'
import 'firebase/firestore'

var config = {
    apiKey: "AIzaSyA3sinCRhgMv4xR7XcUaVyfbs4yTd2NNZA",
    authDomain: "todo-ninja-55916.firebaseapp.com",
    databaseURL: "https://todo-ninja-55916.firebaseio.com",
    projectId: "todo-ninja-55916",
    storageBucket: "todo-ninja-55916.appspot.com",
    messagingSenderId: "536488413603"
  };
  firebase.initializeApp(config);
  const db = firebase.firestore();

  db.settings({ timestampsInSnapshots: true }); // agar bisa menyimpan data dalaam format timestamp

  export default db;
