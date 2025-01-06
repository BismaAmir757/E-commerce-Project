import React from "react";
import "../style/navbar.scss";
import logo from "../assets/logo.png";

const Navbar = () => {
  return (
    <>
      <div className="container-fluid" id="nav-container">
        <div className="row" id="nav-row">
          <div className="col-lg-4 col-md-4 col-sm-4 col-4">
            <button className="nav-button">Contact</button>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-4 col-4">
            <img src={logo} alt="image" width={170} height={30} />
          </div>
          <div className="col-lg-4 col-md-4 col-sm-4 col-4">
            <i class="fa-solid fa-user"></i>
            <i class="fa-solid fa-cart-shopping"></i>
            <i class="fa-solid fa-bars"></i>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
