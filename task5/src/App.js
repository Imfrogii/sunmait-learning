import React, { useEffect } from 'react';
import { Header } from "./components/Header";
import { Sections } from "./components/Sections";
import { Footer } from "./components/Footer";
import { Login } from "./components/Login";
import { useSelector, useDispatch } from "react-redux";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import { actionAddBlocks } from './store/blocks/actions';
import './App.css';


export const App = () => {
  const dispatch = useDispatch();
  const addBlocks = () => dispatch(actionAddBlocks());
  const {blocks, strToFind} = useSelector(state => state.blocksReducer);
 

  useEffect(()=>{
    addBlocks();
  },[]);


  const search = () => {
    if(strToFind.length>2){
      let newArr = blocks.filter((item) => {
        for(let key of Object.keys(item)){
          if( key!=="img" && item[key].toLowerCase().includes(strToFind.toLowerCase()) ){
            return true;
          }
        }
      });
      return newArr;
    }
    else return blocks;
  }
  
  return (
    <Router>
      <Header />
      <div className="body-container">
        <div className="main-body">
          <Route path="/login" exact component={() => <Login />} />
          <Route path="/" exact component={() => <Sections className="sections" blocks={search(strToFind)} />} />
          {localStorage.getItem("isLogged")==="true" ? <Redirect to="/" />:<Redirect to="/login" />}
        </div>
      </div>
      <Footer />
    </Router>
  );
}