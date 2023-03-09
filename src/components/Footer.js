import "./FooterStyles.css"
import 'font-awesome/css/font-awesome.min.css';
import {FaHome, FaMailBulk, FaLinkedin,FaGithub,FaFacebook,FaTwitter} from "react-icons/fa"
import { NavLink } from "react-router-dom";

function Footer(){

    return (
        <>
            <div className="footer">
                <div className="footer-container">
                    <div className="left">
                        <div className="location">
                            <h4>
                                <FaHome size={20} styles={{color: "#fff", marginRight: "2rem"}}/>
                                <div>
                                    <p>
                                        New Delhi, India
                                    </p>
                                </div>
                            </h4>
                            
                        </div>

                        <div className="email">
                            <h4>
                                <FaMailBulk size={20} styles={{color: "#fff", marginRight: "2rem"}}/>
                                <div>
                                    <p>
                                        sania.ahmad483@gmail.com
                                    </p>
                                </div>
                            </h4>
                            
                        </div>
                        
                    </div>





                    <div className="right">
                        <h4> Feel free to connect</h4>
                        <p>
                            This is Sania Ahmad. I enjoy discussing
                            new projects and design challenges.
                        </p>
                        <div className="socials">
                            
                        <h4>
                        <NavLink to="https://www.linkedin.com/in/sania-ahmad-b6a5b7224/">
                            <FaLinkedin className="icon" size={20} styles={{color: "#fff", marginRight: "2rem"}}/>
                        </NavLink>
                        <NavLink to="https://github.com/saniaahmad6">
                            <FaGithub className="icon" size={20} styles={{color: "#fff", marginRight: "2rem"}}/>
                        </NavLink>
                        <NavLink to="https://www.facebook.com/sania.ahmad.562114">
                            <FaFacebook className="icon" size={20} styles={{color: "#fff", marginRight: "2rem"}}/>
                        </NavLink>
                        <NavLink to="https://twitter.com/SaniaAhmad123">
                            <FaTwitter className="icon" size={20} styles={{color: "#fff", marginRight: "2rem"}}/>
                        </NavLink>
                        
                        
                        
                        
                        </h4>
                        
                        </div>

                    </div>

                </div>

            </div>
        
        </>
    );

}

export default Footer;
