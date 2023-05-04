import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { FaBeer, FaUserCircle } from "react-icons/fa";
import { AuthContext } from "../provider/AuthProvider";

const NavigationBar = () => {
  const { user, logout } = useContext(AuthContext);
  const handleLogOut = () => {
    logout()
      .then(() => {})
      .catch((error) => {
        console.log(error.message);
      });
  };
  // bg-slate-950
  return (
    <div className="navbar 0 mx-auto  bg-slate-950">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <Link to="/home">Home</Link>
            </li>
            <li tabIndex={0}>
              <Link to="/blog">Blog</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <Link
              to="/"
              className="normal-case text-center font-semibold border border-slate-500  rounded-lg "
            >
              The Art of Italian Cooking
            </Link>
          </ul>
        </div>
        <Link
          to="/home"
          className="btn btn-ghost normal-case text-white text-base lg:text-xl  "
        >
          The Art of Italian Cooking
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-white">
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/blog">Blog</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        {user ? (
            <div
              data-tip={user.displayName}
              className="me-2 tooltip tooltip-bottom "
            >
              <img className="w-11 rounded-full " src={user.photoURL} />
            </div>
        ) : (
          <div className="rounded-full text-white">
            <FaUserCircle
              className="me-2"
              style={{ fontSize: "2rem" }}
            ></FaUserCircle>
          </div>
        )}
        {user ? (
          <Link
            onClick={handleLogOut}
            className="btn btn-outline btn-xs sm:btn-sm md:btn-md text-white font-semibold"
          >
            Logout
          </Link>
        ) : (
          <Link
            to="/login"
            className="btn btn-outline btn-xs sm:btn-sm md:btn-md text-white font-semibold"
          >
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default NavigationBar;
