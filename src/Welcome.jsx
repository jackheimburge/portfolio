import { Link, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';
import './Welcome.css'
export default function Welcome() {

    return (
        <Element id="welcome" className="Welcome element ">
            <h1 className='text-md'>Hello, <br />I'm <span>Jack.</span></h1>
        </Element>
    );
}