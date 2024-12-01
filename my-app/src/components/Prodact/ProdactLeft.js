import React, { useEffect, useRef } from 'react';
import './ProdactLeft.scss';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


function ProdactLeft(props) {
    const refMain = useRef();
    const refMinImg = useRef();
    const objectSmallImg = props.goodsobj[props.articul].image_s;
    const objectLargeImg = props.goodsobj[props.articul].image;


    function activeClass(allClass) {
        for (let i = 0; i < allClass.length; i++) {
            if (allClass[i].children[0].src === refMain.current.childNodes[0].src) {
                allClass[i].classList.add('active')
            }
        }
    }

    useEffect(() => {
        let allClass = document.querySelectorAll('.prodact__img-min');
        activeClass(allClass);
    })

    function HandlerChange(event) {
        event = event || window.event;
        let t = event.target;
        const dataMinValue = event.target.getAttribute('data-min');


        if (t.parentNode.classList.contains('prodact__img-min')) {
            let allClass = document.querySelectorAll('.prodact__img-min');
            for (let i = 0; i < allClass.length; i++) {
                allClass[i].classList.remove('active');
            }
        }
       
        objectLargeImg.forEach(element => {
            if(dataMinValue === element.id){
                refMain.current.children[0].src = element.url; 
            }
        });

        //main img ровняется img по которому кликнули
        let perentElement = t.parentNode;
        perentElement.classList.add('active');
    }

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
                        {objectSmallImg.map(item =>
                            <li className="prodact__img-min" key={item.id}>
                                <img 
                                onClick={HandlerChange} 
                                src={item.url} 
                                data-min={item.id} 
                                ref={refMinImg}
                                alt="Кросовки найк" />
                            </li>
                        )}
                    </ul>
                    <div className="prodact__img-main" ref={refMain}>
                        <img src={objectLargeImg[0].url} alt="Кросовки найк" />
                    </div>
                </div>
                <div className="prodact__mob-slider">
                    <Slider {...settings}>
                        {objectLargeImg.map(item => (
                            <div className="prodact__img" key={item.id}>
                                  <img src="/image-catalog/Air-Max-270-React-2-Mens-1.jpg" alt="Кросовки найк" />
                            </div>
                        ))}
                    </Slider>
                </div>

            </div>
        </>
    );
}
export default ProdactLeft;