// import logo from './logo.svg';
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from './Components/Header';
import Home from './Pages/Home';
import Testimonials from './Pages/Testimonials';
import ContactUs from './Pages/ContactUs';
import AboutUs from './Pages/AboutUs';
import Footer from './Components/Footer';
import Acupuncture from './Pages/Acupuncture';
import Functional from './Pages/Functional';
import Yoga from './Pages/Yoga';
import Cosematic from './Pages/Cosematic';
import Guasha from './Pages/Guasha';
import Moxibustion from './Pages/Moxibustion';
import Cupping from './Pages/Cupping';
import Pranayama from './Pages/Pranayama';
import SmoothScroll from './Components/SmoothScroll';



function App() {
  return (
   <div>
    <Router>
     <SmoothScroll>
       <Header/>
      <Routes>
        <Route index element={<Home/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/aboutus'element={<AboutUs/>}/>
        <Route path='/acupuncture' element={<Acupuncture/>}/>
        <Route path='/functional' element={<Functional/>}/>
        <Route path='/yoga' element={<Yoga/>}/>
        <Route path='/cosematic' element={<Cosematic/>}/>
        <Route path='/guasha' element={<Guasha/>}/>
        <Route path='/moxibustion' element={<Moxibustion/>}/>
        <Route path='/cupping' element={<Cupping/>}/>
        <Route path='/pranayama' element={<Pranayama/>}/>
        <Route path='/testimonials' element={<Testimonials/>}/>
        <Route path='/contactus' element={<ContactUs/>}/>
        {/* <Route path='/home1' element={<AboutUs/>}/> */}
      </Routes>
      <Footer/>
      </SmoothScroll>
    </Router>
    {/* <Header/> */}
   </div>
  );
}

export default App;
