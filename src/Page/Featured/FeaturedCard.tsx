import React from "react"
import { Link } from "react-router-dom";
import { featured } from "../Data/Data"


const FeaturedCard = () => {
  return (
    <>
      <div className='content grid5 mtop'>
        {featured.map((items, index) => (
          <Link to={items.link} className='box' key={index}>
            <img src={items.cover} alt='' />
            <h4>{items.name}</h4>
            </Link>
        ))}
      </div>
    </>
  )
}

export default FeaturedCard