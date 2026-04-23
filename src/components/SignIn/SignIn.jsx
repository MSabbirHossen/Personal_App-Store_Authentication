import React, { useRef, useState } from "react";
import { Link } from "react-router";
import AuthenticationButton from "../../AuthenticationButton/AuthenticationButton";
import {
  GithubAuthProvider,
  GoogleAuthProvider,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import auth from "../../Auth/Auth";
import { toast } from "react-toastify";

const googleProvider = new GoogleAuthProvider();
const gitHubProvider = new GithubAuthProvider();


const SignIn = () => {
  const emailRef = useRef(null);

  const [user, setUser] = useState(null);
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here

    const form = e.target;
    const email = form.elements.email.value;
    // console.log("🚀 ~ handleSubmit ~ email:", email);
    const password = form.elements.password.value;
    // console.log("🚀 ~ handleSubmit ~ password:", password);

    setError("");

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        // console.log("🚀 ~ handleSubmit ~ signed in user:", user);
        setUser(user);

        if (user.emailVerified) {
          toast(
            `Welcome ${user.displayName || user.email}! You have signed in successfully.`,
          );
        } else {
          toast.warn("Please verify your email before signing in.");
        }
      })
      .catch((error) => {
        // console.error("Error signing in:", error);
        toast.error(`Sign-in failed: ${error.message}`);
        setError(error.message);
      });
  };

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

  const handleForgetPassword = (e) => {
    // Implement forget password logic here
    console.log("Forget Password clicked");
    const email = emailRef.current.value;
    // const email = prompt("Please enter your email for password reset:");
    // const email = e.target.elements.email.value;
    console.log("🚀 ~ handleForgetPassword ~ email:", email)

    sendPasswordResetEmail(auth, email)
      .then(() => {
        // Password reset email sent!
        // ..
        toast("Password reset email sent. Please check your inbox.");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });
  };

  return (
    <div className="hero bg-base-200 min-h-screen">
      <title>Sign In</title>

      {/* {user &&
        toast(`Welcome ${user.displayName}! You have signed in successfully.`)} */}

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
                ref={emailRef}
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
                <a className="link link-hover" onClick={handleForgetPassword}>
                  Forgot password?
                </a>
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
              {error && <p className="text-red-500 text-center">{error}</p>}
              {/* <button
                className="btn btn-neutral mt-4"
                type="button"
                onClick={handleSignOut}
              >
                Sign Out
              </button> */}
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
