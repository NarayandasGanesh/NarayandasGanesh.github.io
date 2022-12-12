import { projects } from "./Projects";
import React,{useState,useEffect} from 'react';
import styles from "../Projects/project.module.css";
import { ThemeContext } from "../../ContextProvider/ThemeContext";
import Card from "../Card/Card";
import AOS from "aos"
import 'aos/dist/aos.css';

const Project = () => {
    const [projectArray, setProjectArray] = useState(projects);
    const { newTheme } = React.useContext(ThemeContext);
	useEffect(() => {
		AOS.init();
	});

	// useEffect(() => {
	// 	document.body.style.backgroundColor = newTheme.background;
	// }, [newTheme]);
  return (
    <div id='projects' className={styles.projects}>
				<h1
					// style={{ color: `${newTheme.title}` }}
                    style={{color:"rgb(25, 66, 153)"}}
					className={styles.heading}
				>
					Projects
				</h1>
				{/* <div className={styles.borderBottom} /> */}
				<div>
					{projectArray.map((item, index) => (
						<Card key={index} {...item} />
					))}
				</div>
    </div>         
  )
}

export default Project;


