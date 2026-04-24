import React, { useEffect, useState } from "react";
import AuthContext from "../Context/AuthContext/AuthContext";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
} from "firebase/auth";
import auth from "../Auth/Auth";

const AuthProvider = ({ children }) => {

    const [user , setUser] =useState(null);

  const createUser = (email, password) => {
    // Simulate user creation logic (e.g., API call)    }
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signInUser = (email, password) => {
    // Simulate user sign-in logic (e.g., API call)
    return signInWithEmailAndPassword(auth, email, password);
  };

  // get current user from firebase auth

  useEffect(() =>{
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      // console.log("🚀 ~ onAuthStateChanged ~ currentUser:", currentUser);
      setUser(currentUser);
      {
        currentUser
          ? console.log("User is signed in:", currentUser)
          : console.log("No user is signed in.");
      }
    });
    return () => {
      unsubscribe();
    };
  }, []);

  const authInfo = {
    user,
    createUser,
    signInUser,
  };

  return (
    <AuthContext.Provider value={{ authInfo }}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
