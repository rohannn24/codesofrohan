import React, {useState} from "react";
import './Slotmach.css'


const Slotmach = () => {
    let [count, setcount] = useState(0);
    const handleOnClick = () => {
        setcount(++count);
    }
    return (
        <>
            <div className="center">
                <h2 className="sm-head">Welcome to clicks counter.</h2>
                <h1 className="sm-count">{count}</h1>
                <button className="c-btn" onClick={handleOnClick}>Click me</button>
            </div>
        </>
    );
}

export default Slotmach;