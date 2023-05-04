import React from "react";
import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  console.error(error);
  return (
      <div id="error-page" className="w-1/2 h-40  mx-auto text-center mt-12 ">
        <h1 className="text-2xl font-bold">Oops!</h1>
        <p className="text-xl font-bold">Sorry, an unexpected error has occurred.</p>
        <p className="text-xl font-bold text-red-600">
          <i>{error.statusText || error.message}</i>
        </p>
        <img className="mt-12" src="https://i.ibb.co/2KkHz7X/Untitled-design-9.png" alt="" />
      </div>
  
  );
};

export default ErrorPage;
