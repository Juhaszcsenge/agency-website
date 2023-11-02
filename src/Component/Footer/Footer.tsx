import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer>
      <div className='container'>
        <div className='box'>
          <ul>
            <li>Cégünk törzstőkéje: 5 000 000.- forint</li>
            <li>Cég elnevezése: Flowers & Daniel Biztosítási Alkusz és Tanácsadó Kft.</li>
            <li>Rövid elnevezés: Flowers & Daniel Kft.</li>
            <li>Alapítás dátuma: 2002.09.25</li>
            <li>Ügyvezető: Virág László</li>
          </ul>
        </div>
        <div className='box'>
          <ul>
            <li>PSZÁF engedély száma: 586 / 2002</li>
            <li>Adószám: 12909755-2-02</li>
            <li>Székhely: 7626 Pécs Major u. 9.</li>
            <li>Iroda 1: 7626 Pécs Major u. 9.</li>
            <li>Iroda 2: 7800 Siklós Szent István tér 8. KÉK SELLŐ ÜZLETHÁZ</li>
          </ul>
        </div>
        <div className='box'>
          <ul>
            <li>Adószám: 12909755-2-02</li>
            <li>Székhely: 7626 Pécs Major u. 9.</li>
            <li>Levelezési cím: 7626 Pécs Major u. 9.</li>
            <li>Irodai Mobil: 20 / 423 88 89</li>
            <li>Telefon: 72 / 511 111, Fax: 72 / 211 246</li>
          </ul>
        </div>
      </div>
      <center>
            <div>
              <br />
              <a style={{color:"grey"}} href="http://www.flowersanddaniel.hu/assets/adatkezelesi_tajekoztato.pdf">Adatkezelési tájékoztató</a>
              </div>
              </center>
      <div className='legal'>
        <span>© 2023 By Juhász Csenge.</span>
      </div>
    </footer>
  );
};

export default Footer;
