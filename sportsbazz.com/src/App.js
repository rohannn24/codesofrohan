import MichaelJordan from './Components/AboutPages/MichaelJordan/MichaelJordan';
import Home from './Components/Home/Home';
import Webbothsides from './Components/Home/Webbothsides';
import Navbar from './Components/Navbar/Navbar';
import { Routes, Route } from 'react-router-dom'
import NBA from './Components/SportsSpecial/NBA';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <>
      <Navbar/>
      <Webbothsides/>
      <Routes>
        <Route exact path='/' element = {<Home/>}/>
        <Route exact path='/tag/michael-jordan' element = {<MichaelJordan/>}/>
        <Route exact path='/category/nba' element = {<NBA/>}/>
        {/* <Route exact path='/category/nba' element = {<NBA/>}/> */}
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
