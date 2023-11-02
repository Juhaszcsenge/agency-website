import React from 'react';
import './about.css'
import Back from '../Common/Back';


const About = () => {
  return (
    <>
    <section className='about'>
      {/* <Back name='About Us' title='About Us - Who We Are?' cover={img} /> */}
      <div className='container flex mtop'>
        <div className='left-row' style={{ maxWidth: "1600px"}}>
          <h2 style={{fontSize:"30px"}}>Társaságunk célja</h2>
          <p>Gazdasági változások hatására átalakuló,
          és az uniós követelményekhez igazodó,
          piaci igényeket kielégítése.</p>
          <h2 style={{fontSize:"30px"}}>Filozófiánk</h2>
          <p>Az ügyfeleink és szerződéses partnereink
          professzionális képviselete, minőségi kiszolgálása.</p> 
          {/* <a href='/aboutMe'>
            <button className='buttonRight' style={{background: "#CAF0F8", borderRadius: "100px", borderColor: "rgba(0,0,0,0)", color:"#6E6D6E", letterSpacing:"2px", fontFamily:"Montserrat,Helvetica,Arial,Lucida,sans-serif"}}>
              Rólam
            </button>
          </a> */}
          <button className='btn2'>More About Us</button>
        </div>
        <div className='right row'>
          <img src='./immio.jpg' alt='' />
        </div>
      </div>
    </section>
  </>
  );
}

export default About;
