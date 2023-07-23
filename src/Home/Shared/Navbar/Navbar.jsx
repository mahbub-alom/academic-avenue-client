import React from "react";
import { Link } from "react-router-dom";
import logo from "../../../assets/Logo/navLogo.png";
import { FaSearch } from "react-icons/fa";

const Navbar = () => {
  const user = true;

  const navItem = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/menu">Colleges</Link>
      </li>
      <li>
        <Link to="/order/salad">Admission</Link>
      </li>
      <li>
        <Link to="/order/salad">My College</Link>
      </li>
      {user ? (
        <li>
          <Link>Log Out</Link>
        </li>
      ) : (
        <li>
          <Link to="/login">Login</Link>
        </li>
      )}
    </>
  );
  return (
    <>
      <div className="navbar fixed z-10 max-w-screen-xl bg-opacity-30 bg-black text-white">
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
              {navItem}
            </ul>
          </div>
          <img className="w-28 hidden md:inline" src={logo} alt="" />
          <Link to="/" className="normal-case hidden md:inline text-xl">
            Academic <span className="text-blue-400">Avenue</span>
          </Link>
          <div className="flex gap-2 items-center">
            <input
              type="text"
              placeholder="Search College"
              className="input ms-3 input-bordered input-info w-full max-w-xs"
            />
            <button><FaSearch className="w-10" /></button>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navItem}</ul>
        </div>
        <div className="navbar-end">
          <div className="avatar">
            <div className="w-12 rounded-full">
              {/* <img title={user.displayName} src={user.photoURL} /> */}
              <img src="" alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
