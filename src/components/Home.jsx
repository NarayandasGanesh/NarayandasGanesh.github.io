import React from "react";
import About from "./About";
import "./home.css";
const Home = () => {
  return (
    <div id="home" className="home">
      <div className="max-width">
        <div className="home-content">
          <div className="text-1">Hello, my name is</div>
          <div className="text-2">Narayandas Ganesh</div>
          <div className="text-3">
            And I'm a <span>Full Stack Web Developer.</span>
          </div>
          <button>Resume</button>
        </div>
        <img
          src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
          alt="user_avatar"
        />
      </div>
    </div>
  );
};

export default Home;
