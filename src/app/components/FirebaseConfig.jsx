import { initializeApp } from "firebase/app";
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyAauLlDry2tNNRjaMws8aozh7e4aqZnGPQ",
  authDomain: "aava-d0b02.firebaseapp.com",
  databaseURL: "https://aava-d0b02-default-rtdb.firebaseio.com",
  projectId: "aava-d0b02",
  storageBucket: "aava-d0b02.firebasestorage.app",
  messagingSenderId: "479851013534",
  appId: "1:479851013534:web:5a7785d549d2516023228f",
  measurementId: "G-RMDWECZLF5"
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export { database };
