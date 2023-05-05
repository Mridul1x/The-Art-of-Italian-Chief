import React from "react";
import NavigationBar from "../shared/NavigationBar";
import { Outlet } from "react-router-dom";
import Footer from "../shared/Footer";

const LoginLayout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex-grow">
        <NavigationBar></NavigationBar>
        <Outlet></Outlet>
      </div>
      <div className="flex-shrink-0">
        <Footer></Footer>
      </div>
    </div>
  );
};

export default LoginLayout;
