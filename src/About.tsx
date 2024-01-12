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
                <p>I am highly skilled in HTML, CSS, and JavaScript, and I have a strong understanding of responsive design principles. I am also experienced in using version control systems such as Git and have a solid understanding of Agile development methodologies. My ability to collaborate effectively with cross-functional teams and my strong problem-solving skills have been instrumental in delivering successful projects on time and within budget.
                <br />
                With a solid background in front-end development and expertise Javascript framework such as React or Vue, I am confident in my ability to deliver high-quality scalable code and exceptional user experiences. And I think that the best way to improve my continuously development is to learn from our teams and our mistakes. 
                </p>
                <strong>My Skills</strong>
                <div className='mySkill'>
                <ul aria-description='Front-end'>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>Javascript</li>
                    <li>React.js</li>
                    <li>Redux</li>
                    <li>Vue.js</li>
                </ul>
                <ul aria-description='Back-end'>
                    <li>Node.js</li>
                    <li>MySQL</li>
                    <li>postSQL</li>
                    <li>Go</li>
                </ul>
                <ul aria-description='Others'>
                    <li>Git</li>
                    <li>GitHub</li>
                    <li>Azure DevOps</li>
                    <li>VS Code</li>
                    <li>AWS</li>
                </ul>
                </div>
            </div>
        </div>
    )
}
export default About;