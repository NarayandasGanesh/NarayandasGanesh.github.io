import React,{useContext} from "react";
import { ThemeContext } from "../ContextProvider/ThemeContext";
import styles from "./Contact.module.css"

const Contact = () => {
  const { newTheme } = useContext(ThemeContext);
  return (
    <div>
      <h1 id="contact" className="heading">
        <span className="heading-highlight">Contact</span> Me
      </h1>
      <footer className={styles.footer} id="contact">
      <div className={styles.container}>
        <h1 style={{ textAlign: "center" }}>Get in Touch</h1>
        <p style={{ color: `${newTheme.para}` }} className={styles.paragraph}>
          One of my favourite things about developing web applications is the
          variety in projects. So if you want to collaborate or have some work
          for me , Get in touch and tell me what you have in mind. — I can’t
          wait to hear all about it! 😇
          <br />
          Gmail:viratganesh039@gmail.com
        </p>
        <div
          style={{ color: `${newTheme.title}` }}
          className={styles.contactOptions}
        >
          <a
            href="tel:8247204021"
            aria-label="GitHub"
            rel="noreferrer"
            target="_blank"
          >
            <i className="fas fa-phone-alt" />
          </a>
          <a
            href="mailto: viratganesh039@gmail.com"
            aria-label="email"
            target="_blank"
            rel="noreferrer"
          >
            <i className="far fa-envelope"></i>
          </a>
          <a
            href=""
            aria-label="Twitter"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fab fa-twitter"></i>
          </a>
          <a
            href="https://github.com/NarayandasGanesh"
            aria-label="GitHub"
            rel="noreferrer"
            target="_blank"
          >
            <i className="fab fa-github" />
          </a>

          <a
            href="linkedin.com/in/narayandas-ganesh-593985206/"
            aria-label="Linkedin"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fab fa-linkedin-in" />
          </a>
        </div>
      </div>
      <div style={{ background: `${newTheme.line}` }} className={styles.line} />
      <div style={{ textAlign:"center"}} className={styles.copyright}>
        Designed and build by Narayandas Ganesh, 2022 All rights reserved.
      </div>
    </footer>
    </div>
  );
};

export default Contact;
// style={{ color: `${newTheme.title}` }}
//  color: `${newTheme.para}`