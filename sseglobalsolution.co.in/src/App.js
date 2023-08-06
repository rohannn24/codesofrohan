import './App.css';
import { Routes, Route } from 'react-router-dom';
import Name from './Component/Navbar/Name';
import Navbar from './Component/Navbar/Navbar';
import Home from './Component/Home/Home';
import Service from './Component/Services/Service';
import Aboutus from './Component/About/Aboutus';
import Contactus from './Component/Contactus/Contactus';
import Message from './Component/Float/Message';
import Footer from './Component/Footer/Footer';
import Last from './Component/Last/Last';
import Clients from './Component/Clients/Clients';
import Batch from './Component/Batch/Batch';
function App() {
  return (
    <>
      <Name/>
      <Navbar/>
      <Message/>
      <Routes>
        <Route path='/' element = {<Home/>}/>
        <Route path='/services' element = {<Service/>}/>
        <Route path='/aboutus' element = {<Aboutus/>}/>
        <Route path='/contactus' element = {<Contactus/>}/>
        <Route path='/clients' element = {<Clients/>}/>
      </Routes>
      <Last/>
      <Footer/>
      <Batch/>
    </>
  );
}

export default App;
