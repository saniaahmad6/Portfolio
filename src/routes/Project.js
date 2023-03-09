import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Heroproj from "../components/Heroproj";
import Work from "../components/Project/Work";
function Project(){

    return (
        <>
            <Navbar/>
            <Heroproj 
                heading="Projects."
                text="Here are some of my recent projects"

            />
            <Work/>
            <Footer/>
        </>

    );

}

export default Project;
