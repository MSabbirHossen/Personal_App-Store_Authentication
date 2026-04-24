import React, { useEffect, useState } from "react";
import AuthContext from "../Context/AuthContext/AuthContext";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import auth from "../Auth/Auth";
// import { toast } from "react-toastify";

const AuthProvider = ({ children }) => {

    const [user , setUser] =useState(null);
    const [loading, setLoading] = useState(true);

  const createUser = (email, password) => {
    // Simulate user creation logic (e.g., API call)    }
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signInUser = (email, password) => {
    // Simulate user sign-in logic (e.g., API call)
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // get current user from firebase auth

  useEffect(() =>{
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      // console.log("🚀 ~ onAuthStateChanged ~ currentUser:", currentUser);
      setUser(currentUser);
      setLoading(false);
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


  const signOutUser = () => {
    setLoading(true);
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        console.log("User signed out successfully");
      })
      .catch((error) => {
        // An error happened.
        console.error("Error signing out:", error);
      });
  }

  const authInfo = {
    user,
    loading,
    createUser,
    signInUser,
    signOutUser,
  };

  return (
    <AuthContext.Provider value={{ authInfo }}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
