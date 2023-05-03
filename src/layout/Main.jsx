import React from "react";
import NavBar from "../shared/NavigationBar";
import NavigationBar from "../shared/NavigationBar";
import { Outlet, useLoaderData } from "react-router-dom";
import Footer from "../shared/Footer";
import Banner from "../component/Banner/Banner";
import Experience from "../component/Experience/Experience";
import ChefCards from "../chefSection/ChefCards/ChefCards";

const Main = () => {
  return (
    <div className="">
      <NavigationBar></NavigationBar>
      <Banner></Banner>
      <Experience></Experience>
      <Outlet></Outlet>
    </div>
  );
};

export default Main;
