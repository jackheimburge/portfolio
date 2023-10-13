import { Link, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';
import './Welcome.css'
export default function Welcome() {
    
    return(
        <Element name="welcome" className="element">
            <div className="Welcome">
                <h1>Hello, <br />I'm Jack Heimburge.</h1>
            </div>
        </Element>
    );
}