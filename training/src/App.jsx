import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home/Home";
import Navbar from "./Components/Navbar/Navbar";
import Slotmach from './Components/Slotmach/Slotmach'
import Challenge from "./Components/Challenge/Challenge";

const App = () => {
  return(
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element = {<Home/>}/>
        <Route path="/slot-machine" element = {<Slotmach/>}/>
        <Route path="/challenge" element = {<Challenge/>}/>
      </Routes>
    </>
  );
}

export default App;