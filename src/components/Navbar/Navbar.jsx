import React, { use, useState } from "react";
import { Link, useLocation } from "react-router";
import { FaGithub } from "react-icons/fa6";
import { CgProfile } from "react-icons/cg";
import AuthContext from "../../Context/AuthContext/AuthContext";
import { signOut } from "firebase/auth";
import toast from "daisyui/components/toast";
import auth from "../../Auth/Auth";

const navLinks = [
  { name: "Home", path: "/", title: "Home" },
  { name: "Apps", path: "/apps", title: "All Apps" },
  { name: "My Installation", path: "/installation", title: "My Installation" },
];

const authLinks = [
  { name: "Sign In", path: "/signin", title: "Sign In" },
  { name: "Sign Up", path: "/signup", title: "Sign Up" },
];

// const authLinksWithUser = [
//   { name: "Sign Out", path: "/signout", title: "Sign Out" },
//   { name: "Profile", path: "/profile", title: "My Profile" },
// ];

const Navbar = () => {
    const [user, setUser] = useState(null);
  

  const authInfo = use(AuthContext);
  console.log("🚀 ~ Navbar ~ user:", authInfo);

  const authUser = authInfo.authInfo.user;
  console.log("🚀 ~ Navbar ~ user:", authUser);

  const location = useLocation();


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


  const isActive = (path) => {
    return location.pathname === path ? "active" : "";
  };

  return (
    <div className="navbar bg-base-100 shadow-sm w-full py-6 px-8">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul className="dropdown-content menu menu-sm bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
            {navLinks.map((link) => (
              <li key={link.name} className={isActive(link.path)}>
                <Link
                  className="text-lg font-semibold"
                  to={link.path}
                  title={link.title}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <Link to="/" className="flex items-center h-full gap-2" title="Home">
            <img src="/logo.png" alt="Logo" className="w-6" />
            <span className="text-md hidden md:block font-bold">
              Personal App Store
            </span>
          </Link>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        {navLinks.map((link) => (
          <Link
            to={link.path}
            key={link.name}
            className={`btn btn-ghost menu menu-horizontal px-2 text-md mx-1 ${
              isActive(link.path) ? "bg-indigo-100 text-indigo-600" : ""
            }`}
          >
            {link.name}
          </Link>
        ))}
      </div>

      {/* AuthLinks */}
      {/* // If the user is logged in then hide the Login and Registration link and show the users profile picture and logout. */}
      <div className="navbar-end">
        {authUser ? (
          <div className="flex items-center gap-4">
            <Link
              to="/profile"
              className="rounded-full text-2xl hover:bg-gray-200 p-2"
            >
              <CgProfile />
            </Link>
            <Link
              to="/signout"
              onClick={handleSignOut}
              className={`btn btn-ghost menu menu-horizontal px-2 text-md mx-1 ${isActive("/signout") ? "bg-indigo-100 text-indigo-600" : ""}`}
            >
              Sign Out
            </Link>
          </div>
        ) : (
          <div className="flex items-center gap-4">
            {authLinks.map((link) => (
              <Link
                to={link.path}
                key={link.name}
                className={`btn btn-ghost menu menu-horizontal px-2 text-md mx-1 ${
                  isActive(link.path) ? "bg-indigo-100 text-indigo-600" : ""
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
