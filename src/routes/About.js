import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Heroproj from "../components/Heroproj";
import Github from "../components/About/Github";
import Techstack from "../components/About/Techstack";
import Toolstack from "../components/About/Toolstack";
import Content from "../components/About/AboutContent"

function About(){

    return (
        <>
            <Navbar/>
            <Heroproj
                heading="About."
                text="I'm a Web developer and DSA enthusiast"
            />

            <Content/>
            
                <h1 className="project-heading">
                        Professional <strong className="purple">Skillset </strong>
                </h1>

            <Techstack />

                <h1 className="project-heading">
                    <strong className="purple">Tools</strong> I use
                </h1>
            <Toolstack />

            <Github />
            
            
            <Footer/>
        </>

    );

}

export default About;
