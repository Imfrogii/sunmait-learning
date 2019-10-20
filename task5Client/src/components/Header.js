import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { SmallMenu } from "./SmallMenu";
import { HeaderNavigationBar } from "./HeaderNavigationBar";
import { actionChangeStrToFind } from "../store/blocks/actions";
import "../App.css";

export const Header = () => {
  const [isMenuOpened, setMenuOpen] = useState(false);
  const [isSearchOpened, setSearchOpen] = useState(false);
  const dispatch = useDispatch();
  const changeStrToFind = str => dispatch(actionChangeStrToFind(str));

  const removeEvent = () => {
    if (isMenuOpened && document.body.clientWidth >= 1000) setMenuOpen(false);
    if (isSearchOpened && document.body.clientWidth < 1000) setSearchOpen(false);
  };

  useEffect(() => {
    window.addEventListener("resize", removeEvent);
    return function() {
      window.removeEventListener("resize", removeEvent);
    };
  });

  return (
    <div>
      <div className="header-container">
        <SmallMenu
          isOpened={isMenuOpened}
          setOpened={setMenuOpen}
          changeStrToFind={changeStrToFind}
        />
        <HeaderNavigationBar 
          isMenuOpened={isMenuOpened}
          setMenuOpen={setMenuOpen}
          setSearchOpen={setSearchOpen}
          isSearchOpened={isSearchOpened}
        />
      </div>
      <div
        className={`big-search ${isSearchOpened ? "show" : ""}`}
      >
        <input
          type="text"
          placeholder="Search for documentation, guides, and posts..."
          onChange={e => changeStrToFind(e.target.value)}
        />
        <button className="big-search-button">
          <i className="fa fa-search" aria-hidden="true"></i>
        </button>
      </div>
    </div>
  );
};