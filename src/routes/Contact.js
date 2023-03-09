import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Heroproj from "../components/Heroproj";
import Form from "../components/Contact/Form";
function Contact(){

    return (
        <>
            <Navbar/>
            <Heroproj
                heading="Contact."
                text="Let's have a chat"
            />
            <Form/>
            <Footer/>
        </>

    );

}

export default Contact;
