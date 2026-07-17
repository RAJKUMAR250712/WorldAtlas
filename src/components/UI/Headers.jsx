



import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";

const Headers = () => {
  const [show, setShow] = useState(false);

  const handleButtonToggle = () => {
    setShow(!show);
  };

  const closeMenu = () => {
    setShow(false);
  };

  return (
    <header>
      <div className="container">
        <div className="navbar-grid">

          {/* Logo */}
          <div className="Logo">
            <NavLink to="/" onClick={closeMenu}>
              <h1>WorldAtlas</h1>
            </NavLink>
          </div>


          {/* Menu */}
          <nav className={show ? "menu-mobile" : "menu-web"}>
            <ul>
              <li>
                <NavLink to="/" onClick={closeMenu}>
                  Home
                </NavLink>
              </li>

              <li>
                <NavLink to="/about" onClick={closeMenu}>
                  About
                </NavLink>
              </li>

              <li>
                <NavLink to="/contact" onClick={closeMenu}>
                  Contact
                </NavLink>
              </li>
            </ul>
          </nav>


          {/* Hamburger */}
          <div className="ham-menu">
            <button onClick={handleButtonToggle}>
              <GiHamburgerMenu />
            </button>
          </div>


        </div>
      </div>
    </header>
  );
};

export default Headers;