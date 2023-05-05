import React from "react";
import { FaHeart } from "react-icons/fa";
import LazyLoad from "react-lazyload";
import { Link } from "react-router-dom";

const ChefDetails = ({ chef }) => {
  const { chefName, chefImg, experience, numRecipes, likes } = chef;
  return (
    <div className="card bg-base-100 shadow-xl ">
      <figure>
        <LazyLoad height={300} offset={[-200, 0]} debounce={300}>
          <img className="" src={chefImg} alt="Shoes" />
        </LazyLoad>
      </figure>
      <div className="card-body">
        <h2 className="card-title">{chefName}</h2>
        <p className="font-medium">Years of experience: {experience}</p>
        <p className="font-medium">Numbers of recipes: {numRecipes}</p>

        <div className="card-actions justify-between items-center">
          <div className="badge badge-outline">
            <FaHeart className="me-2 text-red-600"></FaHeart>
            {likes}
          </div>
          <div className="btn btn-outline">
            <Link to={`/chef/${chef.id}`}>View Recipes</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChefDetails;
