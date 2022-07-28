import React from "react";
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Technologies from './components/Technologies';
import Projects from './components/Projects';


function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Technologies />
      <Projects />
    </div>
  )
}

export default App;