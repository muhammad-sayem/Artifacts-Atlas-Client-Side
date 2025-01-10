import { useEffect, useState } from "react";
import AuthContext from "./AuthContext";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../Firebase/firebase.init";
import axios from "axios";

const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const loginUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const loginWithGoogle = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    }

    const signOutUser = () => {
        setLoading(true);
        return signOut(auth);
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, async currentUser => {
            console.log('CurrentUser-->', currentUser)
            if (currentUser?.email) {
                setUser(currentUser)

                // generate token 
                const { data } = await axios.post(`${import.meta.env.VITE_API_URL}/jwt`,
                    { email: currentUser?.email }, { withCredentials: true }) // email hishabe user er email pathano //

                console.log(data);
            }
            else {
                setUser(currentUser)
                const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/logout`, { withCredentials: true })
            }
            setLoading(false)
        })
        return () => {
            return unsubscribe()
        }
    }, [])

    const authInfo = {
        user,
        setUser,
        loading,
        setLoading,
        createUser,
        loginUser,
        signOutUser,
        loginWithGoogle
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;