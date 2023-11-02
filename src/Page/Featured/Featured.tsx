import React from "react";
import FeaturedCard from "./FeaturedCard";
import Heading from "../Heading";
import './featured.css';

const Featured = () => {
  return (
    <>
      <section className='featured background'>
        <div className='container'>
          <Heading title='Featured Property Types' subtitle='Find All Type of Property.' />
          <FeaturedCard />
        </div>
      </section>
    </>
  );
}

export default Featured;
