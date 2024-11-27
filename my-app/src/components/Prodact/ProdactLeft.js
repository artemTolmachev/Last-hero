import React, { useEffect, useRef } from 'react';
import './ProdactLeft.scss';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


function ProdactLeft(props) {
    const refMain = useRef();

    function activeClass(allClass){
        for(let i = 0; i < allClass.length; i++){
            if(allClass[i].children[0].src === refMain.current.childNodes[0].src){
                allClass[i].classList.add('active')
            }
        }
    }
    useEffect(()=>{
        let allClass = document.querySelectorAll('.prodact__img-min');
        activeClass(allClass);
    })

    function HandlerChange(event){
        event = event || window.event;
        let t = event.target;
        if(t.parentNode.classList.contains('prodact__img-min')){
            let allClass = document.querySelectorAll('.prodact__img-min');
            for(let i = 0; i < allClass.length; i++){
                allClass[i].classList.remove('active');
            }
        }
        refMain.current.children[0].src = t.src; //main img ровняется img по которому кликнули
        let perentElement = t.parentNode;
        perentElement.classList.add('active');
    }


    let ObjectImage = [];
    Object.values(props.goodsobj[props.articul]).forEach(item => {
        if(/^https/.test(item)){
            ObjectImage.push(item)
        }
    })

 let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

    return (
        <>
            <div className="prodact__left-container">
                <div className="prodact__left">
                    <ul className="prodact__left-list">
                    {ObjectImage.map(item => 
                            <li className="prodact__img-min" key={item}>
                                <img onClick={HandlerChange} src={item} alt="Кросовки найк" />
                            </li> 
                        )}
                    </ul>
                    <div className="prodact__img-main" ref={refMain}>
                        <img src={props.goodsobj[props.articul].image}  alt="Кросовки найк"/>
                    </div>
                </div>
                <div className="prodact__mob-slider">
                    <Slider {...settings} >
                        {ObjectImage.map(item => 
                                <div className="prodact__img" key={item}>
                                    <img src={item}  alt="Кросовки найк"/>
                                </div>
                            )}
                    </Slider>
                </div>
              
            </div>
        </>
    );
}
export default ProdactLeft;