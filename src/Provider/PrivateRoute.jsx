import React, { useContext } from "react";
import AuthContext from "../Context/AuthContext/AuthContext";
import { Navigate, useLocation } from "react-router";


const PrivateRoute = ({ children }) => {

    const location = useLocation();

  const authInfo = useContext(AuthContext);
  const user = authInfo.authInfo.user;
  const loading = authInfo.authInfo.loading;

  

  if (!user) {
    return (
      <>
        <Navigate state={location?.pathname} to="/signin" />
      </>
    );
  }
  if (loading) {
    return (
      <span className="loading loading-spinner loading-xl mx-auto h-screen flex justify-center"></span>
    );
  }
  return children;
};

export default PrivateRoute;
