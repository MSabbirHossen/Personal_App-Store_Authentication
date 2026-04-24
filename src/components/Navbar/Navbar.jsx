import React, { use } from "react";
import { Link, useLocation } from "react-router";
import { FaGithub } from "react-icons/fa6";
import { CgProfile } from "react-icons/cg";
import AuthContext from "../../Context/AuthContext/AuthContext";

const navLinks = [
  { name: "Home", path: "/", title: "Home" },
  { name: "Apps", path: "/apps", title: "All Apps" },
  { name: "My Installation", path: "/installation", title: "My Installation" },
];

const authLinks = [
  { name: "Sign In", path: "/signin", title: "Sign In" },
  { name: "Sign Up", path: "/signup", title: "Sign Up" },
  { name: "Sign Out", path: "/signout", title: "Sign Out" },
];
const Navbar = () => {
  const userInfo = use(AuthContext);
  console.log("🚀 ~ Navbar ~ userInfo:", userInfo);

  const location = useLocation();

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
      <div className="navbar-end">
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

        <Link to="/profile" className="btn btn-ghost rounded-full text-2xl ">
          <CgProfile />
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
