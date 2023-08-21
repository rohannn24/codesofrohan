import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import Home from './Components/Home/Home';
import { Route, Routes } from "react-router-dom";
const App = () =>{
  return(
    <>
      <Navbar/>
      <Routes>
        <Route exact path="" element = {<Home/>}/>
      </Routes>
    </>
  );
}

export default App;