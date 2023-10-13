import './Navbar.css'
import { Link } from 'react-scroll';


export default function Navbar() {
    return(
    <ul className='Navbar'>
        <li className='nav-link'><Link to="welcome" smooth={true} duration={0} offset={-50} spy={true} exact="true">HOME</Link></li>
        <li className='nav-link'><Link to="aboutMe" smooth={true} duration={0} offset={-50} spy={true} exact="true">ABOUT ME</Link></li>
        <li className='nav-link'><Link to="projects" smooth={true} duration={0} offset={-50} spy={true} exact="true">PROJECTS</Link></li>
        <li className='contact nav-link'><Link to="contact" smooth={true} duration={0} offset={-50} spy={true} exact="true">CONTACT</Link></li>
    </ul>
    );
}