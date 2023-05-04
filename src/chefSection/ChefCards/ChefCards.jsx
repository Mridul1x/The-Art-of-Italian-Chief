import React, { useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import ChefDetails from "../ChefDetails/ChefDetails";

const ChefCards = () => {
  const chefs = useLoaderData();
  return (
    <div className="mt-28 ">
      <div className="lg:w-1/2 lg:mx-auto text-center mx-8">
        <h1 className="text-3xl lg:text-4xl  font-bold">Let's Meet The Experts</h1>
        <p className="text-justify lg:text-center mt-2 ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque aliquam
          veniam, cumque deleniti provident voluptatibus dolor obcaecati quos
          error natus iste atque.
        </p>
      </div>
      <div className="grid mx-8 lg:mx-20 grid-cols-1 lg:grid-cols-3 gap-6  mt-8">
        {chefs.map((chef) => (
          <ChefDetails key={chef.id} chef={chef}></ChefDetails>
        ))}
      </div>
    </div>
  );
};

export default ChefCards;
