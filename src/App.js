
import './App.css';
import Home from "./components/Home";
import Skills from "./components/Skills";
import Navbar from "./components/Navbar/Navbar";
import Contact from "./components/Contact";
import About1 from './components/About1';
// import { Project } from './components/Project/Project';
import Project from './components/Projects/Project';
import GitHubStats from './components/GitHubStats';

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      {/* <About /> */}
      <About1 />
      <Skills />
      {/* <Project /> */}
      <Project />
      <GitHubStats />
      <Contact />
    </div>
  );
}

export default App;
