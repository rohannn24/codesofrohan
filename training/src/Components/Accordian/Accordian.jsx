import './Accordian.css'
import React from 'react'

const handleOnClick = () =>{
    if(document.getElementById('para').style.transform === 'scaleY(0)') {
        document.getElementById('para').style.transform = 'scaleY(1)';
    } else{
        document.getElementById('para').style.transform = 'scaleY(0)';
    }
}
const Accordian = () => {
    return (
        <>
            <div className="full-acc">
                <div className="acc">
                    <ul className="acc-list">
                        <li className="acc-item">
                            <div className="acc-full-head">
                            <div className="ddb-back" onClick={handleOnClick}>
                            <div className="drop-down-btn"></div>
                            </div>
                            <p className="acc-head">Item number 1</p>
                            </div>
                            <p className="item-desc" id = "para">Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta harum quis ipsam consequuntur eum temporibus suscipit nesciunt esse, perspiciatis aperiam. Cumque, quae. Non qui perferendis alias necessitatibus ipsam facilis dolor.</p>
                        </li>
                        <li className="acc-item">
                            <div className="acc-full-head">
                            <div className="ddb-back" onClick={handleOnClick}>
                            <div className="drop-down-btn"></div>
                            </div>
                            <p className="acc-head">Item number 1</p>
                            </div>
                            <p className="item-desc" id = "para">Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta harum quis ipsam consequuntur eum temporibus suscipit nesciunt esse, perspiciatis aperiam. Cumque, quae. Non qui perferendis alias necessitatibus ipsam facilis dolor.</p>
                        </li>
                        <li className="acc-item">
                            <div className="acc-full-head">
                            <div className="ddb-back" onClick={handleOnClick}>
                            <div className="drop-down-btn"></div>
                            </div>
                            <p className="acc-head">Item number 1</p>
                            </div>
                            <p className="item-desc" id = "para">Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta harum quis ipsam consequuntur eum temporibus suscipit nesciunt esse, perspiciatis aperiam. Cumque, quae. Non qui perferendis alias necessitatibus ipsam facilis dolor.</p>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Accordian;