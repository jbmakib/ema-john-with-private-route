import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.config";

const initAuth = () => {
    initializeApp(firebaseConfig);
};

export default initAuth;

/* 
steps for authentication
----------------
step-1: initial setup
1. firebase: create project
2. create web app
3. get config
4. initialize Firebase
5. enable auth method

step-2: Basic Setup
1. Create Login Component
2. Create Register Component
3. Create Route for Login and register component
*/
