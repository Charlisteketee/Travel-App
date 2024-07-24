import React from "react";
import '../styles/Home.css';
import backgroundImage from '../styles/background.jpg';

const Home = () => {
  return (
    <div className="homeBackground">
      <img src={backgroundImage} alt="background" />
      <div className="homeContent">
        <h1>Welcome!</h1>
        <p>Explore amazing trips and adventures around the world through stories, images, and connecting with others.</p>
      </div>
    </div>
  );
};

export default Home;
