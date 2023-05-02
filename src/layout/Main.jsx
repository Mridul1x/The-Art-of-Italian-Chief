import React from "react";
import NavBar from "../shared/NavigationBar";
import NavigationBar from "../shared/NavigationBar";
import { Outlet } from "react-router-dom";
import Footer from "../shared/Footer";
import Banner from "../component/Banner/Banner";

const Main = () => {
  return (
    <div>
      <NavigationBar></NavigationBar>
      <Banner></Banner>
      
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Main;
