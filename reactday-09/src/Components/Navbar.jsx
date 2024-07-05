import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav>
        <ul style={{ display: "flex", justifyContent: "space-around," }}>
          <li style={{ listStyleType: "none" }}>
            <Link to="/">Home</Link>
          </li>
          <li style={{ listStyleType: "none" }}>
            <Link to="/about">About</Link>
          </li>
          <li style={{ listStyleType: "none" }}>
            <Link to="/contact">Contact</Link>
          </li>
          <li style={{ listStyleType: "none" }}>
            <Link to="/services">Services</Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
