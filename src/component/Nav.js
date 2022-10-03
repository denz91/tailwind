import React from "react";
import { Link } from "react-router-dom";
const Nav = () => {
  return (
    <nav className="p-1 w-full bg-white md:flex md:justify-between shadow-cyan-600/50 shadow-xl sticky top-0 left-0">
      <div className="flex items-center space-x-2 w-1/3">
        <img className="h-6 w-6 " src="/logo192.png" alt="" />
        <span className="font-display font-bold">Rumah Ikan</span>
      </div>
      <ul className="flex items-center flex-grow justify-center w-1/3">
        <Link className="mx-4 font-bold" to="/">
          Home
        </Link>
        <Link className="mx-4 font-bold" to="/Product">
          Product
        </Link>
        <Link className="mx-4 font-bold" to="/Contact">
          Contact
        </Link>
        <Link className="mx-4 font-bold" to="/About">
          About
        </Link>
      </ul>
      <div className=" flex justify-end w-1/3">
        <button className="bg-cyan-400 text-white font-bold px-4 py-1  rounded-lg mx-4">
          Get Started
        </button>
      </div>
    </nav>
  );
};

export default Nav;
