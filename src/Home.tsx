import imageSrcPath from "./assets/nav-icon.jpg";
import "./App.css"
import { FaCloudDownloadAlt } from "react-icons/fa";

const Home = () => {
    return (
        <div id="Home" className="home-container">
        <div className="logo-slogan">
            <img
            src={imageSrcPath}
            width="100"
            height="100"
            alt=""
            />
        </div>
        <div id='welcome'>
        <div className="myName">
            <h3> Hi, my name is
            <span className="line-1">Michael Hoang.</span>
            <span className="line-2"> I am a web developer</span>
            </h3>
            <p>
                    I would love to create beautiful and functional websites. 
                    With strong mindset of Software Development 
                    and the passion to deliver high quality products to customers is what I focus on.
            </p>
            <div className="btn-con">
            <a href="/Resume-Michael Hoang.pdf"  download className="main-btn">
                <span className="btn-text">Download CV</span>
                <span className="btn-icon"><i className="fa-download"><FaCloudDownloadAlt /></i></span>
            </a>
            </div>
        </div>
        </div>
        </div>
    )
};

export default Home;