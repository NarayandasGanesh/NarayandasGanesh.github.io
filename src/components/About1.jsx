import React from "react";
import { ThemeContext } from "../ContextProvider/ThemeContext";
import WindowSize from "../utilis/WindowSize";
import styles from "./About1.module.css";

const About1 = () => {
  const { newTheme } = React.useContext(ThemeContext);
  const [width] = WindowSize();
  const img =
    width < 650
      ? "https://avatars.githubusercontent.com/u/105913649?v=4"
      : "https://miro.medium.com/max/1360/1*IRGHmiGsa16stedQvIaZfw.gif";
  return (
    <div >
      <h1 id="about" className="heading" style={{marginTop:"40px"}}>
      <span className="heading-highlight">About</span> Me
      </h1>
    <div
      data-aos="fade-down"
      data-aos-offset="200"
      data-aos-easing="ease-in-sine"
      data-aos-duration="800"
      className={styles.container}
      style={{ boxShadow: `3px 3px 5px ${newTheme.line}` }}
    >
      <div className={styles.first}>
        <img src={img} alt="" />
      </div>
      <div className={styles.second}>
        {/* <h1>
          About Me
        </h1> */}
        <div className={styles.borderBottom} />
        <p style={{ color: `${newTheme.para}` }} className={styles.aboutMe}>
          I am a Full stack web developer. I have made some projects using HTML,
          CSS, Javascript, React and Node JS.
          <br />
          <br />I am passionate about solving real-world problems in the field
          of web development and software engineering. Eager to be a part of a
          team which gives me ability to learn and grow . My hobbies are
          Watching movies,listening to podcasts,listening to music and playing sports like cricket
        </p>
      </div>
    </div>
    </div>
  );
};

export default About1;