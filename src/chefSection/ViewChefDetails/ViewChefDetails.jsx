import React from "react";
import { FaArrowCircleLeft, FaHeart } from "react-icons/fa";
import { Link, useLoaderData } from "react-router-dom";
import "./ViewChefDetails.css";
import TypewriterComponent from "typewriter-effect";
import Recipe from "../../component/Recipe/Recipe";
import { keys } from "localforage";

const ViewChefDetails = () => {
  const details = useLoaderData();
  const { chefName, chefImg, bio, experience, numRecipes, likes, recipes } =
    details;

  return (
    <div className="container mx-auto">
      <div className=" banner p-12">
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
              <div>
                <Link to={`/`}>
                  <FaArrowCircleLeft
                    style={{ fontSize: "2rem" }}
                  ></FaArrowCircleLeft>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <h2 className="text-center mt-6 text-3xl font-bold">
          Gallery of Recipes
        </h2>
        <div className="grid grid-cols-3 mt-10 gap-6">
          {recipes.map((recipe , index) => (
            <Recipe key={index} recipe={recipe}></Recipe>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ViewChefDetails;
