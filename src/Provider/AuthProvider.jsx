import React from 'react';
import AuthContext from '../Context/AuthContext/AuthContext';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import auth from '../Auth/Auth';

const AuthProvider = ({ children }) => {

    const createUser = (email, password) => {
        // Simulate user creation logic (e.g., API call)    }
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signInUser = (email, password) => {
        // Simulate user sign-in logic (e.g., API call)
            return signInWithEmailAndPassword(auth, email, password);
    }

    const authInfo = {
        createUser,
        signInUser,
    }

    return (
        <AuthContext.Provider value={{ authInfo }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;