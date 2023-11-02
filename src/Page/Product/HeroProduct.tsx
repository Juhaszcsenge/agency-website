import React from "react";
import "./heroProduct.css"
import { Link } from "react-scroll";


const Hero = () => {
  return (
    <>
      <section className='hero-product'>
        <div className='conatiner' style={{alignItems: "center", textAlign: "center"}}>
          <div className='row' style={{alignItems: "center", justifyContent: "center"}}>
            {/* <h1 style={{color: "black"}}>Mazányi Judit</h1> */}
            {/* <h1 style={{color: "black"}}>Ne hidd, hogy ami neked nehezedre esik, az emberileg lehetetlen. Inkább úgy fogd fel, hogy ami emberileg lehetséges és megszokott, azt te is elérheted. </h1> 
            <p className="valami" style={{alignItems: "center", color:"black"}}>(Marcus Aurelius)</p> */}
          </div>
        </div>
      </section>
    </>
  )
}

export default Hero