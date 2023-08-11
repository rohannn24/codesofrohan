import React, { useState } from "react";
import './Challenge.css'
let timeNow;

const Challenge =  () => {
    let [timeNow, getTime] = useState(0);
    const handleOnClick = () => {
        return ++timeNow;
    }
    return(
        <>
            <div className="c-time">
                <div className="curr-time">{timeNow}</div>
                <button className="c-btn" onClick={handleOnClick}>Click Me</button>
            </div>
        </>
    );
}

export default Challenge;