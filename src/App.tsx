import Navbar from './components/layouts/navbar';
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Education from "./components/education";
import Contact from "./components/contact";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Projects />
      <Education />
      <Contact />
    </>
  );
}

export default App;
