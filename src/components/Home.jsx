import React from "react";
import { Link } from 'react-router-dom';
import '../styles/Home.css';
import backgroundImage from '../styles/background.jpg';

const Home = () => {
  return (
    <div className="homeBackground">
      <img src={backgroundImage} alt="background" />
      <div className="homeContent">
        <h1 className="welcomeMessage">Come Explore with us!</h1>
        <div className="buttons">
          {/* <Link to="/trips?filter=destinations" className="homeButton">Destinations</Link>
          <Link to="/trips?filter=hikes" className="homeButton">Hikes</Link> */}
          <Link to="/photos" className="homeButton">Photos</Link>          
        </div>
      </div>
    </div>
  );
};

export default Home;
