import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home/Home";
import Navbar from "./Components/Navbar/Navbar";
import Slotmach from './Components/Slotmach/Slotmach'

const App = () => {
  return(
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element = {<Home/>}/>
        <Route path="/slot-machine" element = {<Slotmach/>}/>
      </Routes>
    </>
  );
}

export default App;