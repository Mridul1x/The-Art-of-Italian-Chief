import React from "react";

const CustomerFeedback = () => {
  return (
    <div className="mt-28  ">
      <div className="text-center ">
        <h1 className="text-2xl lg:text-3xl font-bold">
          What Customers Are Saying About Us
        </h1>
        <p className="text-lg lg:text-xl mt-2">
          We pride ourselves on what our happy clients say.
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 w-1/2 gap-6 mx-auto mt-12">
        <div className="card card-compact  bg-base-100 shadow-xl">
          <figure>
            <img
              src="https://i.ibb.co/mDYKmF1/Cream-Grunge-Twitter-Profile-Picture-1.png"
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">James B.</h2>
            <p>
              “Was so impressed I had to find out more and tell my friends! Last
              week we attended a fabulous pre-wedding afternoon party”
            </p>
          </div>
        </div>
        <div className="card card-compact  bg-base-100 shadow-xl">
          <figure>
            <img
              src="https://i.ibb.co/ByNfhrk/Cream-Grunge-Twitter-Profile-Picture-2.png"
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Lucinda D.</h2>
            <p>
              “Was so impressed I had to find out more and tell my friends! Last
              week we attended a fabulous pre-wedding afternoon party”
            </p>
          </div>
        </div>
        <div className="card card-compact bg-base-100 shadow-xl">
          <figure>
            <img
              src="https://i.ibb.co/gzyMDkq/Cream-Grunge-Twitter-Profile-Picture.png"
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Thomas S.</h2>
            <p>
              “Many thanks for the beautiful food and wonderful service. Your
              food really made the event special. I appreciate your time and
              effort!”
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerFeedback;
