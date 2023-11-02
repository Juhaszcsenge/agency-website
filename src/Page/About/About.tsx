import React from 'react';
import './about.css'
import BackToTopButton from '../BackToButton';



const About = () => {
  return (
    <>
    <section className='about'>
      <div className='container flex mtop'>
        <div className='left-row' style={{ maxWidth: "1600px"}}>
          <h2 style={{fontSize:"30px"}}>Társaságunk célja</h2>
          <p>Gazdasági változások hatására átalakuló,
          és az uniós követelményekhez igazodó,
          piaci igényeket kielégítése.</p>
          <h2 style={{fontSize:"30px"}}>Filozófiánk</h2>
          <p>Az ügyfeleink és szerződéses partnereink
          professzionális képviselete, minőségi kiszolgálása.</p> 
          <h2 style={{fontSize:"30px"}}>Mottónk</h2>
          <p>Nem szabad a pénz után futni,Elébe kell menni.</p>
          {/* <a href='/aboutMe'>
            <button className='buttonRight' style={{background: "#CAF0F8", borderRadius: "100px", borderColor: "rgba(0,0,0,0)", color:"#6E6D6E", letterSpacing:"2px", fontFamily:"Montserrat,Helvetica,Arial,Lucida,sans-serif"}}>
              Rólam
            </button>
          </a>
          <button className='btn2'>More About Us</button> */}
        </div>
        <div className='right row'>
          <img className='about-img' src='./immio.jpg' alt='' />
        </div>
      </div>
      <BackToTopButton/>
    </section>
  </>
  );
}

export default About;

