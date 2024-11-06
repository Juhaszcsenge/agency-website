import React, { useEffect } from 'react'
import { useState } from 'react';
import './TopButton.css'

const BackToTopButton = () => {
    const [ backToTopButton, setBackToTopButton] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if(window.scrollY > 100) {
                setBackToTopButton(true)
            }
            else{
               setBackToTopButton(false) 
            }
        })
      
    }, []);

    const scrollUp = () => {
        window.scrollTo({
            top: 0, 
            behavior: "smooth"
        })
    }
  return (
    <div className='backToButton'>
        {backToTopButton && (
            <button className="top" onClick={scrollUp}
                >^
            </button>
           
        )}
       
    </div>
  )
}

export default BackToTopButton