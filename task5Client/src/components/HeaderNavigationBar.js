import React from "react";
import logo from "../img/logo.png";
import "../App.css";

export const HeaderNavigationBar = ({ isMenuOpened, setMenuOpen, isSearchOpened, setSearchOpen }) => (
  <header onClick={isMenuOpened ? () => setMenuOpen(!isMenuOpened) : null}>
    <a
      href="https://spring.io/"
      className={`logo ${isMenuOpened ? "move-right" : ""}`}
    >
      <img src={logo} alt="spring logo" />
    </a>
    <ul>
      <li>PROJECTS</li>
      <li>GUIDES</li>
      <li>BLOG</li>
      <li>TRAINING & CERTIFICATION</li>
      <li
        className={`search-icon ${isSearchOpened ? "hover" : ""}`}
        onClick={() => setSearchOpen(!isSearchOpened)}
      >
        {isSearchOpened ? (
          <big>
            <i className="fa fa-times" aria-hidden="true"></i>
          </big>
        ) : (
          <big>
            <i className="fa fa-search" aria-hidden="true"></i>
          </big>
        )}
      </li>
    </ul>
  </header>
);
