import { Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home';
import Signup from './Components/LoginSignup/Signup';
import Login from './Components/LoginSignup/Login';
import SiteMap from './Components/SiteMap/SiteMap';
import Footer from './Components/Footer/Footer';
import Aboutme from './Components/Aboutme/Aboutme';

function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/' element = {<Home/>}/>
        <Route path='/sign-up' element = {<Signup/>}/>
        <Route path='/login' element = {<Login/>}/>
        <Route path='/sitemap' element = {<SiteMap/>}/>
        <Route path='/about-me' element = {<Aboutme/>}/>
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
