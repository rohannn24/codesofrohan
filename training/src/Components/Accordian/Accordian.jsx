import './Accordian.css'
import React from 'react'
import {questions} from './AccData'
import SingleAcc from './SingleAcc'

const Accordian = () => {
    return (
        <>
            <div className="full-acc">
                <div className="main-acc">
                    {
                        questions.map((el) => {
                            return <SingleAcc key = {el.id} que = {el.question}/>
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default Accordian;