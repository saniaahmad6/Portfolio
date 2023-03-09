import "./Form.css"
import React, { useRef } from 'react';
import emailjs from "emailjs-com"

function Form(){
    const form = useRef();

    function sendEmail(e){
        e.preventDefault();

        emailjs.sendForm('service_oz2geyl', 'template_ybwn3yn', form.current, 'GdQrKn87Y9tyyykyy')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset();
    }
    return (
        <div className="form">
            <form ref={form} onSubmit={sendEmail}>
                <label>
                    Your Name
                </label>
                <input type="text" name="name">

                </input>
                <label>
                    Email
                </label>
                <input type="email" name="email">

                </input>
                <label>
                    Subject
                </label>
                <input type="text" name="subject">

                </input>
                <label>
                    Message
                </label>
                <textarea rows="6" placeholder="Type your message here" name="message"/>
                <button type="submit" className="btn">SUBMIT</button>
            </form>
        </div>
    )

}

export default Form;