import React from 'react'
import './Everyblog.css'
import { Link } from 'react-router-dom';

function goToBtn() {
    window.scrollTo({
        top: 0, left: 0, behavior: 'smooth'
    })
}

const Card = ({image, title, desc, url}) => {
    return (
        <div>
        <div className="c-card">
                <img src={image} alt="Card-Image" />
            <div className="meta-data">
                <h2 className="title">{title}</h2>
                <p>{desc}</p>
                <Link to = {url}> <div className="btn b-btn" onClick={goToBtn}>Read More</div> </Link>
            </div>
        </div><hr/>
        </div>
    );
}

export default Card;