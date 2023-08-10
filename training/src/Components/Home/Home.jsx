import React from "react";
import "./Home.css";
import Card from "./Card";
import Cdata from "./CardInfo";

export default function Home() {
    return (
        <>
            <div className="home-cards">
                {Cdata.map( (val) => {
                    return(<Card
                        img = {val.cimg}
                        head = {val.chead}
                    />)
                })}
            </div>
        </>
    );
}
