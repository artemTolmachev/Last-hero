import './Contacts.scss';
import React from 'react';
import GalleryFacebook from '../Gallery/GalleryFacebook';
import { FaVk } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import {Link} from 'react-router-dom'; 
function Contacts() {
 
    return (
      <>
        <div className="contacts">
          <h1 className='contacts__title'>Контакты</h1>
          <div className="contacts__main">
            <div className="container">
              <div className="contacts__main-wr">
                  <div className="contacts__main-left">
                    <div className="contacts__data">
                        <div className="contacts__phone">
                          +38(097)2890266
                        </div>
                        <div className="contacts__address">
                          г.Мариуполь пр.Ленина 41
                        </div>
                        <div className='contacts__subtitle'>Отдел продаж</div>
                        <div className="contacts__phone">
                          +32(095)2890266
                        </div>
                        <div className="contacts__address">
                          г.Мариуполь пр.Ленина 47
                        </div>
                        <div className="contacts__social">
                          <Link className="vk" to="#">
                              <FaVk/>
                          </Link>
                          <Link className="insta" to="#">
                              <FaInstagram/>
                          </Link>
                        </div>
                    </div>
                </div>
                <div className="contacts__main-right">
                  <iframe title="ifr123" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2716.6982128914483!2d37.55286211481085!3d47.08538143183174!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40e6e45f3590a7eb%3A0xa3c4d86e05beb1e0!2z0JzQsNGA0LjRg9C_0L7Qu9GM!5e0!3m2!1sru!2sua!4v1642419575604!5m2!1sru!2sua"  loading="lazy" style={
                      {border: 0}
                    }></iframe>
                </div>
              </div>
            </div>   
          </div>
          <div className="container">    
            <div className="contacts__gallery">
              <div className="contacts__gallery-left">
                <div className="contacts__form">
                  <div className="contacts__form-head">
                    <h2>Есть вопросы?</h2>
                    <div className='contacts__form-address'>Заполните форму и наш менеджер свяжется с вами</div>
                  </div>
                  
                  <form action="" className='form'>
                    <div className='contacts__form-group'>
                      <input type="text"
                          name='Имя'
                          placeholder='Ваше имя'
                        />
                    </div>
                    <div className='contacts__form-group'>
                      <input type='tel' 
                          name='Телефон'
                          placeholder='+389999999999'
                        />
                    </div>
                    <button  className="btn-reset btn-primery contacts__submit">ОТПРАВИТЬ </button>
                  </form>
                </div>
              </div>
              <div className="contacts__gallery-right">
                <div className="contacts__gallery-inner">
                  <div className="contacts__gallery-logo">
                    <img src={process.env.PUBLIC_URL + `images/instagram_logo.png`} alt="" />
                  </div>
                  <GalleryFacebook/>
                </div>
              </div>
            </div>
          </div>
        </div>
        
      </>
    );
  }
  
  export default Contacts;