import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, NavLink } from "react-router-dom";
import auth from "../../firebase.init";
import PrimaryButton from "./PrimaryButton";

const Navbar = () => {
  const [user, loading, error] = useAuthState(auth);
  const logout = () => {
    signOut(auth);
    localStorage.removeItem("accessToken");
  };
  const menuItems = (
    <>
      <li className="ml-2">
        <NavLink to="/">Home</NavLink>
      </li>
      <li className="ml-2">
        <NavLink to="/about">About</NavLink>
      </li>
      <li className="ml-2">
        <NavLink to="/blogs">Blog</NavLink>
      </li>
      <li className="ml-2">
        <a href="https://raihanali.netlify.app" target="_blank">
          My Portfolio
        </a>
      </li>
      <li className="ml-2">
        <NavLink to="/others">Others</NavLink>
      </li>
      {user && (
        <li className="ml-2">
          <NavLink to="/dashboard">Dashboard</NavLink>
        </li>
      )}
      {user ? (
        <button className=" sm:mt-2 md:ml-2 " onClick={logout}>
          <PrimaryButton>Logout</PrimaryButton>
        </button>
      ) : (
        <Link to="/login">
          <PrimaryButton>Login</PrimaryButton>
        </Link>
      )}
    </>
  );
  return (
    <div className="navbar max-w-screen-xl mx-auto">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex="0" className="btn btn-ghost lg:hidden">
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
            tabIndex="0"
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {menuItems}
          </ul>
        </div>
        <Link to="/" className="btn btn-ghost normal-case text-2xl">
          Tools Rex
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal p-0">{menuItems}</ul>
      </div>
      <div className="navbar-end">
        <label
          tabIndex="1"
          htmlFor="dashboard-sidebar"
          className="btn btn-ghost lg:hidden"
        >
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
      </div>
    </div>
  );
};

export default Navbar;
