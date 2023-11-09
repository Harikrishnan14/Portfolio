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
    </div>
  );
}

export default App;
