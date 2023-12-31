import './Navbar.css';

export default function Navbar() {
    return (
        <nav className="navbar sticky-top navbar-expand-lg">
            <div className="container-fluid Navbar">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a href="#welcome">HOME</a>
                        </li>
                        <li className="nav-item">
                            <a href="#aboutMe">ABOUT ME</a>
                        </li>
                        <li className="nav-item">
                            <a href="#projects">PROJECTS</a>
                        </li>
                    </ul>
                    <div className="ml-auto"> {/* Create a div for the right-aligned links */}
                        <a href="https://www.linkedin.com/in/jackheimburge/" rel="noreferrer" target="_blank" className="nav-item nav-end"><img className="nav-icon" src="https://i.imgur.com/Pz2yEkx.png" alt="" /></a>
                        <a href="https://github.com/jackheimburge" rel="noreferrer" target="_blank" className="nav-item nav-end"><img className="nav-icon" src="https://i.imgur.com/QMlrlWn.png" alt="" /></a>
                        <a href="mailto:jheimburge@gmail.com" rel="noreferrer" target="_blank" className="nav-item nav-end"><img className="nav-icon" src="https://i.imgur.com/3lGQ8Cu.png" alt="" /></a>
                        <a href="https://docs.google.com/document/d/1tQOs_ikv7nTaIn_FJklljD43iwXplNNQT9OoEBtFduI/edit" rel="noreferrer" target="_blank" className="nav-item nav-end"><img className="nav-icon" src="https://i.imgur.com/1P59RSs.png" alt="" /></a>
                    </div>
                </div>
            </div>

        </nav>
    );
}





