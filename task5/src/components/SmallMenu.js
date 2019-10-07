import React from 'react';
import '../App.css';

export const SmallMenu = ({isOpened, setOpened, changeStrToFind}) => (
    <div>
      <div className={`search ${isOpened?"showMenu":"hideMenu"}`}>
          <input 
            type="text" 
            className="search-input" 
            onChange={(e)=>changeStrToFind(e.target.value)} 
            placeholder="Search..."  
          />
        <button className="search-button"><i className="fa fa-search" aria-hidden="true"></i></button>
      </div>
      <div className={`small-menu ${isOpened?"showMenu":"hideMenu"}`}>
        <ul>
          <li>HOME<i className="fa fa-chevron-right" aria-hidden="true"></i></li>
          <li>PROJECTS<i className="fa fa-chevron-right" aria-hidden="true"></i></li>
          <li>GUIDES<i className="fa fa-chevron-right" aria-hidden="true"></i></li>
          <li>BLOG<i className="fa fa-chevron-right" aria-hidden="true"></i></li>
          <li>TRAINING & CERTIFICATION<i className="fa fa-chevron-right" aria-hidden="true"></i></li>
        </ul>
      </div>
      <div 
        className={`button-more ${isOpened?"move-right":""}`}
        onClick={()=>setOpened(!isOpened)} 
        >
          <i className="fa fa-bars" aria-hidden="true"></i>
      </div>
    </div>
)