import React from "react";
import photo from "../../assets/experience.png";

const Experience = () => {
  return (
      <div className="mt-12 flex flex-col lg:flex-row mx-auto items-center w-1/2  gap-7">
        <div>
          <img src={photo} alt="" />
        </div>
        <div className="text-start">
          <h1 className="text-4xl font-bold">Experience The Sublime!</h1>
          <p className="my-3 text-justify">
            Chef Alanzo prepares and serves exquisite dinners to parties from
            two to 200 at your home, business or private catering event. His
            blend of French-Mediterranean cuisine draws on a lifetime of skills
            and the knowledge that all meals, no matter how large or how small,
            are special events among family and friends
          </p>
          <div className="flex">
            <button className="btn btn-outline rounded text-slate-950 font-semibold">
              Let's Cook
            </button>
            <button className="btn btn-outline ms-2 rounded text-slate-950 font-semibold">
              Explore More
            </button>
          </div>
        </div>
      </div>
  );
};

export default Experience;
