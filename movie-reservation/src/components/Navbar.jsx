import React from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";

const Navbar = ({ setShow }) => {
  return (
    <div>
      <div className="navbar">
        <div className="logo">
          Mov<span>Serve</span>
        </div>
        <ul>
          <li>
            <Link className="list" to={"/"}>
              Home
            </Link>
          </li>
          <li>
            <Link className="list" to={"/Reserve"}>
              Reserve
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
