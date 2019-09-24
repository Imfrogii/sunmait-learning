import React from 'react';
import '../App.css';

const SmallMenu = (props) => {

  return(
    <div>
      <div className="search" style={props.isMenuOpen?{left:0}:{left:-340}}><input type="text" className="search-input" onChange={props.search} placeholder="Search..."  />
        <button className="search-button"><i className="fa fa-search" aria-hidden="true"></i></button>
      </div>
      <div className="small-menu" style={props.isMenuOpen?{left:0}:{left:-340}}>
        <ul>
          <li>HOME<i className="fa fa-chevron-right" aria-hidden="true"></i></li>
          <li>PROJECTS<i className="fa fa-chevron-right" aria-hidden="true"></i></li>
          <li>GUIDES<i className="fa fa-chevron-right" aria-hidden="true"></i></li>
          <li>BLOG<i className="fa fa-chevron-right" aria-hidden="true"></i></li>
          <li>TRAINING & CERTIFICATION<i className="fa fa-chevron-right" aria-hidden="true"></i></li>
        </ul>
      </div>
      <div className="button-more" onClick={()=>props.setMenuOpen(!props.isMenuOpen)}  style={props.isMenuOpen?{marginLeft:290}:{marginLeft:"2vw"}}><i className="fa fa-bars" aria-hidden="true"></i></div>
    </div>
  );
}

export default SmallMenu;
