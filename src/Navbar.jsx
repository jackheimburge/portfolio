import './Navbar.css'
import { Link } from 'react-scroll';


export default function Navbar() {
    return (
        <nav className="navbar sticky-top navbar-expand-lg ">
            <div className="container-fluid Navbar">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a href="#welcome" >HOME</a>
                        </li>
                        <li className="nav-item">
                            <a href="#aboutMe">ABOUT ME</a>
                        </li>
                        <li className="nav-item">
                            <a href="#projects">PROJECTS</a>
                        </li>
                        <li className="nav-item contact">
                            <a href="#contact">CONTACT</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

    );
}