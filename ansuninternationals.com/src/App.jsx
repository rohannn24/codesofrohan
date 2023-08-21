import React from "react";
import Tophead from "./Components/Tophead/Tophead";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Home/Home";
import { Routes, Route } from 'react-router-dom';
import Everyblog from "./Components/Blogs/Everyblog/Everyblog";
import Webdev from "./Components/Services/WebDev/Webdev";
import WeHelpYou from "./Components/Howmaywehelpyou/WeHelpYou";

function App() {
  return (
    <div className="app">
      <Tophead/>
      <Navbar/>
      <Routes>
        <Route exact path="/" element = {<Home/>}/>
        <Route exact path="/blogs" element = {<Everyblog/>}/>
        <Route exact path="/services/website-development" element = {<Webdev/>}/>
        <Route exact path="/how-may-we-help-you" element = {<WeHelpYou/>}/>
      </Routes>
    </div>
  );
}

export default App;
