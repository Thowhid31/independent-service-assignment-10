// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBjL2SuM75TgxpiddsBUfpp5T1zwiFVAdo",
  authDomain: "travel-guider-assignment-10.firebaseapp.com",
  projectId: "travel-guider-assignment-10",
  storageBucket: "travel-guider-assignment-10.appspot.com",
  messagingSenderId: "161756804117",
  appId: "1:161756804117:web:508d628800324ea2beca1c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;

