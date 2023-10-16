import './App.css';
import Navbar from './Navbar'
import Welcome from './Welcome';
import AboutMe from './AboutMe';
import Projects from './Projects';
import Footer from './Footer';

function App() {
  return (
    <div className="App" id="welcome">
      <div className="container">
        <Navbar />
        <Welcome />
        <AboutMe />
        <Projects />
        <Footer />
      </div>
    </div>
  );
}

export default App;
