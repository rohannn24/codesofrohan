import { Route, Routes } from "react-router-dom";
// import Home from "./Components/Home/Home";
import Navbar from "./Components/Navbar/Navbar";
// import Slotmach from './Components/Slotmach/Slotmach'
import Challenge from "./Components/Challenge/Challenge";
import Events from "./Components/Events/Events";
// import Contact from "./Components/Contact/Contact";
import Todo from "./Components/Todo/Todo";
import Signup from "./Components/Contact/Signup";
import Calculator from "./Components/Calculator/Calculator";
import Id from "./Components/ID/Id";
import Accordian from "./Components/Accordian/Accordian";

const App = () => {
  return(
    <>
      <Navbar/>
      <Routes>
        {/* <Route path="/" element = {<Home/>}/> */}
        <Route path="/" element = {<Id/>}/>
        {/* <Route path="/slot-machine" element = {<Slotmach/>}/> */}
        <Route path="/slot-machine" element = {<Accordian/>}/>
        <Route path="/challenge" element = {<Challenge/>}/>
        <Route path="/Events" element = {<Events/>}/>
        {/* <Route path="/contact" element = {<Contact/>}/> */}
        <Route path="/contact" element = {<Signup/>}/>
        <Route path="/to-do" element = {<Todo/>}/>
        <Route path="/calci" element = {<Calculator/>}/>
      </Routes>
    </>
  );
}

export default App;