import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home/Home";
import Navbar from "./Components/Navbar/Navbar";
import Slotmach from './Components/Slotmach/Slotmach'
import Challenge from "./Components/Challenge/Challenge";
import Events from "./Components/Events/Events";
import Contact from "./Components/Contact/Contact";

const App = () => {
  return(
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element = {<Home/>}/>
        <Route path="/slot-machine" element = {<Slotmach/>}/>
        <Route path="/challenge" element = {<Challenge/>}/>
        <Route path="/Events" element = {<Events/>}/>
        <Route path="/contact" element = {<Contact/>}/>
      </Routes>
    </>
  );
}

export default App;