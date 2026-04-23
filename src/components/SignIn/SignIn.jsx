import React, { useState } from "react";
import { Link } from "react-router";
import AuthenticationButton from "../../AuthenticationButton/AuthenticationButton";
import {
  createUserWithEmailAndPassword,
  GithubAuthProvider,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import auth from "../../Auth/Auth";
import { toast } from "react-toastify";

const googleProvider = new GoogleAuthProvider();
const gitHubProvider = new GithubAuthProvider();

const SignIn = () => {
  const [user, setUser] = useState(null);

  

  const handleGoogleSignIn = () => {
    // Implement Google Sign-In logic here
    console.log("Google Sign-In clicked");

    signInWithPopup(auth, googleProvider)
      .then((result) => {
        console.log(result.user);
        setUser(result.user);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleGitHubSignIn = () => {
    // Implement GitHub Sign-In logic here
    console.log("GitHub Sign-In clicked");

    signInWithPopup(auth, gitHubProvider)
      .then((result) => {
        console.log(result.user);
        setUser(result.user);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleSignOut = () => {
    // Implement sign-out logic here
    console.log("Sign Out clicked");
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        toast("User signed out successfully");
      })
      .catch((error) => {
        // An error happened.
        console.error("Error signing out:", error);
      });
    setUser(null);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here

    const form = e.target;
    const email = form.elements.email.value;
    console.log("🚀 ~ handleSubmit ~ email:", email);
    const password = form.elements.password.value;
    console.log("🚀 ~ handleSubmit ~ password:", password);


    
  };
  return (
    <div className="hero bg-base-200 min-h-screen">
      <title>Sign In</title>

      {user &&
        toast(`Welcome ${user.displayName}! You have signed in successfully.`)}

      <div className="hero-content">
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl p-6">
          <div className="text-center">
            <h1 className="text-3xl font-bold">Login now!</h1>
          </div>
          <form className="card-body" onSubmit={handleSubmit}>
            <fieldset className="fieldset">
              {/* Email */}
              <label className="label">Email</label>
              <input
                type="email"
                name="email"
                className="input"
                placeholder="Email"
              />
              {/* Password */}
              <label className="label">Password</label>
              <input
                type="password"
                name="password"
                className="input"
                placeholder="Password"
              />
              <div>
                <a className="link link-hover">Forgot password?</a>
              </div>
              <button className="btn btn-neutral mt-4" type="submit">
                Login
              </button>

              {/* <AuthenticationButton /> */}
              <div>
                <h4 className="font-bold text-md my-3 text-black">
                  Login With
                </h4>
                <AuthenticationButton
                  handleGitHubSignIn={handleGitHubSignIn}
                  handleGoogleSignIn={handleGoogleSignIn}
                />
              </div>

              <p className="text-center text-sm text-gray-500 mt-4">
                Don't have an account?{" "}
                <Link to={"/signup"} className="text-red-500 link link-hover">
                  Sign Up
                </Link>
              </p>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
