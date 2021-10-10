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

step-3: customize
1. set up sign in method
2. set up signout method
3. user state
4. special observer
5. return necessary methods and states from useFirebase

step-4: organize
1. create a auth context
2. create a context provider and set a context value
3. use the Auth provider
4. create useAuth hook

step-5: private route
1. create private route
2. set private route
*/
