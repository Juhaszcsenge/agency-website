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
          <h2>Hatalmas segítséget nyújtott nekem a mentális és érzelmi egészségem javításában. A pszichológusom türelmes és empátiával kezelte a problémáimat, és segített nekem felfedezni olyan megoldásokat és stratégiákat, amelyekkel kezelni tudtam a stresszt és a nehéz élethelyzeteket. A rendszeres terápia során sikerült mélyebben megértenem saját érzéseimet és gondolataimat, és ezáltal jobban képes vagyok kezelni az élet kihívásait.</h2><br/>
            <h4>-Kis Károly, 45 éves</h4>
      </div>

        <div>
          <h2>Kezdetben úgy éreztem, hogy egyedül nem tudom kezelni azokat az érzelmi nehézségeket és stresszt, amelyekkel szembenéztem. A pszichológusom segített nekem kibontakoztatni és megérteni a mélyen gyökerező problémáimat, és közösen dolgoztunk azok megoldásán. Az idővel tanult technikákat és stratégiákat használva sikerült megtanulnom kezelni a szorongást és a depressziót.</h2><br/>
            <h4>-Nagy Anna, 20 éves</h4>
      </div>

        <div>
          <h2>Az évek során felhalmozódott stressz és a belső konfliktusok miatt úgy éreztem, hogy elakadtam az életben. A pszichológusom rendkívül képzett és empátiával teli volt. Részletesen meghallgatta a problémáimat, és segített feltárni olyan gondolatokat és érzéseket, amelyekre korábban nem is gondoltam.Az egyéni terápia során olyan eszközöket és stratégiákat tanultam, amelyek segítettek kezelni a stresszt és a szorongást.</h2><br/>
            <h4>-Tarlós István, 74 éves</h4>
        </div>
      </Carousel>
    </div>  
      </section>
     
    </>
  )
}

export default SecondHero