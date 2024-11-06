import React from "react"
import { location } from "../Data/Data"
import "./style.css"
import Heading from "../Heading"

const Location = () => {
  return (
    <>
      <section className='location padding'>
        <div className='container'>
        <h1 className="l-h1">Szolgáltatásaink</h1>
  <h2 className="l-h2">Megtaláljuk az Önnek legjobb biztosítást!</h2>
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