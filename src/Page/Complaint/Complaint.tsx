import React from 'react';
import Footer from '../../Component/Footer/Footer';
import Hero from '../Hero/Hero';
import Heading from '../Heading';
import './complaint.css'
import Header2 from '../../Component/Header2';
import BackToTopButton from '../BackToButton';

const Complaint = () => {
  return (
    <>
    <Header2/>
    <Hero/>
   <section className='complaint'>
    <div>
        <div>
            <Heading title='Ügyfél Panaszkezelés, rendje és lehetőségei' subtitle=''/>
            <p>Tisztelt Ügyfeleink! Kérjük, hogy a társaságunk és munkatársaink tevékenysége, munkavégzése során tapasztalt, vagy vélt problémákat, mulasztásokat, 
                negatív értékítéletet, észrevételeket osszák meg velünk. 
                Azok kiküszöbölésével, javítsuk munkánkat, együttműködésünkkel növelve ügyfeleink elégedettségét!
            </p>
            <ul>
                <li className='complaint-li'> Észrevételével, panaszával, kritikájával első sorban fordulhat az Ön ügyében eljáró 
                munkatársunkhoz, szóban (személyesen vagy telefonon) irodáinkban, írásban (postai úton, telefaxon, elektronikus levélben).</li><br></br>
                <li className='complaint-li'> Ha felvetett ügye az Ön számára nem megnyugtató módon záródik le, vagy annak megoldásában üzletkötőnk nem tud segítségére lenni, akkor fordulhat cégünk irodavezetőjéhez 
                személyesen vagy telefonon 0620-423 88 89. (Irodáink címe, elérhetősége naprakészen megtalálható a www.flowersanddaniel.hu )</li><br></br>
                <li className='complaint-li'>Amennyiben irodavezetőnk sem rendelkezik az Ön ügyének megoldásához szükséges információval, jogkörrel vagy lehetőséggel, úgy telefonon, faxon, levélben, e-mailben vagy személyesen az Ön rendelkezésére áll a cég ügyvezetője: Virág László 0672-511-111 telefonszámon hétfőtől-péntekig 9.00 -17.00-ig, a 0672-211-246 fax számon folyamatosan, a flowers@fuggetlenalkusz.hu e-mail címen vagy cégünk székhelyén személyesen, levélben vagy írásba tudja elérni. Postacím: 7626 Pécs, Major u. 9. Flowers & Daniel Kft.
                </li><br></br>
            </ul>

            <p>   Panaszával fordulhat az illetékes megyei Fogyasztóvédelmi Felügyelőséghez, megyei 
            Békéltető testülethez (7625 Pécs Majorossy I. u. 36., 0672-507-154,bekelteto@pbkik.hu) Partner Biztosító Társaságainkhoz, és a Pénzügyi Szervezetek Állami Felügyeletéhez is.</p>
        </div>
        <div>
            <Heading title='A Flowers & Daniel Biztosítási Alkusz és Tanácsadó Kft' subtitle=' (székhely: H Magyarország, 7626 Pécs, Major u 9.,Cg.: 02-09-068313, adószám:12909755-1-02 ) a  2003. évi LX tv. 37 §-nak megfelelően tájékoztatja ügyfelét:'/>
            <ul>
                <li className='complaint-li'>
                A Flowers & Daniel Kft. a Pénzügyi Szervezetek Állami Felügyeletének (PSZÁF) engedélye alapján, és annak ellenőrzése alatt dolgozik. Engedély száma: II-586/2002  (PSZÁF 1013 Budapest, Krisztina krt. 39.). A PSZÁF a társaságunk szakmai felügyeletét is ellátja és esetleges panaszával is ide fordulhat.
                </li><br></br>
                <li className='complaint-li'>Flowers & Daniel Kft. független biztosításközvetítőként tevékenykedik. A társaság cégszerű jegyzésére ügyvezetője jogosult: Virág László.</li><br></br>
                <li className='complaint-li'>Flowers & Daniel Kft. rendelkezik szakmai felelősségbiztosítással, amely Megbízóink érdekeit védi, és emeli az általunk nyújtott szolgáltatások biztonságát. A cégünk, vagy annak munkatársa által elkövetett szakmai hiba által okozott kár megtérítését a károsult kérheti társaságunktól, vagy társaságunk felelősségbiztosítójától. 
                    Felelősség biztosításunkat az Allianz-Hungária Biztosító Zrt kezeli. Kötvényszám: 247002328</li><br></br>
            </ul>
        </div>
    </div>
   </section>
   <BackToTopButton/>
   <Footer/>
   </>
  );
}

export default Complaint;
