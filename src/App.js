import Contact from "./Components/Contact/Contact";
import Education from "./Components/Education/Education";
import Experience from "./Components/Experience/Experience";
import Footer from "./Components/Footer/Footer";
import Main from "./Components/Main/Main";
import Navbar from "./Components/Navbar/Navbar";
import Projects from "./Components/Projects/Projects";
import Skills from "./Components/Skills/Skills";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Main />
      <Skills />
      <Projects />
      <Experience />
      <Education />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
