import './About.scss';
import React from "react";
import HeroSpring from './HeroSpring';


function About() {

    return (
      <>
         <div className="about">
           <div className="container">
            <div className="about__hero">
              <h1 className='about__title'>О нас</h1>
              <h2>Маленькие мечты и грандиозные планы</h2>
              <p>
                  С 2005 года мы воплощаем маленькие мечты и грандиозные планы миллионов людей.
                  Мы продаем по справедливой цене и предоставляем гарантию, так как считаем, что онлайн-шопинг должен быть максимально удобным и безопасным.
                  И каждый раз, когда кто-то нажимает «Купить», мы понимаем, что делаем нужное дело.
              </p>
            </div>
            <div className="about__logo">
              <HeroSpring/>
            </div>
           </div>
           <div className="about__content">
                <div className="about__content-text">
                    <p>
                      Спорт держит нас в форме. Учит дисциплине. Объединяет нас. Через спорт мы можем менять жизни. В том числе с помощью воодушевляющих историй спортсменов. Чтобы помочь тебе подняться и двигаться вперед. 
                      <span>&mdash; Last Hero</span>
                    </p>
                </div>
                <div className="about__decor img-1">
                  <img src={process.env.PUBLIC_URL + `images/About-images/Ellipse 4.png`} alt="декор"/>
                </div>
                <div className="about__decor img-2">
                  <img src={process.env.PUBLIC_URL + `images/About-images/Ellipse 5.png`} alt="декор"/>
                </div>
                <div className="about-img">
                      <img src={process.env.PUBLIC_URL + `images/About-images/about-img.jpg`} alt="фото человека"/>
                  </div>
             </div>
         </div>
      </>
    );
  }
  
  export default About;
