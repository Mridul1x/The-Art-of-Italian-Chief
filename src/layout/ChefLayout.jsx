import React from "react";
import NavigationBar from "../shared/NavigationBar";
import { Outlet } from "react-router-dom";
import Footer from "../shared/Footer";
import { ToastContainer } from "react-toastify";
import Banner from "../component/Banner/Banner";
import Experience from "../component/Experience/Experience";
import ChefDetails from "../chefSection/ChefDetails/ChefDetails";
import ChefCards from "../chefSection/ChefCards/ChefCards";
import CustomerFeedback from "../component/CustomerFeedback/CustomerFeedback";

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
