import "./secondHero.css"
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';





const SecondHero = () => {

  return (
    <>
      <section className='idezet'>
        <div id='carousel' className='container' style={{marginTop:"20px"}}>
      <Carousel showArrows={true} autoPlay={true} infiniteLoop={true} showThumbs={false} showIndicators={false} showStatus={false}>

        <div>
        <h2>A szolgáltatásukkal kapcsolatban maximálisan elégedett vagyok. Az ügyintézésük gyors és rendkívül precíz volt, minden részletre odafigyelve.  Korrekt és átlátható tájékoztatást kaptam tőlük.
           Nagyon örülök, hogy velük dolgozhattam, és bátran ajánlom másoknak is szolgáltatásaikat.</h2><br/>
            {/* <h4>-Kis Károly, 45 éves</h4> */}
      </div>

        <div>
          <h2>Nagyon kedves és udvarias volt a hozzáállásuk, és a tájékoztatásuk is rendkívül szakszerű volt. Úgy éreztem, hogy minden kérdésemre kimerítő és érthető választ kaptam tőlük. 
            A hozzáértésüket és barátságos hozzáállásukat külön kiemelném, mivel ez sokat jelentett számomra az ügyintézés folyamán. Mindenben segítőkészek és rugalmasak voltak, és ezért hálás vagyok nekik.
             Kiváló szolgáltatás és támogatás!</h2><br/>
            {/* <h4>-Nagy Anna, 20 éves</h4> */}
      </div>

        <div>
          <h2>Az ügymenetük rendkívül gyors és könnyen kezelhető. Az egész folyamat során rendkívül elégedett voltam a sebességükkel és a könnyed kezelhetőségükkel. 
            Azt éreztem, hogy az ügyeimmel való foglalkozásuk során minden lépésben kiválóan eligazodnak, és az egész folyamat gördülékeny volt. Összességében maximálisan elégedett vagyok!</h2><br/>
            {/* <h4>-Tarlós István, 74 éves</h4> */}
        </div>
      </Carousel>
    </div>  
      </section>
     
    </>
  )
}

export default SecondHero