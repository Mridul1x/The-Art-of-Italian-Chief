import React from "react";
import { Link } from "react-router-dom";
import { FaBeer, FaUserCircle } from "react-icons/fa";

const NavigationBar = () => {
  return (
    <div className="navbar container mx-auto bg-slate-950 ">
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
              <Link to="/">Home</Link>
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
          to="/"
          className="btn btn-ghost normal-case text-white text-xl hidden lg:block pt-2 "
        >
          The Art of Italian Cooking
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-white">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li tabIndex={0}>
            <Link to="/blog">Blog</Link>
          </li>
          <li>
            <Link to="/">About</Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <div className="rounded-full text-white">
          <FaUserCircle
            className="me-2"
            style={{ fontSize: "2rem" }}
          ></FaUserCircle>
        </div>
        <Link to="/login" className="btn btn-outline  text-white font-semibold">
          Login
        </Link>
      </div>
    </div>
  );
};

export default NavigationBar;
