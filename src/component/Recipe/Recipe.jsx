import React, { useState } from "react";
import { Rating } from "@smastrom/react-rating";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "@smastrom/react-rating/style.css";
import { FaHeart, FaRegHeart, FaRegStar } from "react-icons/fa";

const Recipe = ({ recipe }) => {
  const { recipeName, image, ingredients, cookingMethod, rating } = recipe;
  const [favorite, setFavorite] = useState(false);

  const handleButton = () => {
    if (!favorite) {
      setFavorite(toast("The recipe is your favorite"));
    }
  };

  return (
    <div>
      <div className="card bg-base-100 shadow-xl image-full">
        <figure>
          <img src={image} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title font-bold text-slate-50">{recipeName}</h2>
          <div className="text-slate-200">
            <span className="font-semibold text-slate-100">Ingredients:</span>

            {ingredients.map((i, index) => (
              <li key={index}>{i}</li>
            ))}
          </div>
          <p className="text-slate-200 text-justify">
            <span className="font-semibold text-slate-100">
              Cooking Method:{" "}
            </span>
            {cookingMethod}
          </p>
          <div className="card-actions justify-between items-center">
            <div className="flex  items-center text-lg font-semibold text-slate-200">
              <Rating
                className="me-2 "
                style={{ maxWidth: 150, color: "red" }}
                value={rating}
                readOnly
              />
              {rating}
            </div>
            <button
              onClick={handleButton}
              disabled={favorite}
              className="btn btn-error"
            >
              <FaRegHeart
                className="text-white"
                style={{ fontSize: "1.2rem" }}
              ></FaRegHeart>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recipe;
