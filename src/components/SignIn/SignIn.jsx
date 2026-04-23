import React from "react";
import { Link } from "react-router";
import AuthenticationButton from "../../AuthenticationButton/AuthenticationButton";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import auth from "../../Auth/Auth";

const googleProvider = new GoogleAuthProvider();

const SignIn = () => {

  const handleGoogleSignIn = () => {
    // Implement Google Sign-In logic here
    console.log("Google Sign-In clicked");

    signInWithPopup(auth, googleProvider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        console.log("🚀 ~ handleGoogleSignIn ~ token:", token)
        // The signed-in user info.
        const user = result.user;
        console.log("🚀 ~ handleGoogleSignIn ~ user:", user)
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        console.log("🚀 ~ handleGoogleSignIn ~ errorCode:", errorCode)
        const errorMessage = error.message;
        console.log("🚀 ~ handleGoogleSignIn ~ errorMessage:", errorMessage)
        // The email of the user's account used.
        const email = error.email;
        console.log("🚀 ~ handleGoogleSignIn ~ email:", email)
        // The firebase.auth.AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        console.log("🚀 ~ handleGoogleSignIn ~ credential:", credential)
      });
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
                <AuthenticationButton handleGoogleSignIn={handleGoogleSignIn} />
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
