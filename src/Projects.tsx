import './App.css';
import { GiClick } from "react-icons/gi";
import img1 from "./assets/img/clock.png";
import img2 from "./assets/img/calculator.png";
import img3 from "./assets/img/drum-machine-online.png";
import img4 from "./assets/img/markdown-previewer.png";
import img5 from "./assets/img/random-quote-machine.png";
import img6 from "./assets/img/choropleth map.png";
import img7 from "./assets/img/circle chart.png";
import img8 from "./assets/img/bar chart.png";
import img9 from "./assets/img/heat map.png";
import img10 from "./assets/img/tree map.png";
import img11 from "./assets/img/nikola tesla tribute.png";
import img12 from "./assets/img/skybuilding.png";

const Projects = () => {
    return (
        <div id="Projects" className="project-container">
            <div className='project-title'>
                <h1> Some projects I have built</h1>
            </div>
            <div className='project-items'>
                <div className='project-item'>
                    <div className="image">
                            <img src={img1} alt="timer-clock"/>
                    </div>
                    <div className="hover-items">
                            <h3>Break-Session clock</h3>
                            <div className="icons">
                                <a href="https://mh-break-session-clock.netlify.app" target="_blank" className="icon">
                                    <GiClick />
                                </a>
                            </div>
                    </div>
                </div>
                <div className='project-item'>
                    <div className="image">
                            <img src={img2} alt="timer-clock"/>
                    </div>
                    <div className="hover-items">
                            <h3>Calculator</h3>
                            <div className="icons">
                                <a href="https://mh-calculator-online.netlify.app" target="_blank" className="icon">
                                    <GiClick />
                                </a>
                            </div>
                    </div>
                </div>
                <div className='project-item'>
                    <div className="image">
                            <img src={img3} alt="timer-clock"/>
                    </div>
                    <div className="hover-items">
                            <h3>Drum machine Online</h3>
                            <div className="icons">
                                <a href="https://mh-drum-machine.netlify.app" target="_blank" className="icon">
                                    <GiClick />
                                </a>
                            </div>
                    </div>
                </div>
                <div className='project-item'>
                    <div className="image">
                            <img src={img4} alt="timer-clock"/>
                    </div>
                    <div className="hover-items">
                            <h3>Markdown Previewer</h3>
                            <div className="icons">
                                <a href="https://mh-markdown-previewer.netlify.app" target="_blank" className="icon">
                                    <GiClick />
                                </a>
                            </div>
                    </div>
                </div>
                <div className='project-item'>
                    <div className="image">
                            <img src={img5} alt="timer-clock"/>
                    </div>
                    <div className="hover-items">
                            <h3>Random Quote Machine</h3>
                            <div className="icons">
                                <a href="https://mh-random-quote-machine.netlify.app" target="_blank" className="icon">
                                    <GiClick />
                                </a>
                            </div>
                    </div>
                </div>
                <div className='project-item'>
                    <div className="image">
                            <img src={img6} alt="timer-clock"/>
                    </div>
                    <div className="hover-items">
                            <h3>Choropleth Map</h3>
                            <div className="icons">
                                <a href="https://mh-choropleth-map.netlify.app" target="_blank" className="icon">
                                    <GiClick />
                                </a>
                            </div>
                    </div>
                </div>
                <div className='project-item'>
                    <div className="image">
                            <img src={img7} alt="timer-clock"/>
                    </div>
                    <div className="hover-items">
                            <h3>Circle Chart</h3>
                            <div className="icons">
                                <a href="https://mh-circle-chart.netlify.app" target="_blank" className="icon">
                                    <GiClick />
                                </a>
                            </div>
                    </div>
                </div>
                <div className='project-item'>
                    <div className="image">
                            <img src={img8} alt="timer-clock"/>
                    </div>
                    <div className="hover-items">
                            <h3>USA GDP Bar Chart</h3>
                            <div className="icons">
                                <a href="https://mh-usa-bar-chart.netlify.app" target="_blank" className="icon">
                                    <GiClick />
                                </a>
                            </div>
                    </div>
                </div>
                <div className='project-item'>
                    <div className="image">
                            <img src={img9} alt="timer-clock"/>
                    </div>
                    <div className="hover-items">
                            <h3>Heat Map(D3)</h3>
                            <div className="icons">
                                <a href="https://mh-heatmap.netlify.app" target="_blank" className="icon">
                                    <GiClick />
                                </a>
                            </div>
                    </div>
                </div>
                <div className='project-item'>
                    <div className="image">
                            <img src={img10} alt="timer-clock"/>
                    </div>
                    <div className="hover-items">
                            <h3>Tree Map</h3>
                            <div className="icons">
                                <a href="https://mh-treemap.netlify.app" target="_blank" className="icon">
                                    <GiClick />
                                </a>
                            </div>
                    </div>
                </div>
                <div className='project-item'>
                    <div className="image">
                            <img src={img11} alt="timer-clock"/>
                    </div>
                    <div className="hover-items">
                            <h3>Nikola Tesla Tribute Page</h3>
                            <div className="icons">
                                <a href="https://nicolas-tesla-tribute.netlify.app" target="_blank" className="icon">
                                    <GiClick />
                                </a>
                            </div>
                    </div>
                </div>
                <div className='project-item'>
                    <div className="image">
                            <img src={img12} alt="timer-clock"/>
                    </div>
                    <div className="hover-items">
                            <h3>Sky Building</h3>
                            <div className="icons">
                                <a href="https://skybuilding.netlify.app" target="_blank" className="icon">
                                    <GiClick />
                                </a>
                            </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects;