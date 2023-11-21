import React from 'react'

export default function SingleAcc(key, question, answer) {
  return (
    <div>
        <div className="single-acc">
            <h3>{question}</h3>
            <p>{answer}</p>
        </div>
    </div>
  )
}
