import React, { useContext, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../../assets/Logo/navLogo.png";
import { FaSearch } from "react-icons/fa";
import { AuthContext } from "../../../Providers/AuthProvider";
import Swal from "sweetalert2";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [datas, setDatas] = useState([]);
  useEffect(() => {
    fetch("https://academic-avenue-server-six.vercel.app/users")
      .then((res) => res.json())
      .then((data) => setDatas(data));
  }, []);

  const handleLogout = () => {
    logOut();
    Swal.fire({
      position: "center",
      icon: "success",
      title: "User LogOut successfully",
      showConfirmButton: false,
      timer: 1500,
    });
  };

  const navItem = (
    <>
      <li>
        <NavLink
          style={({ isActive, isPending }) => {
            return {
              color: isPending ? "black" : "white",
              backgroundColor: isActive ? "transparent" : "transparent",
            };
          }}
          to="/"
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          style={({ isActive, isPending }) => {
            return {
              color: isPending ? "black" : "white",
              backgroundColor: isActive ? "transparent" : "transparent",
            };
          }}
          to="/colleges"
        >
          Colleges
        </NavLink>
      </li>
      <li>
        <NavLink
          style={({ isActive, isPending }) => {
            return {
              color: isPending ? "black" : "white",
              backgroundColor: isActive ? "transparent" : "transparent",
            };
          }}
          to="/admission"
        >
          Admission
        </NavLink>
      </li>
      <li>
        <NavLink
          style={({ isActive, isPending }) => {
            return {
              color: isPending ? "black" : "white",
              backgroundColor: isActive ? "transparent" : "transparent",
            };
          }}
          to=""
        >
          My College
        </NavLink>
      </li>
      {user ? (
        <li>
          <NavLink
            onClick={handleLogout}
            style={({ isActive, isPending }) => {
              return {
                color: isPending ? "black" : "white",
                backgroundColor: isActive ? "transparent" : "transparent",
              };
            }}
          >
            Log Out
          </NavLink>
        </li>
      ) : (
        <li>
          <NavLink
            style={({ isActive, isPending }) => {
              return {
                color: isPending ? "black" : "white",
                backgroundColor: isActive ? "transparent" : "transparent",
              };
            }}
            to="/login"
          >
            Login
          </NavLink>
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
          <NavLink to="/" className="normal-case hidden md:inline text-xl">
            Academic <span className="text-blue-400">Avenue</span>
          </NavLink>
          <div className="flex gap-2 items-center">
            <input
              type="text"
              placeholder="Search College"
              className="input ms-3 input-bordered bg-opacity-30 input-info w-full max-w-xs"
            />
            <button>
              <FaSearch className="w-10" />
            </button>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navItem}</ul>
        </div>

        <div className="navbar-end">
          {user && (
            <div className="avatar">
              <div className="w-12 h-12 rounded-full">
               {datas.map(data=> <Link key={data._id} to={`update/${data._id}`}>
                  <img title={user?.displayName} src={user?.photoURL} />
                </Link>)}
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;
