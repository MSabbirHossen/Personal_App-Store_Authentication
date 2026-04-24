import React, { use, useState } from "react";
import { Link } from "react-router";
import AuthenticationButton from "../../AuthenticationButton/AuthenticationButton";

import { LuEye, LuEyeClosed } from "react-icons/lu";
import AuthContext from "../../Context/AuthContext/AuthContext";
import { toast } from "react-toastify";
import { updateProfile } from "firebase/auth";
import auth from "../../Auth/Auth";

const SignUp = () => {
  const authInfo = use(AuthContext);

  const createUser = authInfo.authInfo.createUser;
  const verifyEmail = authInfo.authInfo.verifyEmail;
  const updateUserProfile = authInfo.authInfo.updateUserProfile;

  const [user, setUser] = useState(null);

  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   // Handle form submission logic here
  //   const form = e.target;
  //   const name = form.elements.name.value;
  //   const photoUrl = form.elements.photoUrl.value;
  //   const email = form.elements.email.value;
  //   const password = form.elements.password.value;
  //   const termsAccepted = form.elements.terms.checked;

  //   createUser(email, password)
  //     .then((result) => {
  //       const user = result.user;
  //       // console.log("🚀 ~ handleSubmit ~ new user: created", user);
  //       setSuccess(true);
  //     })
  //     .catch((error) => {
  //       setError(error.message);
  //     });
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here

    const form = e.target;
    const name = form.elements.name.value;
    // console.log("🚀 ~ handleSubmit ~ name:", name);
    const photoUrl = form.elements.photoUrl.value;
    // console.log("🚀 ~ handleSubmit ~ photoUrl:", photoUrl);
    const email = form.elements.email.value;
    // console.log("🚀 ~ handleSubmit ~ email:", email);
    const password = form.elements.password.value;
    //  console.log("🚀 ~ handleSubmit ~ password:", password);
    const termsAccepted = form.elements.terms.checked;
    // console.log("🚀 ~ handleSubmit ~ termsAccepted:", termsAccepted);

    // Basic Client-side validation
    if (!name || !email || !password) {
      setError("All fields are required");
      return;
    }

    if (password.length < 6) {
      setError("Password must be at least 6 characters long");
      return;
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
      setError("Please enter a valid email address");
      return;
    }

    if (!termsAccepted) {
      setError("You must accept the terms and conditions");
      return;
    }

    // if all fields are filled then reset error state before attempting sign-up
    if (error) {
      setError("");
    }

    // reset error state before attempting sign-up
    setError("");
    setSuccess(false);

      createUser(email, password)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          // console.log("🚀 ~ handleSubmit ~ new user: created", user);
          setSuccess(true);

            // Update user profile with name and photo URL
            const profile ={
                displayName: name,
                photoURL: photoUrl,
              };

              updateUserProfile(profile)
                .then(() => {
                  // console.log("🚀 ~ handleSubmit ~ profile updated") ;
                })
                .catch((error) => {
                  console.error("Error updating profile:", error);
                });

          // Send email verification
          verifyEmail(user)
            .then(() => {
              toast("Verification email sent");
            })
            .catch((error) => {
              toast("Error sending verification email:", error);
            });
        })
        .catch((error) => {
          // console.error("Error signing up:", error);
          setError(error.message);
        });
  };

  const handleTogglePassword = (e) => {
    e.preventDefault();
    setShowPassword(!showPassword);
  };

  return (
    <div className="hero bg-base-200 min-h-screen">
      <title>Sign Up</title>
      <div className="hero-content">
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl p-6">
          <div className="text-center">
            <h1 className="text-3xl font-bold">Sign Up now!</h1>
          </div>
          <form className="card-body" onSubmit={handleSubmit}>
            <fieldset className="fieldset">
              {/* Name */}
              <label className="label">Name</label>
              <input
                type="text"
                name="name"
                className="input"
                placeholder="Name"
              />
              {/* photoUrl */}
              <label className="label">Photo URL</label>
              <input
                type="text"
                name="photoUrl"
                className="input"
                placeholder="Photo URL"
              />
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
                {error && <p className="text-red-500 text-center">{error}</p>}
                {success && (
                  <p className="text-green-500 text-center">
                    Account created successfully!
                  </p>
                )}
              </div>

              <div>
                <label className="label">
                  <input type="checkbox" className="checkbox" name="terms" />
                  Accept Terms and Conditions
                </label>
              </div>
              <button className="btn btn-neutral mt-4" type="submit">
                Sign Up
              </button>

              <p className="text-center text-sm text-gray-500 mt-4">
                Already have an account?{" "}
                <Link to={"/signin"} className="text-red-500 link link-hover">
                  Sign In
                </Link>
              </p>
            </fieldset>
          </form>
          {/* <AuthenticationButton /> */}
          <div>
            <h4 className="font-bold text-md my-3 text-black">Sign Up With</h4>
            <AuthenticationButton />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
