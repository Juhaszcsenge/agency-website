import React from 'react';
import './house.css'
import Footer from '../../Component/Footer/Footer';
import Header from '../../Component/Header';

const House = () => {
  return (
    <>
   
    <section className='aboutMe' style={{backgroundImage: "https://szunyikitti.hu/wp-content/uploads/2023/02/Fokep_tiny-468x700.jpg"}}>
   <div className='main'>
    <img src='house.jpg'></img>
    <div className='about-text'>
      <h1>Lakás és vagyonbiztonság</h1>
      <h2>Épület</h2>
      <p>Súlyos anyagi terheket róhat ránk egy betörés vagy lakástűz, de az utóbbi évekre jellemző, szélsőséges időjárás változások is. Egy lakásbiztosítás megkötésével, egy káreseményt követően az eredeti állapot helyreállítása felgyorsítható, biztosítható és további anyagi terhet már nem jelent a család számára.</p>

      <h1>Ingóság</h1>
      <p>Egy lakásbiztosítással továbbá kedvezően lehet saját és közös is ingóságot fedezetbe venni.</p>

      <h1>Társasház</h1>
      <p>A biztosítás alapján az épület egésze  biztosított, a pincétől egészen a tetőig, beleértve az épület összes falazatát, födémet, az épületgépészeti elemeket, mint például a teljes víz-, melegvíz-, csatornahálózatot, az elektromos vezetékeket a mérőórákkal együtt, a szellőző berendezéseket, stb.</p>
    
    </div>
   </div>
    </section>
   
    </>
  );
};

export default House;
