import { Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './Navbar'
import Welcome from './Welcome';
import AboutMe from './AboutMe';
import Projects from './Projects';
import Contact from './Contact';
import Footer from './Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Welcome />
      <AboutMe />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
