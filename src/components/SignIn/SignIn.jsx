import React, { use, useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import AuthenticationButton from "../../AuthenticationButton/AuthenticationButton";
import {
  GithubAuthProvider,
  GoogleAuthProvider,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  // signOut,
} from "firebase/auth";
import auth from "../../Auth/Auth";
import { toast } from "react-toastify";
import { LuEye, LuEyeClosed } from "react-icons/lu";
import AuthContext from "../../Context/AuthContext/AuthContext";



const SignIn = () => {
  const authInfo = use(AuthContext);
  // console.log("🚀 ~ SignIn ~ authInfo:", authInfo)

  const signInUser = authInfo.authInfo.signInUser;
  // console.log("🚀 ~ SignIn ~ signInUser:", signInUser);

  const emailRef = useRef(null);
  const navigate = useNavigate();
  const location = useLocation();
  // console.log("🚀 ~ SignIn ~ location:", location);

  const [user, setUser] = useState(null);
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here

    const form = e.target;
    const email = form.elements.email.value;
    // console.log("🚀 ~ handleSubmit ~ email:", email);
    const password = form.elements.password.value;
    // console.log("🚀 ~ handleSubmit ~ password:", password);

    setError("");

    signInUser(email, password)
      .then((userCredential) => {
        // Signed in successfully
        const newUser = userCredential.user;
        // console.log("🚀 ~ handleSubmit ~ signed in user:", newUser);
        setUser(newUser);
        e.target.reset();
        navigate(location?.state || "/");

        if (newUser.emailVerified) {
          toast(
            `Welcome ${newUser.displayName || newUser.email}! You have signed in successfully.`,
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

  const handleForgetPassword = () => {
    // Implement forget password logic here
    // console.log("Forget Password clicked");
    const email = emailRef.current.value;
    // const email = prompt("Please enter your email for password reset:");
    // const email = e.target.elements.email.value;
    // console.log("🚀 ~ handleForgetPassword ~ email:", email);

    sendPasswordResetEmail(auth, email)
      .then(() => {
        // Password reset email sent!
        // ..
        toast("Password reset email sent. Please check your inbox.");
      })
      .catch((error) => {
        // const errorCode = error.code;
        const errorMessage = error.message;
        console.log("🚀 ~ handleForgetPassword ~ errorMessage:", errorMessage);
        // ..
      });
  };

  const handleTogglePassword = (e) => {
    e.preventDefault();
    setShowPassword(!showPassword);
  };

 
  return (
    <div className="hero bg-base-200 min-h-screen">
      <title>Sign In</title>

      {/* {userInfo &&
        toast(`Welcome ${userInfo.name}! You have signed in successfully.`)} */}

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
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  className="input"
                  placeholder="Password"
                />

                <button
                  className="absolute right-4 top-2.5 text-gray-500 text-lg"
                  onClick={handleTogglePassword}
                >
                  {showPassword ? <LuEyeClosed /> : <LuEye />}
                </button>
              </div>
              <div>
                <a className="link link-hover" onClick={handleForgetPassword}>
                  Forgot password?
                </a>
              </div>
              <button className="btn btn-neutral mt-4" type="submit">
                Login
              </button>

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
          {/* <AuthenticationButton /> */}
          <div>
            <h4 className="font-bold text-md my-3 text-black">Login With</h4>
            <AuthenticationButton
              // handleGitHubSignIn={handleGitHubSignIn}
              // handleGoogleSignIn={handleGoogleSignIn}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
