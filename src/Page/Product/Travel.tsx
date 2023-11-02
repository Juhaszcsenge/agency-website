import React from 'react';
import './travel.css'
import Footer from '../../Component/Footer/Footer';
import Header from '../../Component/Header';

const Travel = () => {
  return (
    <>
    
    <section className='aboutMe' style={{backgroundImage: "https://szunyikitti.hu/wp-content/uploads/2023/02/Fokep_tiny-468x700.jpg"}}>
   <div className='main'>
    <img src='travel.jpg'></img>
    <div className='about-text'>
      <h1>Utasbiztosítás</h1>
      <h2>Nyaralás</h2>
      <p>Az utasbiztosítás a külföldi nyaralás, pihenés során fellépő veszélyhelyzetek (pl. baleset, betegség, poggyászkárok, jogvédelem stb.) esetén nyújt biztonságot és segítséget.</p>

      <h1>Extrém sport</h1>
      <p>Továbbá biztosíthatók az extrém sportok kedvelői is (sí, snowboard, búvárkodás, rafting, stb.)</p>
    </div>
   </div>
    </section>
   
    </>
  );
};

export default Travel;
