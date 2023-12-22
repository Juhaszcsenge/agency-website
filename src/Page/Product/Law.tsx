import React from 'react';
import './law.css'


interface LawProps {
  scrollToSection: (sectionId: any) => void;
}


const Law: React.FC<LawProps> = ({ scrollToSection }) => {
  return (
    <>
    <section id='law' className='law' >
   <div className='main'>
    <img className='law-img' src='law.jpg' alt=''></img>
    <div className='about-text'>
      <h1>Jogvédelem</h1>
      <p>A jogvédelmi biztosítás a magánéletben előforduló peres eljárások, jogi problémák esetén nyújt segítséget. 
      Segíti a biztosítottat saját jogainak érvényesítéséhez a harmadik személlyel szemben. 
      Tehát a jogvédelmi biztosítás olyan kockázatokat fedez, térít meg ami semmilyen más biztosítási típus nem foglal magába!</p>
    </div>
   </div>
    </section>
    </>
  );
};

export default Law;
