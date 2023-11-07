import React from "react";
import FeaturedCard from "./FeaturedCard";
import Heading from "../Heading";
import './featured.css';



const Featured = () => {
 
  return (
    <>
      <section className='featured background'>
        <div className='container'>
          <Heading title='Biztosítási termékeink' subtitle='Részletesebben a termékeink menüpont alatt tudnak tájékozódni' />
          <FeaturedCard/>
        </div>
      </section>
    </>
  );
}

export default Featured;
