import React, { useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import ChefDetails from "../ChefDetails/ChefDetails";

const ChefCards = () => {
  const chefs = useLoaderData();
  console.log(chefs);
  return (
    <div className="h-screen container mx-auto mt-28">
      <div className="w-1/2 mx-auto text-center">
        <h1 className="text-4xl font-bold">Let's Meet The Experts</h1>
        <p className="text-base mt-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque aliquam
          veniam, cumque deleniti provident voluptatibus dolor obcaecati quos
          error natus iste atque debitis.
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-y-5 mx-auto mt-8">
        {chefs.map((chef) => (
          <ChefDetails key={chef.id} chef={chef}></ChefDetails>
        ))}
      </div>
    </div>
  );
};

export default ChefCards;
