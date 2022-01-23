import React from 'react';
import '../Hero/Hero.scss';
import Slider from 'react-slick';
import SpringR from '../Spring/SpringR';
import SpringT from '../Spring/SpringT';
import SpringS from '../Spring/SpringS';
import SpringA from '../Spring/SpringA';
import SpringK from '../Spring/SpringK';
import SpringD from '../Spring/SpringD';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {useState} from 'react';

function Hero(event) {

  const [passR, setPassR] = useState(true);
  const [passT, setPassT] = useState(false);
  const [passS, setPassS] = useState(false);
  const [passA, setPassA] = useState(false);
  const [passK, setPassK] = useState(false);
  const [passD, setPassD] = useState(false);

  let settings = {
    className: "slider variable-width",
    dots: true,
    navigation: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,

    afterChange: function(index) {
     index !== 0 ? setPassR(false) : setPassR(true)
     index !== 1 ? setPassT(false) : setPassT(true)
     index !== 2 ? setPassS(false) : setPassS(true)
     index !== 3 ? setPassA(false) : setPassA(true)
     index !== 4 ? setPassK(false) : setPassK(true)
     index !== 5 ? setPassD(false) : setPassD(true)
    
    }
  }; 

    return (
      <>
        <div className="hero">
            <div className="hero__container">
              <div className="hero__slider">
                <Slider {...settings}>


                  <div className='slide'>
                    <div className="slide__animation-container">
                      <div className="slide__animation-left">
                        <SpringR open={passR}/>
                      </div>
                      <div className="slide__animation-right">
                          <img src={process.env.PUBLIC_URL + `images/img-scetchers/scetchers1.png`} alt="Кроссовки"/>
                      </div>
                    </div>
                    <img className='slide-img' src='https://i.ibb.co/rFhCf0Y/background1.jpg' alt="фон"/>
                  </div> 


                  <div className='slide'>
                    <div className="slide__animation-container">
                      <div className="slide__animation-left">
                          <SpringT open={passT}/>
                      </div>
                      <div className="slide__animation-right">
                          <img src={process.env.PUBLIC_URL + `images/img-scetchers/scetchers2.png`} alt="Кроссовки"/>
                      </div>
                    </div>
                    <img className='slide-img' src='https://i.ibb.co/N9N3dyR/background2.jpg' alt="фон"/>
                  </div> 

                 

                  <div className='slide'>
                    <div className="slide__animation-container">
                      <div className="slide__animation-left">
                          <SpringS open={passS}/>
                      </div>
                      <div className="slide__animation-right">
                          <img src={process.env.PUBLIC_URL + `images/img-scetchers/scetchers3.png`} alt="Кроссовки"/>
                      </div>
                    </div>
                    <img className='slide-img' src='https://i.ibb.co/rxvXxjf/background3.jpg' alt="фон"/>
                  </div>



                  <div className='slide'>
                    <div className="slide__animation-container">
                      <div className="slide__animation-left">
                          <SpringA open={passA}/>
                      </div>
                      <div className="slide__animation-right">
                          <img src={process.env.PUBLIC_URL + `images/img-scetchers/scetchers4.png`} alt="Кроссовки"/>
                      </div>
                    </div>
                    <img className='slide-img' src='https://i.ibb.co/T1L0fXY/background4.jpg' alt="фон"/>
                  </div>
                



                  <div className='slide'>
                    <div className="slide__animation-container">
                      <div className="slide__animation-left">
                        <SpringK open={passK}/>
                      </div>
                      <div className="slide__animation-right">
                          <img src={process.env.PUBLIC_URL + `images/img-scetchers/scetchers5.png`} alt="Кроссовки"/>
                      </div>
                    </div>
                    <img className='slide-img' src='https://i.ibb.co/vZ1nVKw/background5.jpg' alt="фон"/>
                  </div>


                  <div className='slide'>
                    <div className="slide__animation-container">
                      <div className="slide__animation-left">
                          <SpringD open={passD}/>
                      </div>
                      <div className="slide__animation-right">
                          <img src={process.env.PUBLIC_URL + `images/img-scetchers/scetchers6.png`} alt="Кроссовки"/>
                      </div>
                    </div>
                    <img className='slide-img' src='https://i.ibb.co/svwkj4j/background6.jpg' alt="фон"/>
                  </div> 
                </Slider>  
              </div>
            </div>
          </div>
      </>
    );
  }
  export default Hero;