import { useState, useEffect } from "react";
import {
    getAuth,
    signInWithPopup,
    GoogleAuthProvider,
    onAuthStateChanged,
    signOut,
} from "firebase/auth";
import initAuth from "../Firebase/firebase.init";

initAuth();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    const signInUsingGoogle = () => {
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                console.log(result.user);
            })
            .catch((err) => {
                console.log(err.message);
            });
    };
    const logout = () => {
        signOut(auth)
            .then(() => {
                setUser({});
            })
            .catch((err) => console.log(err.message));
    };

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            }
        });
    }, [auth]);

    return {
        user,
        signInUsingGoogle,
        logout,
    };
};

export default useFirebase;
