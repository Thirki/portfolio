import About from "./components/About";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Menu from "./components/Menu";
import Projects from "./components/Projects";
import Services from "./components/Services";
import Skills from "./components/Skills";
import Social from "./components/Social";

function App() {
  return (
    <>
      <Menu/>
    <div id="App">
      <Home/>
      <About/>
      <Social/>
      <Projects/>
      <Services/>
      <Skills/>
    </div>
      <Footer/>
    </>
  );
}

export default App;
