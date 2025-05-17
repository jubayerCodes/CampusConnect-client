import { createContext, useEffect, useState } from "react";
import app from "../../lib/Firebase/firebase.config";
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, FacebookAuthProvider } from "firebase/auth";

export const AuthContext = createContext(null);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const facebookProvider = new FacebookAuthProvider()
auth.useDeviceLanguage();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    const [update, setUpdate] = useState(true)

    const signUpWithEmailAndPassword = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const loginWithEmailAndPassword = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const signInWithGoogle = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }


    const signInWithFacebook = () => {
        setLoading(true)
        return signInWithPopup(auth, facebookProvider)
    }


    const logout = () => {
        setLoading(true)
        return signOut(auth)
    }


    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
            setLoading(false)
        })

        return () => {
            return unsubscribe()
        }
    }, [])

    useEffect(() => {
        console.log("user in auth provider", user);
    }, [user])

    const authInfo = {
        signUpWithEmailAndPassword,
        loginWithEmailAndPassword,
        user,
        loading,
        signInWithGoogle,
        logout,
        signInWithFacebook
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;