import React from "react";
import { Link } from "react-router";
import AuthenticationButton from "../../AuthenticationButton/AuthenticationButton";

const SignIn = () => {
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
                <AuthenticationButton />
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
