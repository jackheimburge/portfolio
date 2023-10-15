import { Element } from 'react-scroll';
import './Projects.css';

export default function Projects() {
    return (
        <Element id="projects" className="Projects element">
            <div className="row">
                <header>
                    <h2>PROJECTS</h2>
                </header>
            </div>
            <div className="skills-row row">
                <div className="col-6">
                    <div className="card">
                        <img src="..." className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Tide Seeker Web App</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="https://tide-seeker-1959079ff47b.herokuapp.com/" target="_blank" className="btn btn-primary projects-btn">Live</a>
                            <a href="https://github.com/jackheimburge/tide-seeker" target="_blank" className="btn btn-primary projects-btn">Github</a>
                        </div>
                    </div>
                </div>
                <div className="col-6">
                    <div className="card">
                        <img src="..." className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" className="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="skills-row row">
                <div className="col-6">
                    <div className="card">
                        <img src="..." className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" className="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                </div>
                <div className="col-6">
                    <div className="card">
                        <img src="..." className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" className="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                </div>
            </div>
        </Element>
    );
}