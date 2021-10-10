import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.config";

const initAuth = () => {
    initializeApp(firebaseConfig);
};

export default initAuth;

/* 
steps for authentication
----------------
initial setup
1. firebase: create project
2. create web app
3. get config
4. initialize Firebase
5. enable auth method
*/
