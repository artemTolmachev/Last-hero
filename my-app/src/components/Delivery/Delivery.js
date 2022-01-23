import React from 'react';
import './Delivery.scss';
import { MdMailOutline } from "react-icons/md";
function Delivery() {
    return (
      <div className="delivery">
        <div className="container">
          <div className="delivery__title-wr">
            <h1 className='delivery__title'>Отделение Новая Почта</h1>
            <div className='delivery__logo'>
              <img src={process.env.PUBLIC_URL + `images/DeliveryIcon/Nova.png`}  alt="Логотип Нова Пошта"/>
            </div>
          </div>
          <div className="delivery__text">
              <p>Оплата производится наличными средствами/банковской картой в Отделении Новая Почта, либо online во время оформления заказа.</p>

              <p>Осмотр товара и отказ от посылки согласно действующим правилам Новой Почты.</p>

              <p>Стоимость доставки в Отделение Новая Почта - 79 грн.</p>

              <p>При заказе от 1300 грн - доставка бесплатная.</p>

              <p>Пожалуйста, обратите внимание, доставка всех заказов осуществляется международной почтово-логистической компанией Міст Експрес. После прибытия заказа в Украину, посылка передается компании Новая Почта на доставку в её отделения (при условии выбора Новая Почта в качестве формы доставки Вашего заказа).</p>
          </div>
        
          <div className="delivery__news-letter">
            <div className="delivery__news-left">
              <div className="delivery__market">
                <div className='delivery__market-title'>
                    <p>-15%* на&nbsp;первую
                      покупку за
                      подписку на
                      рассылку</p>
                  </div>
                  <div className='delivery__news-desc'>
                    <p>Подписывайтесь на&nbsp;рассылку и&nbsp;получайте
                    скидку на&nbsp;покупки</p>
                  </div>
              </div>
            </div>
            <div className="delivery__news-right">
              <div className="delivery__news-form">
                  <div className="delivery__form-groop">
                    <MdMailOutline size='2em'/>
                    <input type="email" name='email' id='email' placeholder='Ввести email' required/>
                  </div>
                  <button className='btn-reset btn-delivery'>ОТПРАВИТЬ</button>
                </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  export default Delivery;