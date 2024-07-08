import React from "react";
import "./Styles/home.css";
import { NavLink } from "react-router-dom";
import "./Styles/Navbar.css";
import { CodeIcon } from "./icons";
import BusinessCasesList from './components/BusinessCasesList';
import Header from './components/Header';
import Introduction from './components/Introduction';
import WhyPortfolio from './components/WhyPortfolio';
import Objectives from './components/Objectives';
import References from './components/References';
import MarketAnalysis from "./components/MarketAnalysis";

const Home = () => {
  return (
    <div className="home">
      <NavLink exact to="/" className="title" >
            <span>APS-Portfolio</span>
            <span className="icon" >
              <CodeIcon />
            </span>
      </NavLink>
          
      <Header />
      <Introduction />
      <WhyPortfolio />
      <Objectives />
      <MarketAnalysis />
      <h2 className="title">Business Cases</h2>
      <BusinessCasesList />
      <h2 className="title">References</h2>
      <References />
    </div>
  );
};

export default Home;
