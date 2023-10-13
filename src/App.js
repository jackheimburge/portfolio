import { Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './Navbar'
import Welcome from './Welcome';
import AboutMe from './AboutMe';
import Projects from './Projects';
import Contact from './Contact';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Welcome />
      <AboutMe />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
