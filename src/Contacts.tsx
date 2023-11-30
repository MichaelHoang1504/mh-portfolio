import { CgMail } from "react-icons/cg";
import { FaGithub, FaLinkedin, FaCodepen, FaInstagram,FaXTwitter } from "react-icons/fa6";
import { IoMdRocket } from "react-icons/io";
import './App.css';

const Contacts = () => {
    return (
        <div id="Contacts">
            <div className="contact-title">
                <h1>Let's have a talk</h1>
                <p>If you have any ideas or projects,feel free to contact me with these links below.</p>
            </div>
            <div className="contact-link">
                <a className='contact-items' href="mailto:Michael.hoang.cu@gmail.com" target="_blank" title="Gmail">
                <CgMail />
                </a>
                <a className='contact-items' href="https://github.com/MichaelHoang1504" target="_blank" title="Github">
                <FaGithub />
                </a>
                <a className='contact-items' href="https://www.linkedin.com/in/minh-michael-hoang-5036a215a/" target="_blank" title="Linkedin">
                <FaLinkedin />
                </a>
                <a className='contact-items' href="https://codepen.io/Hai-Minh-Hoang" target="_blank" title="Codepen">
                <FaCodepen />
                </a>
                <a className='contact-items' href="https://www.instagram.com/" target="_blank" title="Instagram">
                <FaInstagram />
                </a>
                <a className='contact-items' href="https://twitter.com/HaiMinhHoang91" target="_blank" title="XTwitter">
                <FaXTwitter />
                </a>
            </div>
            <div className="footer">
                <a href="#Home" className="back-home" title="Back to Home">
                <IoMdRocket/>
                </a>
                <span className="contact-copyright">Designed &amp; Coded by <strong>Michael Hoang</strong> 2023</span>
            </div>
        </div>
    )
}

export default Contacts;