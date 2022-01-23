import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../../components/Swiper/Swiper.scss';


export default function Swipe(props) {

        let settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
          };
          return (
            <Slider {...settings}>
             
     
            </Slider>
          );
}

