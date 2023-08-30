
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDcCMS4ZYbgGD2THn0HiXbX5OYYtnAscRM",
  authDomain: "blog-react-b4c05.firebaseapp.com",
  projectId: "blog-react-b4c05",
  storageBucket: "blog-react-b4c05.appspot.com",
  messagingSenderId: "416064179133",
  appId: "1:416064179133:web:6d4167e6d7a814735f60d4"
};


const app = initializeApp(firebaseConfig);
const storage = getStorage(app);
export default storage;