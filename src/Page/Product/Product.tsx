import React from 'react';
import './car.css'
import Footer from '../../Component/Footer/Footer';
import House from './House';
import Law from './Law';
import Life from './Life';
import Travel from './Travel';
import Back from '../Common/Back';
import img from '../Images/about.jpg'
import Header from '../../Component/Header';
import HeroProduct from './HeroProduct';
import Header2 from '../../Component/Header2';
import BackToTopButton from '../BackToButton';



const Product = () => {
  return (
    <>
    <Header2/>
    <HeroProduct/>
    <section id='products' className='aboutMe'>
    {/* <Back name='About Us' title='About Us - Who We Are?' cover={img} /> */}
   <div className='main'>
   <img className='car-img' src='car.jpg'></img>
    <div className='about-text'>
      <h1>Gépjármű biztosítás</h1>
      <h3>KGFB</h3>
      <p>A kötelező gépjármű-felelősségbiztosítás alapján a biztosító a gépjármű üzemeltetése során az általunk másoknak okozott károkat téríti meg. A biztosítási díj ellenében a biztosító átvállalja az okozott kár teljes vagy részleges megtérítését.</p>

      <h3>Casco</h3>
      <p>A casco biztosítás saját gépjárművünkben keletkezett töréskárokat, valamint az időjárási viszontagságokból eredő elemi károk téríti meg, továbbá lopás és részlopás esetén nyújt fedezetet.</p>
    </div>
   </div>
    </section>
    <BackToTopButton/>
    <House/>
     <Law/>
    <Life/>
    <Travel/>
    <Footer/>
    </>
  );
};

export default Product;
