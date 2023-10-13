import { Link, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';
import './Welcome.css'
export default function Welcome() {
    
    return(
        <Element name="welcome" className="Welcome element ">
                <h1>Hello, <br />I'm <span>Jack Heimburge.</span></h1>
        </Element>
    );
}