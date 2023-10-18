import { createContext, useEffect, useState } from 'react';
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




export const userContext = createContext(null)

const AuthProvider = ({ children }) => {
    const [userInfo, setUser] = useState(null);
    const [loading, setLoading] = useState(true)


    const provider = new GoogleAuthProvider();

    
    const createUser = (email, password) => {
        setLoading(true)

        return createUserWithEmailAndPassword(auth, email, password)

    }

    const googleSignIn = () => {
        setLoading(true)
        return signInWithPopup(auth, provider)
    }

    const signInWithAccount = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

  
    
        

    useEffect(()=>{
        onAuthStateChanged(auth, (user)=>{
            
            
               
                setUser(user)
                setLoading(false)
                
             
        })
    },[])


    const contextValue = {
        userInfo,
        createUser,
        googleSignIn,
        signInWithAccount,
        signOut,
        loading,
        setLoading,


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