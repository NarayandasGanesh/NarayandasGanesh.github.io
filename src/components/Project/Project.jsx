import "./Project.css";
import { useContext } from 'react';
import { ThemeContext } from "../../ContextProvider/ThemeContext";
// import { ThemeContext } from '../context/ThemeContext';
// import mg from "../image/1mg.png";
// import Zappos from "../image/Zappos.png";

export const Project = () => {
    const projectCont = [
        { 
            name: "TATA 1mg Clone",
            description: "TATA 1mg.com is an e-commerce website that provides e-pharmacy, diagnostics, e-consultation, and healthcare solutions related service all across india and in this project I tried to make a clone of this website.",
            tech: "Tech-Stack: HTML | CSS | JavaScript | React.js",
            // image: mg,
            imageAlt: "tata mg image",
            git: "https://github.com/rittik24/yielding-tongue-8280",
            live: "https://rad-axolotl-7d8ff0.netlify.app/", 
        },
        { 
            name: "Zappos.com Clone",
            description: "Zappos.com is an American online shoe and clothing retailer based in Las Vegas, Nevada, United States.",
            tech: "Tech-Stack: HTML | CSS | JavaScript",
            // image: Zappos,
            imageAlt: "Zappos image",
            git: "https://github.com/arijeet8008/excited-roof-1669",
            live: "https://zappos-clone-de21a7.netlify.app", 
        }
        
    ]

    // const { Themes, currentTheme } = useContext(ThemeContext);
    return (
        <section id="projectsID" className="section-pro">
            <h1 className="heading-project">Projects</h1>
            <div className="main-projects">

                <div className="projects" >
                    {
                        projectCont.map((ele, j) => {
                            return (
                                <div key={`project${j}`} className="pro" >
                                    <div className="data">
                                        <h2 className="pro-head">{ ele.name }</h2>
                                        <p className="desc">{ ele.description }</p>
                                        <p className="tech-stack"> { ele.tech }
                                            {/* {
                                                ele.tech.map((e, i) => {
                                                    return (
                                                        <span className="tech" key={`tech${i}`}> { e } </span>
                                                    )
                                                })
                                            } */}
                                        </p>
                                        <p className="repo">
                                            <a href={ ele.git } rel="noopener noreferrer" target="_blank"><span >GitHub</span></a>
                                            <a href={ ele.live } rel="noopener noreferrer" target="_blank"><span >Live Demo</span></a>
                                        </p>
                                        </div>
                                        <div className="img">
                                            <img src={ ele.image } alt={ ele.imageAlt } />
                                        </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </section>
    )
}