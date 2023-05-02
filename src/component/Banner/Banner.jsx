import React from "react";
import "./Banner.css";
import food1 from "../../assets/food1 (1).png";
import food2 from "../../assets/food1 (2).png";
import food3 from "../../assets/food1 (3).png";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className="h-screen  container mx-auto banner flex flex-col lg:flex-row justify-center items-center px-5">
      <div className="text-center lg:text-start">
        <h2 className="text-3xl lg:text-6xl text-stone-300 font-bold">
          Welcome to World Class Chef !
        </h2>
        <p className="text-base font-medium my-3 text-stone-400">
          Welcome to our chef-inspired world of culinary delight! Let us take
          you on a journey of <br /> flavor and texture with our expertly
          crafted dishes
        </p>
        <Link to="/about">
          <button className="btn btn-outline rounded-full text-stone-300">
            About Us
          </button>
        </Link>
      </div>
      <Carousel className="lg:w-3/5 mx-auto mt-5 lg:mt-0">
        <div>
          <img src={food1} />
          <p className="legend">Lasagne</p>
        </div>
        <div>
          <img src={food2} />
          <p className="legend">Margherita Pizza</p>
        </div>
        <div>
          <img src={food3} />
          <p className="legend">Spaghetti Carbonara</p>
        </div>
      </Carousel>
    </div>
  );
};

export default Banner;
