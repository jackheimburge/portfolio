import './Navbar.css'

export default function Navbar() {
    return(
    <ul className='Navbar'>
        <li><a className='active' href="#">HOME</a></li>
        <li><a href="#">PROJECTS</a></li>
        <li><a href="#">ABOUT ME</a></li>
        <li className='contact'><a href="#">CONTACT</a></li>
    </ul>
    );
}