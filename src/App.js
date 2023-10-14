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
      <div className="container">
      <Navbar />
      <Welcome />
      <AboutMe />
      <Projects />
      <Contact />
      <Footer />
      </div>
    </div>
  );
}

export default App;
