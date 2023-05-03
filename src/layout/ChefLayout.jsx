import React from "react";
import NavigationBar from "../shared/NavigationBar";
import { Outlet } from "react-router-dom";
import Footer from "../shared/Footer";
import { ToastContainer } from "react-toastify";

const ChefLayout = () => {
  return (
    <div>
      <NavigationBar></NavigationBar>
      <ToastContainer />
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default ChefLayout;
