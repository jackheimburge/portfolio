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
                            <div id="tide-carousel" class="carousel slide">
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
                                <button class="carousel-control-prev" type="button" data-bs-target="#tide-carousel" data-bs-slide="prev">
                                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span class="visually-hidden">Previous</span>
                                </button>
                                <button class="carousel-control-next" type="button" data-bs-target="#tide-carousel" data-bs-slide="next">
                                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span class="visually-hidden">Next</span>
                                </button>
                            </div>
                            <p className="card-text mt-4">- Seemlisly view your favorite surf spots and locations.</p>
                            <p className="card-text mt-4">- Track your surf sessions, including photo upload and conditions.</p>
                            <p className="card-text mt-4">- Built using Node.js and Express.js</p>
                            <a href="https://tide-seeker-1959079ff47b.herokuapp.com/" target="_blank" className="btn btn-primary projects-btn">View Site</a>
                            <a href="https://github.com/jackheimburge/tide-seeker" target="_blank" className="btn btn-primary projects-btn">GitHub</a>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title ">DM Solutions</h5>
                            <div id="dm-carousel" class="carousel slide">
                                <div class="carousel-inner">
                                    <div class="carousel-item active">
                                        <img src="https://camo.githubusercontent.com/7a34cc37f60c949573fb5f352174f5d1b998e6fe4a39dc9fb471366a4fcd70fd/68747470733a2f2f692e696d6775722e636f6d2f6a6949654c76432e6a7067" class="d-block w-100" alt="..." />
                                    </div>
                                    <div class="carousel-item">
                                        <img src="https://camo.githubusercontent.com/2506957c000d67ee51a684e00e3d4e734f1085b1c422ad8074870dfcd67c8b84/68747470733a2f2f692e696d6775722e636f6d2f613861305842792e706e6760" class="d-block w-100" alt="..." />
                                    </div>
                                    <div class="carousel-item">
                                        <img src="https://camo.githubusercontent.com/c80fbc5e73a645413b235eaedcab4683016664e7c8905a9af977c7ad76039206/68747470733a2f2f692e696d6775722e636f6d2f445767596851702e6a7067" class="d-block w-100" alt="..." />
                                    </div>
                                </div>
                                <button class="carousel-control-prev" type="button" data-bs-target="#dm-carousel" data-bs-slide="prev">
                                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span class="visually-hidden">Previous</span>
                                </button>
                                <button class="carousel-control-next" type="button" data-bs-target="#dm-carousel" data-bs-slide="next">
                                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span class="visually-hidden">Next</span>
                                </button>
                            </div>
                            <p className="card-text mt-4">- Dealership solution to help track sales and inventory</p>
                            <p className="card-text mt-4">- Uses chart insights to visualize sales data.  </p>
                            <p className="card-text mt-4">- Built using Python, Django and Chart.js</p>
                            <a href="https://dm-solutions-6a34df6ef1ad.herokuapp.com/" target="_blank" className="btn btn-primary projects-btn">View Site</a>
                            <a href="https://github.com/jackheimburge/dm-solutions" target="_blank" className="btn btn-primary projects-btn">GitHub</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="skills-row row">
                <div className="col-lg-6">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title ">The Card Hub</h5>
                            <div id="blackjack-carousel" class="carousel slide">
                                <div class="carousel-inner">
                                    <div class="carousel-item active">
                                        <img src="https://i.imgur.com/WI8O9IS.png" class="d-block w-100" alt="..." />
                                    </div>
                                    <div class="carousel-item">
                                        <img src="https://i.imgur.com/4lYbtap.png" class="d-block w-100" alt="..." />
                                    </div>
                                    <div class="carousel-item">
                                        <img src="https://i.imgur.com/0p0mCqx.png" class="d-block w-100" alt="..." />
                                    </div>
                                    <div class="carousel-item">
                                        <img src="https://i.imgur.com/RT98q1g.png" class="d-block w-100" alt="..." />
                                    </div>
                                </div>
                                <button class="carousel-control-prev" type="button" data-bs-target="#blackjack-carousel" data-bs-slide="prev">
                                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span class="visually-hidden">Previous</span>
                                </button>
                                <button class="carousel-control-next" type="button" data-bs-target="#blackjack-carousel" data-bs-slide="next">
                                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span class="visually-hidden">Next</span>
                                </button>
                            </div>
                            <p className="card-text mt-4">- Dynamic marketplace for buying and selling trading cards.</p>
                            <p className="card-text mt-4">- Crafted an engaging shopping experience with a modern user interface layout.</p>
                            <p className="card-text mt-4">- Leveraged the power of the MERN stack. </p>
                            <a href="https://card-hub-fc0733ce387e.herokuapp.com/" target="_blank" className="btn btn-primary projects-btn">View Site</a>
                            <a href="https://github.com/jackheimburge/card-hub" target="_blank" className="btn btn-primary projects-btn">GitHub</a>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title ">Blackjack Web App</h5>
                            <div id="card-hub-carousel" class="carousel slide">
                                <div class="carousel-inner">
                                    <div class="carousel-item active">
                                        <img src="https://i.imgur.com/qqhylkc.png" class="d-block w-100" alt="..." />
                                    </div>
                                    <div class="carousel-item">
                                        <img src="https://i.imgur.com/XP10G6J.png" class="d-block w-100" alt="..." />
                                    </div>
                                    <div class="carousel-item">
                                        <img src="https://i.imgur.com/ykh2LhN.png" class="d-block w-100" alt="..." />
                                    </div>
                                </div>
                                <button class="carousel-control-prev" type="button" data-bs-target="#card-hub-carousel" data-bs-slide="prev">
                                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span class="visually-hidden">Previous</span>
                                </button>
                                <button class="carousel-control-next" type="button" data-bs-target="#card-hub-carousel" data-bs-slide="next">
                                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span class="visually-hidden">Next</span>
                                </button>
                            </div>
                            <p className="card-text mt-4">- Built using Javascript, CSS, and HTML.</p>
                            <p className="card-text mt-4">- A fun user vs computer game played just like at the casino!</p>
                            <p className="card-text mt-4">- Features a modern and sleak user interface!</p>
                            <a href="https://jackheimburge.github.io/blackjack/" target="_blank" className="btn btn-primary projects-btn">View Site</a>
                            <a href="https://github.com/jackheimburge/blackjack" target="_blank" className="btn btn-primary projects-btn">GitHub</a>
                        </div>
                    </div>
                </div>
            </div>
        </Element >
    );
}