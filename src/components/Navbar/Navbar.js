import React from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/images/movie.svg";

function Navbar() {
  return (
    <div className="fixed z-10 mx-auto w-[100%] top-0 py-3 px-10 bg-cyan-500">
      <div className="container mx-auto flex items-center justify-between">
        <Link to={"/"} className="text-red-500 font-bold text-[20px]">
          <img src={logo} width={45} height={70} alt="site logo" />
        </Link>
        <nav className="flex gap-x-3">
          <NavLink className={"border-b-2 border-transparent"} to="/">
            Home
          </NavLink>
          <NavLink className={"border-b-2 border-transparent"} to="/popular">
            Popular
          </NavLink>
          <NavLink className={"border-b-2 border-transparent"} to="/toprated">
            Top Rated
          </NavLink>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
