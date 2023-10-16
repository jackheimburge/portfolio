import './Footer.css';

export default function Footer() {
    return (
        <footer className='Footer'>
            <div className="footer-name">
                <h2><span>&copy;</span> Jack Heimburge</h2>
            </div>
            <div className="footer-social">
                <a href="https://www.linkedin.com/in/jackheimburge/" target="_blank" className="nav-item nav-end"><img className="nav-icon" src="https://i.imgur.com/Pz2yEkx.png" alt="" /></a>
                <a href="https://github.com/jackheimburge" target="_blank" className="nav-item nav-end"><img className="nav-icon" src="https://i.imgur.com/QMlrlWn.png" alt="" /></a>
                <a href="mailto:jheimburge@gmail.com" target="_blank" className="nav-item nav-end"><img className="nav-icon" src="https://i.imgur.com/3lGQ8Cu.png" alt="" /></a>
                <a href="https://www.instagram.com/centipedejam/?hl=en" target="_blank" className="nav-item nav-end"><img className="nav-icon" src="https://i.imgur.com/FNf55Cp.png" alt="" /></a>
            </div>
        </footer>
    );
}