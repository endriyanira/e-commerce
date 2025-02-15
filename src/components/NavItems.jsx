import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo/logo.png";

const NavItems = () => {
  const [menuToggle, setMenuToggle] = useState(false);
  const [socialToggle, setSocialToggle] = useState(false);
  const [headerFixed, setHeaderfixed] = useState(false);

  //   add event listener for fixed header
  window.addEventListener("scroll", () => {
    if (window.scrollY > 200) {
      setHeaderfixed(true);
    } else {
      setHeaderfixed(false);
    }
  });
  return (
    <header
      className={`header-section style-4 ${
        headerFixed && "header-fixed fadeInUp"
      }`}
    >
      {/* Header top start */}
      <div className={`header-top d-md-none ${socialToggle && "open"}`}>
        <div className="container">
          <div className="header-top-area">
            <Link to={"/sign-up"} className="lab-btn me-3">
              <span>Create Account</span>
            </Link>
            <Link to={"/login"}>Log In</Link>
          </div>
        </div>
      </div>
      {/* Header bottom start */}
      <div className="header-bottom">
        <div className="container">
          <div className="header-wrapper">
            {/* logo */}
            <div className="logo-search-acts">
              <div className="logo">
                <Link to={"/"}>
                  <img src={logo} alt="logo" />
                </Link>
              </div>
            </div>

            {/* menu area */}
            <div className="menu-area">
              <div className="menu">
                <ul className={`lab-ul ${menuToggle && "active"}`}>
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <Link to="/shop">Shop</Link>
                  </li>
                  <li>
                    <Link to="/blog">Blog</Link>
                  </li>
                  <li>
                    <Link to="/about">About</Link>
                  </li>
                  <li>
                    <Link to="/contact">Contact</Link>
                  </li>
                </ul>
              </div>

              {/* Sign up and LogIn */}
              <Link to={"/sign-up"} className="lab-btn me-3 d-none d-md-block">
                Create Account
              </Link>
              <Link to={"login"} className="d-none d-md-block">
                Log In
              </Link>

              {/* Menu Toggler */}
              <div
                onClick={() => setMenuToggle(!menuToggle)}
                className={`header-bar d-lg-none ${menuToggle && "active"}`}
              >
                <span></span>
                <span></span>
                <span></span>
                <span></span>
              </div>

              {/* Social Toggler */}
              <div
                className="ellepsis-bar d-md-none"
                onClick={() => setSocialToggle(!socialToggle)}
              >
                <i className="icofont-info-square"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default NavItems;
