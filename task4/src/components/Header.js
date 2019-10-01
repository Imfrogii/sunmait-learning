import React, { useState, useEffect } from 'react';
import '../App.css';
import logo from '../img/logo.png'
import SmallMenu from "./SmallMenu"


const Header = (props) => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isSearchOpen, setSearchOpen] = useState(false);

  useEffect(()=>{
    if(isSearchOpen)
      setTimeout(() => {
        document.querySelector(".big-search").style.zIndex="0";
      },200);
      else document.querySelector(".big-search").style.zIndex="-100";

  },[isSearchOpen]);

  const removeEvent = () =>{
    if(isMenuOpen&&document.body.clientWidth>=1000)
      setMenuOpen(false);
    if(isSearchOpen&&document.body.clientWidth<1000)
      setSearchOpen(false);
  }

  useEffect(()=>{
    window.addEventListener("resize", removeEvent);
    return function(){
      window.removeEventListener("resize", removeEvent);
    }
  });

  useEffect(()=>{
    if(isMenuOpen){
      let x = window.scrollX;
      let y = window.scrollY;
      window.onscroll = () => {
        window.scrollTo(x, y);
      };
    }
    else window.onscroll = () => {};
  });

  const search = (e) => {
    let str = e.target.value;
    let newArr = [];
    if(str.length>2){
      newArr = props.blocks.filter((item) => {
        for(let key of Object.keys(item)){
          if( key!=="img" && item[key].toLowerCase().includes(str.toLowerCase()) ){
            return true;
          }
        }
      });
      newArr = JSON.parse(JSON.stringify(newArr));
      newArr.forEach((item, index) => {
        for(let key of Object.keys(item)){
           let pos = -1;
           if( key!=="img" && (pos = item[key].toLowerCase().indexOf(str.toLowerCase()))!==-1 ){
             let strToChange = item[key].slice(pos, pos + str.length);
             item[key] = item[key].split(strToChange).join("<em style=background-color:yellow>"+
                   strToChange + "</em>");
           }
         }
      });
      props.setStateBlocks(newArr);
    }
    else{
      props.setStateBlocks(props.blocks);
    }
  }

  return (
    <div>
      <div className="header-container">
        <SmallMenu isMenuOpen={isMenuOpen} setMenuOpen={setMenuOpen} search={search} />
          <header onClick={isMenuOpen?(()=>setMenuOpen(!isMenuOpen)):null}>
            <a href="https://spring.io/" className="logo" style={isMenuOpen?{marginLeft:300}:{marginLeft:0}}><img src={logo} alt="spring logo" /></a>
            <ul>
              <li>PROJECTS</li>
              <li>GUIDES</li>
              <li>BLOG</li>
              <li>TRAINING & CERTIFICATION</li>
              <li className="search-icon" onClick={()=>setSearchOpen(!isSearchOpen)} style={isSearchOpen?{backgroundColor:"#6db33f"}:null}>
              {isSearchOpen?
                (<big><i className="fa fa-times" aria-hidden="true"></i></big>):
                (<big><i className="fa fa-search" aria-hidden="true"></i></big>)}
              </li>
            </ul>
          </header>
      </div>
      <div className="big-search" style={isSearchOpen?{top:66}:{top:-80}}>
        <input type="text" placeholder="Search for documentation, guides, and posts..."  onChange={search} />
        <button className="big-search-button"><i className="fa fa-search" aria-hidden="true"></i></button>
      </div>
    </div>
  );
}

export default Header;
