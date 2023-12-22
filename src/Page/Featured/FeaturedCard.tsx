
import {  useLocation, useNavigate } from "react-router-dom";
import { scroller } from "react-scroll";
import { useEffect } from "react";


const FeaturedCard = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleButtonClick = (elementId: any) => {
    navigate('products', { state: { scrollTarget: elementId } });
  };

  useEffect(() => {
    const scrollTarget = location.state?.scrollTarget;
    if (scrollTarget) {
      scroller.scrollTo(scrollTarget, {
        duration: 500,
        delay: 0,
        smooth: "easeInOutQuart",
      });
    }
  }, [location.state]);

  //   scroller.scrollTo(elementId, {
  //     duration: 500,
  //     delay: 0,
  //     smooth: "easeInOutQuart",
  //   });
  // };

  
  return (
    <>
      <div className='content grid5 mtop'>
      <div className="box">
        <img src="car (2).png" alt="" />
        <div id="car-section" className="button-sec"> 
            <button className="feature-button"  onClick={() => handleButtonClick('')}>
              Gépjármű biztosítás
            </button>
          </div>
       </div>
       <div className="box">
        <img src="health-insurance.png" alt="" />
        <div id="life" className="button-sec"> 
            <button className="feature-button"  onClick={() => handleButtonClick('life')}>
              Életbiztosítás
            </button>
          </div>
       </div>
       <div className="box">
        <img src="construction.png" alt="" />
        <div id="house" className="button-sec"> 
            <button className="feature-button" onClick={() => handleButtonClick('house')}>
              Lakás - és vagyon biztosítás
            </button>
          </div>
       </div>
       <div className="box">
        <img src="plane.png" alt="" />
        <div id="travel" className="button-sec"> 
            <button className="feature-button" onClick={() => handleButtonClick('travel')}>
              Utasbiztosítás
            </button>
          </div>
       </div>
       <div className="box">
        <img src="legal-hammer.png" alt="" />
        <div id="law" className="button-sec"> 
            <button className="feature-button" onClick={() => handleButtonClick('law')}>
              Jogvédelem
            </button>
          </div>
       </div>
      </div>
    </>
  )
}


export default FeaturedCard