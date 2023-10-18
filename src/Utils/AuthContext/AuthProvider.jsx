import React, { createContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import {

    GoogleAuthProvider,
    createUserWithEmailAndPassword,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signInWithPopup,
    signOut

} from "firebase/auth";
import auth from '../../FirebaseConfig/FirebaseConfig';
import toast from 'react-hot-toast';

export const userContext = createContext(null)

const AuthProvider = ({ children }) => {
    const [user, setUser] = React.useState(null);


    const provider = new GoogleAuthProvider();

    
    const createUser = (email, password) => {

        return createUserWithEmailAndPassword(auth, email, password)

    }

    const googleSignIn = () => {
        return signInWithPopup(auth, provider)
    }

    const signInWithAccount = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const signOutAccount = () => {
        signOut(auth)
        .then(()=>{
            toast.success('Logout Successfully')
        })
        .catch((error)=> {
            const msg = error.message
            toast.error(msg)
        })
    }

    useEffect(()=>{
        onAuthStateChanged(auth, (user)=>{
            if (user) {
                // User is signed in, see docs for a list of available properties
                // https://firebase.google.com/docs/reference/js/auth.user
                const uid = user.uid;
                setUser(user)
                // ...
              } else {
                // User is signed out
                // ...
              }
        })
    },[])


    const contextValue = {
        user,
        createUser,
        googleSignIn,
        signInWithAccount,
        signOutAccount,

    }

    return (
        <userContext.Provider value={contextValue}>
            {children}
        </userContext.Provider>
    );
};

AuthProvider.propTypes = {
    children: PropTypes.object.isRequired
}

export default AuthProvider;