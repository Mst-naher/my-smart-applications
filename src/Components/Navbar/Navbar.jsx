import React from "react";
import { ImGithub } from "react-icons/im";
import './Navbar.css'
import { TbBrandGithubFilled } from "react-icons/tb";
import { Link, NavLink } from "react-router";

const Navbar = () => {
  const links = (
    <>
      <li>
        <NavLink to="/"></NavLink>
      </li>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/apps">Apps</NavLink>
      </li>
      <li>
        <NavLink to="/installation">Installation</NavLink>
      </li>
    </>
  );

  return (
    <div>
      <div className="navbar bg-base-100 shadow-sm">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>
          <img className="w-10 h-10 ml-15" src="../assets/logo.png" alt="" />
          <h3 className=" text-xl font-semibold p-1">
            <span className=" bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent">
              HERO.IO
            </span>
          </h3>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>
        <a
          href="https://github.com/Mst-naher"
          target="_blank"
          rel="noopener noreferrer"
          className="navbar-end"
        >
          <button className="btn bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white">
            <ImGithub />
            Contribute
          </button>
        </a>
      </div>
    </div>
  );
};

export default Navbar;
