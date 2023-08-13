import React, { useState } from "react";
import './Challenge.css'
let timeNow;

const Challenge =  () => {
    let time = new Date().toLocaleTimeString();
    let [currTime, timeNow] = useState(time);
    setInterval(() => {
        let timeUpdate = new Date().toLocaleTimeString();
        timeNow(timeUpdate);
    }, 1000);
    return(
        <>
            <div className="c-time">
                <div className="curr-time">{currTime}</div>
            </div>
        </>
    );
}

export default Challenge;