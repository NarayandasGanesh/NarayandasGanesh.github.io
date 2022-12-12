import React from "react";
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
          <a href="https://drive.google.com/file/d/1WTKF9d0eaB7FWzpEXbu8r5rL3h9tbwwT/view?usp=share_link" target="_blank">Resume</a>
        </div>
        <img
          src="https://avatars.githubusercontent.com/u/105913649?v=4"
          alt="user_avatar"
        />
      </div>
    </div>
  );
};

export default Home;
