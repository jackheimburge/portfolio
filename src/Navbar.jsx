import './Navbar.css'
import { Link } from 'react-scroll';


export default function Navbar() {
    return(
    <ul className='Navbar'>
        <li className='nav-link'><Link to="welcome" smooth={true} duration={700} offset={-100} spy={true}>HOME</Link></li>
        <li className='nav-link'><Link to="aboutMe" smooth={true} duration={700} offset={-100} spy={true}>ABOUT ME</Link></li>
        <li className='nav-link'><Link to="projects" smooth={true} duration={700} offset={-100} spy={true}>PROJECTS</Link></li>
        <li className='contact nav-link'><Link to="contact" smooth={true} duration={700} offset={-100} spy={true}>CONTACT</Link></li>
    </ul>
    );
}