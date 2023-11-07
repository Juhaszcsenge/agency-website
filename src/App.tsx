import React, { useRef } from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Header from './Component/Header';
import Hero from './Page/Hero/Hero';
import About from './Page/About/About';
import Footer from './Component/Footer/Footer';
import SecondHero from './Page/SecondHero/SecondHero';
import Location from './Page/Location/Location';
import Featured from './Page/Featured/Featured';
import Contact from './Page/Contact/Contact';
import Product from './Page/Product/Product';
import Complaint from './Page/Complaint/Complaint';



function App() {
  const scrollToSection = useRef(() => {});
  return (
    <div>
      <Routes>
          <Route path='/' element={
            <div>
             <Header/>
             <Hero/>
             <About/>
             <Featured />
             <Location/>
             <SecondHero/>
             <Contact/>
             <Footer/>
            </div>
          }/>
          <Route path='/'/>
          <Route path='/about' element={<About />} />
          <Route path='/products' element={<Product scrollToSection={scrollToSection.current} />} />
          <Route path='/complaint' element={<Complaint />} />
          <Route path='/' element={<Location />} />
          <Route path='/' element={<Contact />} />
        </Routes>
    </div>
  );
}

export default App;
