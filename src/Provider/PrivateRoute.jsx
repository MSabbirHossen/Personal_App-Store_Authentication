import React, { useContext } from "react";
import AuthContext from "../Context/AuthContext/AuthContext";
import { Navigate } from "react-router";
// import { toast } from "react-toastify";
// import { toast } from "react-toastify";

const PrivateRoute = ({ children }) => {
  const authInfo = useContext(AuthContext);
  const user = authInfo.authInfo.user;
  const loading = authInfo.authInfo.loading;

  if (loading) {
    return (
      <span className="loading loading-spinner loading-xl mx-auto h-screen flex justify-center"></span>
    );
  }

  if (!user) {
    return (
      <>
        <Navigate to="/signin" />
        {/* alert("Please sign in to access this page."); */}
      </>
    );
  }
  return children;
};

export default PrivateRoute;
