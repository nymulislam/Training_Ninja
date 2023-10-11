import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";

const link = (
  <>
    <li>
      <NavLink
        to="/"
        className="block ln py-2 pl-3 pr-4 rounded md:p-0"
        aria-current="page"
      >
        Home
      </NavLink>
    </li>
    <li>
      <NavLink to="/about" className="block ln py-2 pl-3 pr-4 rounded md:p-0">
        About
      </NavLink>
    </li>
    <li>
      <NavLink
        to="/services"
        className="block ln py-2 pl-3 pr-4 rounded md:p-0"
      >
        Services
      </NavLink>
    </li>
    <li>
      <NavLink to="/contact" className="block ln py-2 pl-3 pr-4 rounded md:p-0">
        Contact
      </NavLink>
    </li>
  </>
);

const Navbar = () => {
  return (
    <>
      <nav className="bg-white dark:bg-gray-900 w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto px-6">
          <div>
            <Link to="/" className="flex">
              <img
                src="/public/Logo4.png"
                className="w-[60%] mr-3"
                alt="Training Ninja Logo"
              />
            </Link>
          </div>
          <div
            className="items-center w-full md:flex md:w-auto "
          >
            <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border rounded-lg md:flex-row md:space-x-1 md:mt-0 md:border-0 text-xl">
              {link}
            </ul>
            <Link to="/login">
              <button
                type="button"
                className="btn btn-sm bt ms text-white hover:bg-black bg-gray-800 hover:text-[#ff1949] font-bold text-base"
              >
                Login
              </button>
            </Link>
            <Link to="/registration">
              <button
                type="button"
                className="btn btn-sm bt ms text-white hover:bg-black bg-gray-800 hover:text-[#ff1949] font-bold text-base"
              >
                Sign Up
              </button>
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
