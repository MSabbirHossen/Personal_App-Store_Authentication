import React, { useEffect, useState } from "react";
import AuthContext from "../Context/AuthContext/AuthContext";
import {
  createUserWithEmailAndPassword,
  GithubAuthProvider,
  GoogleAuthProvider,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import auth from "../Auth/Auth";

const googleProvider = new GoogleAuthProvider();
const gitHubProvider = new GithubAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const createUser = (email, password) => {
    // Simulate user creation logic (e.g., API call)    }
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signInUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  console.log("🚀 ~ signInUser ~ signInUser:", signInUser)

  const signInWithGoogle = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  const signInWithGitHub = () => {
    setLoading(true);
    return signInWithPopup(auth, gitHubProvider);
  };

  const verifyEmail = () => {
    if (auth.currentUser) {
      return auth.currentUser.sendEmailVerification();
    }
  };

  const updateUserProfile = (profile) => {
    if (auth.currentUser) {
      return updateProfile(auth.currentUser, profile);
    }
  };

  const resetPassword = (email) => {
    return sendPasswordResetEmail(auth, email);
  };

  // get current user from firebase auth

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
      // {
      //   currentUser
      //     ? console.log("User is signed in:", currentUser)
      //     : console.log("No user is signed in.");
      // }
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
  };

  const authInfo = {
    user,
    loading,
    createUser,
    signInUser,
    signInWithGoogle,
    signInWithGitHub,
    signOutUser,
    verifyEmail,
    updateUserProfile,
    resetPassword,
  };

  return (
    <AuthContext.Provider value={{ authInfo }}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
