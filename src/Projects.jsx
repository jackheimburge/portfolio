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
                <div className="col-lg-6">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title ">Tide Seeker</h5>
                            <div id="carouselExample" class="carousel slide">
                                <div class="carousel-inner">
                                    <div class="carousel-item active">
                                        <img src="https://i.imgur.com/8Uetvp9.png" class="d-block w-100" alt="..." />
                                    </div>
                                    <div class="carousel-item">
                                        <img src="https://i.imgur.com/Wi4hXau.png" class="d-block w-100" alt="..." />
                                    </div>
                                    <div class="carousel-item">
                                        <img src="https://i.imgur.com/Ui9357b.png" class="d-block w-100" alt="..." />
                                    </div>
                                </div>
                                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span class="visually-hidden">Previous</span>
                                </button>
                                <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span class="visually-hidden">Next</span>
                                </button>
                            </div>
                            <p className="card-text mt-4">- Seemlisly view your favorite surf spots and locations.</p>
                            <p className="card-text mt-4">- Track your surf sessions, including photo upload and conditions.</p>
                            <p className="card-text mt-4">- Built using Node.js and Express.js</p>
                            <a href="https://tide-seeker-1959079ff47b.herokuapp.com/" target="_blank" className="btn btn-primary projects-btn">Live</a>
                            <a href="https://github.com/jackheimburge/tide-seeker" target="_blank" className="btn btn-primary projects-btn">Github</a>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6">
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
                <div className="col-lg-6">
                    <div className="card">
                        <img src="..." className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" className="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6">
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
        </Element >
    );
}