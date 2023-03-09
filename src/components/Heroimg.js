import "./HeroimgStyles.css"
import IntroImg from "../assets/IntroImg.jpg"
import {Link} from "react-router-dom"
function HeroImg(){

    return (
        <>
          <div className="hero">
            <div className="mask">
                <img className="intro-img" src={IntroImg} alt="IntroImg"/>
            </div>
            <div className="content">
                <p>
                    HI, I'M SANIA 
                </p>
                <h1>
                    Web Developer
                </h1>
                <div>
                    <Link to="/project" className="btn">Projects</Link>
                    <Link to="/contact" className="btn-light">Contact</Link>
                </div>
            </div>
          </div>  
        </>
    );

}

export default HeroImg;
