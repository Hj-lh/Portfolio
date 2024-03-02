import Intro from "./components/Intro/intro";
import Skills from "./components/Skills/skills";
import Project from "./components/Project/project";
import Contact from "./components/Contact/contact";
import Navbar from "./components/NavBar/navbar";


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Intro/>
      <Skills/>
      <Project/>
      <Contact/>
    </div>
  );
}

export default App;
