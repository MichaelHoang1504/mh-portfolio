import Image from './assets/michael-portrait2.png'
import './App.css';

const About = () => {
    return (
        <div id ='About' className="About-container">
            <div className="About-me">
                <div className='frame'>
                <img className='image-portrait'
                    src={Image} 
                    alt='photo'
                    height="393px"
                    width="284px"
                    />
                </div>
            </div>
            <div className="About-info">
                <h1>About Me</h1>
                <p>With high passion in Software Development domain, I would love to do as well as learn new and better ways to create seamless user experiences with clean, efficient, and optimizer programs.
                I think that people should look at the bigger picture when they are building something. I love to work in groups where everyone can voice their opinions and ideas.
                <br />
                And I think that the best way to improve my continuously development is to learn from our teams and our mistakes. 
                </p>
                <strong>My Skills</strong>
                <div className='mySkill'>
                <ul aria-description='Front-end'>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>Javascript</li>
                    <li>React</li>
                    <li>Redux</li>
                    <li>Vite</li>
                    <li>ASP.NET</li>
                    <li>jQuery</li>
                </ul>
                <ul aria-description='Back-end'>
                    <li>NodeJS</li>
                    <li>MySQL</li>
                    <li>Webmethod</li>
                    <li>postSQL</li>
                    <li>MongoDB/Mongoose</li>
                    <li>Go</li>
                    <li>REST API</li>
                    <li>CI/CD</li>
                </ul>
                <ul aria-description='Others'>
                    <li>Git</li>
                    <li>GitHub</li>
                    <li>Azure DevOps</li>
                    <li>VS Code</li>
                    <li>Typescript</li>
                    <li>Netlify</li>
                    <li>D3</li>
                    <li>AWS</li>
                </ul>
                </div>
            </div>
        </div>
    )
}
export default About;