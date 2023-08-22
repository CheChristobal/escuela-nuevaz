import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/storage';
import 'firebase/database';
import 'firebase/auth'; // Importa solo el módulo de autenticación

const firebaseConfig = {
  apiKey: "AIzaSyCW8fSuJZqWizef8FdK7waBW1C3wY9RhBc",
  authDomain: "small-talk-2-647e6.firebaseapp.com",
  databaseURL: "https://small-talk-2-647e6.firebaseio.com",
  projectId: "small-talk-2-647e6",
  storageBucket: "small-talk-2-647e6.appspot.com",
  messagingSenderId: "659526247578",
  appId: "1:659526247578:web:82c1ab05d94cd77cf4eb23"
};

// Inicializa Firebase con la configuración
firebase.initializeApp(firebaseConfig);

export const firestore = firebase.firestore();
export const auth = firebase.auth(); // Exporta el objeto auth
export const storage = firebase.storage();
export const database = firebase.database();
