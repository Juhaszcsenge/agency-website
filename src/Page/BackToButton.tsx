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
            <button 
            style={{
                position: "fixed", 
                bottom: "70px", 
                right:"10px", 
                height:"50px", 
                width:"50px", 
                marginLeft: "10px",
                fontSize:"35px",
                borderRadius:"5px",
                borderColor: "rgba(0,0,0,0)",
                backgroundColor: "#967375",
                color:"white",
                opacity: "24px", 
                paddingTop: "-15px",
                // zIndex: 2, 
                zIndex: 99999,
                textAlign: "center"
            }}
            onClick={scrollUp}
                >^
            </button>
           
        )}
       
    </div>
  )
}

export default BackToTopButton