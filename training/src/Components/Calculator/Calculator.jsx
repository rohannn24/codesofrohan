import './Calculator.css';
import React, { useState } from 'react';

const Calculator = () => {
    const [val, setVal] = useState(0);
    const [oprant, setOprant] = useState("");
    const [val1, setVal1] = useState(0);
    let x = 0, y = 0;
    const handleOnClick = () => {
        console.log()
    }
    const handleOnClick1 = () => {
        setVal(document.getElementById('one').innerText);
    }
    const handleOnClick2 = () => {
        setVal(document.getElementById('two').innerText);
    }
    const handleOnClick3 = () => {
        setVal(document.getElementById('three').innerText);
    }
    const handleOnClickPl = () => {
        setVal(document.getElementById('one').innerText);
    }
    return(
        <>
            <div className="full-calci">
                <div className="calci">
                    <div className="output">
                        {val}
                    </div>
                    <div className="btns">
                        <div className="btn-row">
                            <div id = "one" className="cal-btn" onClick={handleOnClick1}>1</div>
                            <div id = "two" className="cal-btn" onClick={handleOnClick2}>2</div>
                            <div id = "three" className="cal-btn" onClick={handleOnClick3}>3</div>
                            <div id = "plus" className="cal-btn" onClick={handleOnClickPl}>+</div>
                        </div>
                        <div className="btn-row">
                            <div id = "four" className="cal-btn" onClick={handleOnClick}>4</div>
                            <div id = "five" className="cal-btn" onClick={handleOnClick}>5</div>
                            <div id = "six" className="cal-btn" onClick={handleOnClick}>6</div>
                            <div id = "minus" className="cal-btn" onClick={handleOnClick}>-</div>
                        </div>
                        <div className="btn-row">
                            <div id = "seven"className="cal-btn" onClick={handleOnClick}>7</div>
                            <div id = "eight"className="cal-btn" onClick={handleOnClick}>8</div>
                            <div id = "nine"className="cal-btn" onClick={handleOnClick}>9</div>
                            <div id = "multi" className="cal-btn" onClick={handleOnClick}>x</div>
                        </div>
                        <div className="btn-row">
                            <div id = "zero" className="cal-btn" onClick={handleOnClick}>0</div>
                            <div id = "decimal" className="cal-btn" onClick={handleOnClick}>.</div>
                            <div id = "total" className="cal-btn" onClick={handleOnClick}>=</div>
                            <div id = "divide" className="cal-btn" onClick={handleOnClick}>/</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Calculator;