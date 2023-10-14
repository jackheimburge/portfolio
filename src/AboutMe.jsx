import './AboutMe.css';
import { Link, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';


export default function AboutMe() {
    return(
        <Element name="aboutMe" className="AboutMe element">
            <div className="row">
                <header>
                    <h2>ABOUT ME</h2>
                </header>
            </div>
            <div className="row">
                <div className="col-lg-6">
                    <div className="statement">
                    <p>Hi, I'm Jack Heimburge, a detail-oriented and passionate Software Engineer with a keen eye for 
                        creating user-friendly applications that tackle real-world problems.
                        I bring a unique blend of creativity and dedication to every project.
                    </p>
                    <p>With a deep-seated commitment to turning ideas into reality, I'm excited to continue
                        my journey in the world of software engineering, making a positive impact one line of code at a time.
                    </p>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="skills">
                        <img className="tech-icon" src="https://user-images.githubusercontent.com/25181517/183898054-b3d693d4-dafb-4808-a509-bab54cf5de34.png" alt="" />
                        <img className="tech-icon" src="https://user-images.githubusercontent.com/25181517/117447155-6a868a00-af3d-11eb-9cfe-245df15c9f3f.png" alt="" />
                        <img className="tech-icon" src="https://user-images.githubusercontent.com/25181517/183897015-94a058a6-b86e-4e42-a37f-bf92061753e5.png" alt="" />
                        <img className="tech-icon" src="https://user-images.githubusercontent.com/25181517/183568594-85e280a7-0d7e-4d1a-9028-c8c2209e073c.png" alt="" />
                        <img className="tech-icon" src="https://user-images.githubusercontent.com/25181517/183859966-a3462d8d-1bc7-4880-b353-e2cbed900ed6.png" alt="" />
                        <img className="tech-icon" src="https://user-images.githubusercontent.com/25181517/183423507-c056a6f9-1ba8-4312-a350-19bcbc5a8697.png" alt="" />
                        <img className="tech-icon" src="https://github.com/marwin1991/profile-technology-icons/assets/62091613/9bf5650b-e534-4eae-8a26-8379d076f3b4" alt="" />
                        <img className="tech-icon" src="https://user-images.githubusercontent.com/25181517/182884177-d48a8579-2cd0-447a-b9a6-ffc7cb02560e.png" alt="" />
                        <img className="tech-icon" src="https://user-images.githubusercontent.com/25181517/183896132-54262f2e-6d98-41e3-8888-e40ab5a17326.png" alt="" />
                    </div>
                </div>
            </div>
        </Element>
    );
}