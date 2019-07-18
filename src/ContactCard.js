import React from "react";
import style from "./style.css";


function ContactCard(){
    return (
        <div className="contact-card">
            <img alt="" src="http://placekitten.com/300/200"/>
            <h3>Mr. Smith</h3>
            <p>Phone: +44 123 333 444</p>
            <p>Email: mr.smith@catnap.com</p>
        </div>
    )
}

export default ContactCard