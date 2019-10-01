import React, {useState, useEffect} from 'react';
import './App.css';
import Header from "./components/Header";
import Sections from "./components/Sections";
import Footer from "./components/Footer";
import { Login } from "./components/Login";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";


const App = () => {
  const [stateBlocks, setStateBlocks] = useState([]);
  const [blocks, setBlocks] = useState([]);
  const [logined, setLogined] = useState(false);

  const Block = function(name, about, img){
    this.name = name;
    this.about = about;
    this.img = img;
  }

  const addBlock = (name, about, img) =>{
    setBlocks(blocks => [...blocks, new Block(name, about, img)]);
  }

  useEffect(()=>{
    addBlock("SPRING BOOT",
     "Takes an opinionated view of building Spring applications and gets you up and running as quickly as possible.", "img/boot.svg");

    addBlock("SPRING FRAMEWORK",
    "Provides core support for dependency injection, transaction management, web apps, data access, messaging and more.", "img/framework.svg");

    addBlock("SPRING CLOUD DATA FLOW",
     "An orchestration service for composable data microservice applications on modern runtimes.",
     "img/data-flow.svg");

    addBlock("SPRING CLOUD",
     "Provides a set of tools for common patterns in distributed systems. Useful for building and deploying microservices.", "img/cloud.svg");

    addBlock("SPRING DATA",
     "Provides a consistent approach to data access – relational, non-relational, map-reduce, and beyond.",
     "img/springdata.png");

    addBlock("SPRING INTEGRATION",
     "Supports the well-known <em>Enterprise Integration Patterns</em> via lightweight messaging and declarative adapters.", "img/integration.png");
  },[]);

  useEffect(()=>{
    setStateBlocks([...blocks]);
  },[blocks]);

  return (
    <Router>
      <Header stateBlocks={stateBlocks} setStateBlocks={setStateBlocks} blocks={blocks} />
      <div className="body-container">
        <div className="main-body">
          <Route path="/login" component={() => <Login setLogined={setLogined} />} />
          <Route path="/" exact component={() => <Sections className="sections" blocks={stateBlocks} />} />
          {logined? null:<Redirect to="/login" />}
        </div>
      </div>
      <div className="footer-container">
        <Footer />
      </div>
    </Router>
  );
}

export default App;
