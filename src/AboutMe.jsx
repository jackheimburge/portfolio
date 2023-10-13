import './AboutMe.css';
import { Link, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';


export default function AboutMe() {
    return(
        <Element name="aboutMe" className="AboutMe element">
                <header>
                    <h2>A LITTLE ABOUT ME</h2>
                </header>
                <div className="statement">
                    Brand Statement
                </div>
                <div className="skills">
                    my skills
                </div>
        </Element>
    );
}