import React from 'react';
import './travel.css'
import Footer from '../../Component/Footer/Footer';
import Header from '../../Component/Header';


interface TravelProps {
  scrollToSection: (sectionId: any) => void;
}

const Travel: React.FC<TravelProps> = ({ scrollToSection }) => {
  return (
    <>
    <section id='travel' className='travel' style={{backgroundImage: "https://szunyikitti.hu/wp-content/uploads/2023/02/Fokep_tiny-468x700.jpg"}}>
   <div className='main2'>
    <img className='travel-img' src='travel2.jpg'></img>
    <div className='about-text'>
      <h1>Utasbiztosítás</h1>
      <h3>Nyaralás</h3>
      <p>Az utasbiztosítás a külföldi nyaralás, pihenés során fellépő veszélyhelyzetek (pl. baleset, betegség, poggyászkárok, jogvédelem stb.) esetén nyújt biztonságot és segítséget.</p>

      <h3>Extrém sport</h3>
      <p>Továbbá biztosíthatók az extrém sportok kedvelői is (sí, snowboard, búvárkodás, rafting, stb.)</p>
    </div>
   </div>
    </section>
   
    </>
  );
};

export default Travel;
