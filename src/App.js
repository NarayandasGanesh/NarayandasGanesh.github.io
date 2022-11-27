
import './App.css';
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Navbar from "./components/Navbar/Navbar";
import Contact from "./components/Contact";
import Project from "./components/Project";
function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Project />
      <Contact />
    </div>
  );
}

export default App;
