import React, { useEffect, useState } from "react";
import { Header } from "./components/Header";
import { Sections } from "./components/Sections";
import { Footer } from "./components/Footer";
import { Login } from "./components/Login";
import { useSelector, useDispatch } from "react-redux";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import { actionAddBlocks } from "./store/blocks/actions";
import "./App.css";


export const App = () => {
  const dispatch = useDispatch();
  const addBlocks = () => dispatch(actionAddBlocks());
  const [showedBlocks, setShowedBlocks] = useState([]);
  const { blocks, strToFind } = useSelector(state => state.blocksReducer);

  useEffect(() => {
    addBlocks();
  }, []);

  useEffect(() => {
    search(strToFind);
    return () => {
    };
  }, [strToFind, blocks]);

  const search = strToFind => {
    if (strToFind.length > 2) {
      fetch(`http://localhost:3001/search/${strToFind}`).then(res => {
        res.json().then(servBlocks => {
          setShowedBlocks(servBlocks);
        });
      });
    } else setShowedBlocks(blocks);
  };

  return (
    <Router>
      <Header />
      <div className="body-container">
        <div className="main-body">
          <Route path="/login" exact component={() => <Login />} />
          <Route
            path="/"
            exact
            component={() => (
              <Sections className="sections" blocks={showedBlocks} />
            )}
          />
          {localStorage.getItem("isLogged") === "true" ? (
            <Redirect to="/" />
          ) : (
            <Redirect to="/login" />
          )}
        </div>
      </div>
      <Footer />
    </Router>
  );
};
