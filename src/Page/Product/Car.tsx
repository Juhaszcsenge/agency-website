import React from 'react';
import './car.css'
import Footer from '../../Component/Footer/Footer';
import Header from '../../Component/Header';

const Car = () => {
  return (
    <>
    <Header />
    <section className='aboutMe' style={{backgroundImage: "https://szunyikitti.hu/wp-content/uploads/2023/02/Fokep_tiny-468x700.jpg"}}>
   <div className='main'>
    <img src='car.jpg'></img>
    <div className='about-text'>
      <h1>Gépjármű biztosítás</h1>
      <h2>KGFB</h2>
      <p>A kötelező gépjármű-felelősségbiztosítás alapján a biztosító a gépjármű üzemeltetése során az általunk másoknak okozott károkat téríti meg. A biztosítási díj ellenében a biztosító átvállalja az okozott kár teljes vagy részleges megtérítését.</p>

      <h1>Casco</h1>
      <p>A casco biztosítás saját gépjárművünkben keletkezett töréskárokat, valamint az időjárási viszontagságokból eredő elemi károk téríti meg, továbbá lopás és részlopás esetén nyújt fedezetet.</p>
    </div>
   </div>
    </section>
    <Footer/>
    </>
  );
};

export default Car;
