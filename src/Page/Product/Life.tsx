import React from 'react';
import './life.css'
import Footer from '../../Component/Footer/Footer';
import Header from '../../Component/Header';

const Life = () => {
  return (
    <>
    <section className='aboutMe' style={{backgroundImage: "https://szunyikitti.hu/wp-content/uploads/2023/02/Fokep_tiny-468x700.jpg"}}>
   <div className='main'>
    <img src='life.png'></img>
    <div className='about-text'>
      <h1>Életbiztosítás</h1>
      <h2>Kockázati</h2>
      <p>A gondosan megválasztott életbiztosítás alkalmas arra, hogy növelje biztonságunkat, és lehetőséget adjon az esetleges veszélyhelyzetek következményeinek megoldásához. A biztosítási esemény (élethelyzet) általában pénzben nem fejezhető ki, így a biztosító és a vele szerződő fél szabadon határozhatja meg a biztosítási összegét.</p>

      <h1>Befektetés</h1>
      <p>Az életbiztosítások manapság már aligha tekinthetőek kizárólag biztosításnak, jóval inkább befektetésnek. Az ügyfelek saját elképzeléseik alapján dönthetik el, hogy milyen célra szeretnének spórolni: saját jólétükre, nyugdíjuk kiegészítésére, egészségük megóvására, gyermekeik jövőjére.</p>

      <h1>Baleset</h1>
      <p>Egy baleset, amely személyi sérülést okoz, nem csupán lelki traumát, hanem nagy anyagi megterhelést jelent a károsultaknak és családjának.
        A balesetet megakadályozni nem tudjuk. A megfelelő kórházi ellátás biztosítása, az orvosi beavatkozások, szükség esetén a megfelelő egészségügyi kellékek beszerzése sokba kerül. Mindezek mellett egy családfő elvesztése, vagy munkaképtelenné válása tovább nehezíti a helyzetet. 
        A megnövekedett anyagi terhek, a kieső munkabér kiegészítésére szolgál a baleset biztosítás, amely előre pontosan kalkulálható évi néhány ezer forintért hathatós segítséget nyújt a hirtelen, váratlanul jelentkező százezres, akár milliós költségek megfizetésére az egész családnak.</p>
    

        <h1>Egészség</h1>
        <p>Az egészségbiztosítás az egészség megőrzéséhez és a betegségek elkerüléséhez nyújt olyan anyagi, szakmai és szervezési hátteret, amely segítségével a biztosított nyugodt körülmények között, korszerű és gyors gyógykezeléssel a lehető leghamarabb épül fel. Egészségbiztosítás használatával a biztosított egyszerre takarít meg időt és pénzt úgy, hogy magasabb színvonalú egészségügyi szolgáltatást kap.</p>
    </div>
   </div>
    </section>
    </>
  );
};

export default Life;
