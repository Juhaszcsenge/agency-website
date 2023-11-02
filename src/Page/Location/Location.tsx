import React from "react"
import { location } from "../Data/Data"
import "./style.css"
import Heading from "../Heading"

const Location = () => {
  return (
    <>
      <section className='location padding'>
        <div className='container'>
        <Heading title='Megtaláljuk az Önnek legjobb biztosítást!' subtitle='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.' />
          <div className='content grid3 mtop'>
            {location.map((item, index) => (
              <div className='box' key={index}>
                <img src={item.cover} alt='' />
                <div className='overlay'>
                  <h5>{item.name}</h5>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default Location