import React, { useState } from "react";
import './Id.css';
import PlusOneIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import Button from '@mui/material/Button';
const Id = () => {
    let [count, setCount] = useState(0);
    const inc = () => {
        setCount(++count);
    } 
    const dec = () => {
        if(count != 0) setCount(--count);
        else alert("Sorry, You reached the minimum limit!!!")
    }
    return (
        <>
            <div className="full-id">
                <div className="id">
                    <h1>{count}</h1>
                    <div className="btn-id">
                        <button className="id-btn" onClick={inc}><PlusOneIcon/></button>
                        <button className="id-btn" onClick={dec}><RemoveIcon/></button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Id;