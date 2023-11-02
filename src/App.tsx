import React from 'react';
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



function App() {
  return (
    <div>
      <Routes>
          <Route path='/' element={
            <div>
             <Header/>
             <Hero/>
             <About/>
             <Featured/>
             <Location/>
             <SecondHero/>
             <Contact/>
             <Footer/>
            </div>
          }/>
          <Route path='/aboutMe' element={<Product />} />
        </Routes>
    </div>
  );
}

export default App;
