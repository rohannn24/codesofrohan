import React, { useState } from "react";
import './Contact.css'

const Contact = () => {
    let currText ="";
    let [textNow, updateText] = useState("");
    const printf = (text) => {
        currText = ", " + text.target.value;
    }
    const printing = () => {
        updateText(currText);
    }
    
    return (
        <>
            <div className="c-form">
                <div className="f-area">
                    <h1>Hello{textNow}</h1>
                    <textarea itemType="submit" name="input" id="input-text" cols="20" rows="1" placeholder="Enter Your Name Here." onChange={printf}></textarea>
                    <div className="c-btn" onClick={printing}>Submit</div>
                </div>
            </div>
        </>
    );
}

export default Contact;