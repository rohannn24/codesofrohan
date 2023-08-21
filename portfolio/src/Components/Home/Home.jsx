import React, { useState } from "react";
import './Home.css'
import Typed from "typed.js";

const Home = () => {
    const el = React.useRef(null);
    
	React.useEffect(() => {
	  const typed = new Typed(el.current, {
		strings: ['React Developer.', 'Proficient in logic building.', 'Java Developer.'],
		typeSpeed: 50,
		loop: true,
	  });
  
	  return () => {
		// Destroy Typed instance during cleanup to stop animation
		typed.destroy();
	  };
	}, []);
    return(
        <>
            <div className="home-full">
                <div className="home-first">
                    <div className="home-f-left">
                        <div className="image-ctrl">
                            <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png' alt="" />
                        </div>
                        <div className="image-ctrl">
                            <img src='https://cdn-icons-png.flaticon.com/512/919/919825.png' alt="" />
                        </div>
                        <div className="image-ctrl">
                            <img src='https://upload.wikimedia.org/wikipedia/en/thumb/3/30/Java_programming_language_logo.svg/1200px-Java_programming_language_logo.svg.png' alt="" />
                        </div>
                    </div>
                    <div className="home-f-right">
                        <div className="right-home">
                            <h1>Welcome to my Portfolio</h1>
                            <span ref={el} className="typing"/>
                        </div>
                    </div>
                </div>


                <div className="home-second container">
                    <h1 className="hs-head">Qualities</h1><hr/>
                    <div className="hs-content">
                        <div className="hs-left">
                            
                        </div>
                        <div className="hs-right">

                        </div>
                    </div>
                    
                </div>
            </div>
        </>
    )
}

export default Home;