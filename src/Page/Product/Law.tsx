import React from 'react';
import './law.css'
import Footer from '../../Component/Footer/Footer';
import Header from '../../Component/Header';

const Law = () => {
  return (
    <>
    <section className='aboutMe' style={{backgroundImage: "https://szunyikitti.hu/wp-content/uploads/2023/02/Fokep_tiny-468x700.jpg"}}>
   <div className='main'>
    <img src='law.jpg'></img>
    <div className='about-text'>
      <h1>Jogvédelem</h1>
      <p>A jogvédelmi biztosítás a magánéletben előforduló peres eljárások, jogi problémák esetén nyújt segítséget. Segíti a biztosítottat saját jogainak érvényesítéséhez a harmadik személlyel szemben. Tehát a jogvédelmi biztosítás olyan kockázatokat fedez, térít meg ami semmilyen más biztosítási típus nem foglal magába!</p>
    </div>
   </div>
    </section>
    </>
  );
};

export default Law;
