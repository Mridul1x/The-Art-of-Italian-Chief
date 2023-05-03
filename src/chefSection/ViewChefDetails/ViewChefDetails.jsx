import React from "react";
import { FaHeart } from "react-icons/fa";
import { Link, useLoaderData } from "react-router-dom";
import "./ViewChefDetails.css";
import TypewriterComponent from "typewriter-effect";

const ViewChefDetails = () => {
  const details = useLoaderData();
  const { chefName, chefImg, bio, experience, numRecipes, likes, recipes } =
    details;

  return (
    <div className="container mx-auto banner p-12">
      <div className="card lg:card-side  bg-base-100 shadow-xl ">
        <figure>
          <img src={chefImg} alt="Chef Name" />
        </figure>
        <div className="card-body justify-center">
          <h2 className="card-title text-3xl">
          <TypewriterComponent
            options={{
              pauseFor: 5000,
              strings: [chefName],
              autoStart: true,
              loop: true,
            }}
          />
            </h2>
          <p className="font-semibold text-indigo-700">
            {experience} Years of experience
          </p>
          <p className="mb-0">{bio}</p>

          <p className="font-medium">Numbers of recipes: {numRecipes}</p>
          <div className="card-actions justify-between items-center">
            <div className="badge badge-outline">
              <FaHeart className="me-2 text-red-600"></FaHeart>
              {likes}
            </div>
            <div className="btn btn-outline">
              <Link to={`/`}>View Recipes</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewChefDetails;
