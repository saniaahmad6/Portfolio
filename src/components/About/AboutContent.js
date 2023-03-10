import "./AboutContent.css"
import {NavLink} from "react-router-dom"
import { ImPointRight } from "react-icons/im";
import laptopImg from "./me.png";
import Button from "react-bootstrap/Button";
// import Particle from "../Particle";
import pdf from "../Resume/Sania_Ahmad.pdf";
import { AiOutlineDownload } from "react-icons/ai";
function Content(){
    return (
        <>
        <div className="content">

        
        <div className="about">
            <div className="left">
                <h1 className="heading">
                    $whoami
                </h1>
                <p style={{textAlign: "justify", fontSize: "1.3rem" ,paddingBottom:"2rem"}}>
                    Hi Everyone, I am <span className="purple">Sania Ahmad </span>
                    from <span className="purple"> New Delhi, India.</span>
                    <br />I am a sophomore pursuing Computer Engineering at Jamia Millia Islamia.
                    <br />
                    <br />
                    Apart from web, I love problem solving. Have a look at my profiles: 
                </p>
                <ul>
                    <li className="about-activity">
                    <NavLink to="https://auth.geeksforgeeks.org/user/saniaahmad6/practice">
                        <ImPointRight /> GeeksForGeeks
                    </NavLink>
                    </li>
                    
                    <li className="about-activity">
                    <NavLink to="https://leetcode.com/saniaahmad/">
                        <ImPointRight /> LeetCode
                    </NavLink>
                    </li>
                    
                    
                </ul>

                <p style={{ color: "#98D7C2", fontSize: "1.3rem", paddingBottom: "1.5rem" }}>
                        "Strive to build things that make a difference!"{" "}
                
                <footer className="blockquote-footer">--Sania</footer>
                </p>
                <NavLink to ="/contact">
                    <button className="btn">
                        CONTACT
                    </button>
                    
                </NavLink>
                <br/>
                <center>
                <Button className="btn"
                        variant="primary"
                        href={pdf}
                        target="_blank"
                        style={{ maxWidth: "250px" }}
                    >
                        <AiOutlineDownload />
                        &nbsp;Download CV
                 </Button>
                 
                 </center>

            </div>

            {/* <div className="right">
                <img src={laptopImg} alt="about" className="img-fluid" />

            </div> */}
        </div>
        </div>
        </>
    )
}

export default Content;