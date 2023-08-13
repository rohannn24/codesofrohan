import React, { useState } from "react";
import './Events.css'

const Events = () => {
    let [bgCol, changeCol] = useState("c-eve-bgWhite");
    const handle = () => {
        if(bgCol === "c-eve-bgWhite") changeCol("c-eve-bgBlack");
        else changeCol("c-eve-bgWhite");
    }
    const handleDouble = () => {
        if(bgCol === "e-eve-bgBlack") changeCol('c-eve-bgYellow');
        else changeCol("e-eve-bgWhite");
    }
    return(
        <>
            <div className={bgCol}>
                <button className="eve-btn" onDoubleClick={handleDouble} onClick={handle}>Click Me</button>
            </div>
        </>
    );
}

export default Events;