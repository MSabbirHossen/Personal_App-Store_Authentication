import React from "react";
import Navbar from "../Navbar/Navbar";
// import { ToastContainer } from "react-toastify";
import Footer from "../Footer/Footer";
import { Outlet } from "react-router";
import { ToastContainer } from "react-toastify";

const Root = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
      <ToastContainer />
    </>
  );
};

export default Root;
