import React from "react";
import NavigationBar from "../shared/NavigationBar";
import { Outlet } from "react-router-dom";
import Footer from "../shared/Footer";
import Banner from "../component/Banner/Banner";
import Experience from "../component/Experience/Experience";
import CustomerFeedback from "../component/CustomerFeedback/CustomerFeedback";

const Main = () => {
  return (
    <div>
      <NavigationBar></NavigationBar>
      <Banner></Banner>
      <Experience></Experience>
      <Outlet></Outlet>
      <CustomerFeedback></CustomerFeedback>
      <Footer></Footer>
    </div>
  );
};

export default Main;
