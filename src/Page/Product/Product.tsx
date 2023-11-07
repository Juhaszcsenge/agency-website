import React, { useEffect, useRef } from 'react';
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
import FeaturedCard from '../Featured/FeaturedCard';
import {  Route } from 'react-router-dom';
import Car from './Car';

interface ProductProps {
  scrollToSection: (sectionId: any) => void;
}

const Product: React.FC<ProductProps> = ({ scrollToSection }) => {

  const handleScrollToSection = (sectionId: any) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
    <Header2/>
    <HeroProduct/>
    <section className='products'>
   {/* <div className='main1'>
   <img className='car-img' src='car.jpg'></img>
    <div className='about-text'>
      <h1>Gépjármű biztosítás</h1>
      <h3>KGFB</h3>
      <p>A kötelező gépjármű-felelősségbiztosítás alapján a biztosító a gépjármű üzemeltetése során az általunk másoknak okozott károkat téríti meg. A biztosítási díj ellenében a biztosító átvállalja az okozott kár teljes vagy részleges megtérítését.</p>

      <h3>Casco</h3>
      <p>A casco biztosítás saját gépjárművünkben keletkezett töréskárokat, valamint az időjárási viszontagságokból eredő elemi károk téríti meg, továbbá lopás és részlopás esetén nyújt fedezetet.</p>
    </div>
   </div> */}
   </section>
   {/* <Switch>
    <Route path="/products/house" render={(props) => <House {...props} />} />
      <Route  path="/products/law" component={Law} />
      <Route  path="/products/life" component={Life} />
      <Route  path="/products/travel" component={Travel} />
    </Switch>  */}
    <BackToTopButton/>
    <Car/>
    <House scrollToSection={handleScrollToSection}/>
    <Law scrollToSection={handleScrollToSection} />
    <Life scrollToSection={handleScrollToSection} />
    <Travel scrollToSection={handleScrollToSection}/>
    <Footer/>
    </>
  );
};

export default Product;
