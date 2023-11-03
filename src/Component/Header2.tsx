import React, { useState } from "react";
import { BiSearch } from "react-icons/bi";
import { BsPerson } from "react-icons/bs";
import { HiOutlineMenuAlt4 } from 'react-icons/hi'
import { FaFacebook, FaInstagram, FaPinterest, FaTwitter, FaYoutube } from 'react-icons/fa'
import './Header.css'
import { AiOutlineClose } from 'react-icons/ai';
import { Link } from 'react-scroll';
import { Navigate, useNavigate } from "react-router-dom";

function Navbar() {
    const [nav, setNav] = useState(false)
    const handleNav = () => setNav(!nav)
    const navigate = useNavigate();
  return (
    <div id='home' className={nav ? 'navbar navbar-bg' : 'navbar'}>
    <div className={nav ? 'logo dark' : 'logo'}>
        {/* <h2>Mazányi Judit</h2> */}
        {/* <img src="ic4.jpg" style={{height:"50px"}}/> */}
      </div>
      <ul className="nav-menu">
      <Link to='/' onClick={() => navigate('/')}><li>Főoldal</li></Link>
      {/* <Link to='/products' onClick={() => navigate('/products')}><li>Termékeink</li></Link> */}
      <Link to='/complaint' onClick={() => navigate('/complaint')}><li>Panaszkezelés</li></Link>
      </ul>
    
      <div className="hamburger" onClick={handleNav}>
      {!nav ? (<HiOutlineMenuAlt4 className='icon' />) : (<AiOutlineClose style={{ color: '#000' }} className='icon' />)}
      </div>

      <div className={nav ? 'mobile-menu active' : 'mobile-menu'}>
        <ul className="mobile-nav">
        <Link to='/' onClick={() => navigate('/')}><li>Főoldal</li></Link>
      {/* <Link to='/products' onClick={() => navigate('/products')}><li>Termékeink</li></Link> */}
      <Link to='/complaint' onClick={() => navigate('/complaint')}><li>Panaszkezelés</li></Link>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;