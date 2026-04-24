import React, { useContext } from "react";
import AuthContext from "../Context/AuthContext/AuthContext";
import { useLocation, useNavigate } from "react-router";

const AuthenticationButton = () => {
  const authInfo = useContext(AuthContext);
  const signInWithGoogle = authInfo.authInfo.signInWithGoogle;
  const signInWithGitHub = authInfo.authInfo.signInWithGitHub;

  const navigate = useNavigate();
  const location = useLocation();

  const handleGoogleSignIn = () => {
    console.log("Google Sign-In button clicked");

    signInWithGoogle()
      .then((result) => {
        console.log("Google Sign-In successful:", result.user);
        navigate(location?.state || "/");
      })
      .catch((error) => {
        console.error("Google Sign-In error:", error);
      });
  };

  const handleGitHubSignIn = () => {
    console.log("GitHub Sign-In button clicked");

    signInWithGitHub()
      .then((result) => {
        console.log("GitHub Sign-In successful:", result.user);
        navigate(location?.state || "/");
      })
      .catch((error) => {
        console.error("GitHub Sign-In error:", error);
      });
  };

  const handleLinkedInSignIn = () => {
    console.log("LinkedIn Sign-In button clicked");
    alert(
      "LinkedIn Sign-In is not implemented yet. Please use Google or GitHub to sign in.",
    );
  };

  return (
    <div>
      <div className="flex gap-2 mt-2">
        {/* LinkedIn */}
        <button
          className="btn bg-[#0967C2] text-white border-[#0059b3] hover:bg-[#0059b3]"
          onClick={handleLinkedInSignIn}
        >
          <svg
            aria-label="LinkedIn logo"
            width="16"
            height="16"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 32 32"
          >
            <path
              fill="white"
              d="M26.111,3H5.889c-1.595,0-2.889,1.293-2.889,2.889V26.111c0,1.595,1.293,2.889,2.889,2.889H26.111c1.595,0,2.889-1.293,2.889-2.889V5.889c0-1.595-1.293-2.889-2.889-2.889ZM10.861,25.389h-3.877V12.87h3.877v12.519Zm-1.957-14.158c-1.267,0-2.293-1.034-2.293-2.31s1.026-2.31,2.293-2.31,2.292,1.034,2.292,2.31-1.026,2.31-2.292,2.31Zm16.485,14.158h-3.858v-6.571c0-1.802-.685-2.809-2.111-2.809-1.551,0-2.362,1.048-2.362,2.809v6.571h-3.718V12.87h3.718v1.686s1.118-2.069,3.775-2.069,4.556,1.621,4.556,4.975v7.926Z"
              fillRule="evenodd"
            ></path>
          </svg>
          LinkedIn
        </button>

        {/* GitHub */}
        <button
          className="btn bg-black text-white border-black"
          onClick={handleGitHubSignIn}
        >
          <svg
            aria-label="GitHub logo"
            width="16"
            height="16"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path
              fill="white"
              d="M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12A10,10 0 0,0 12,2Z"
            ></path>
          </svg>
          GitHub
        </button>

        {/* Google */}
        <button
          className="btn bg-white text-black border-[#e5e5e5]"
          onClick={handleGoogleSignIn}
        >
          <svg
            aria-label="Google logo"
            width="16"
            height="16"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <g>
              <path d="m0 0H512V512H0" fill="#fff"></path>
              <path
                fill="#34a853"
                d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
              ></path>
              <path
                fill="#4285f4"
                d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
              ></path>
              <path
                fill="#fbbc02"
                d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
              ></path>
              <path
                fill="#ea4335"
                d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
              ></path>
            </g>
          </svg>
          Google
        </button>
      </div>
    </div>
  );
};

export default AuthenticationButton;
