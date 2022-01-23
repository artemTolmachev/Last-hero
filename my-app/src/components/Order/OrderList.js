import '../Order/Order.scss';

import { useSelector, useDispatch } from 'react-redux';
import React from 'react';
import Order from './Order';
import {selectGoods} from '../../app/goodsSlice';
import {
    selectCart,
    del
  } from '../../app/cartSlice';
import {Link} from 'react-router-dom'; 
import OrderForm from './OrderForm';

function OrderList(props) {
    const goods = useSelector(selectGoods);
    const cart = useSelector(selectCart);
    const dispatch = useDispatch();

    const goodsObj = goods.reduce((accum, item) => {
        accum[item['articul']] = item;
        return accum;
      },{});

      let sum = Object.keys(cart).map(item => { return cart[item].count}).reduce((a, b) => a + b, 0)

      let ClickHendler = (event) => {
        let t = event.target;
        if(!t.classList.contains('delete')) return true;

        if(t.classList.contains('delete')){
          dispatch(del(t.getAttribute('data-t')));
        }
      }

      let sumItem = Object.keys(cart).map(item => {
        const newObj = goodsObj[cart[item][0]].cost*cart[item].count;
        return newObj;
      });

      let genSum = sumItem.reduce((accum, item) => accum + item, 0);



    return (
        <div className='order' onClick={ClickHendler}>
          <div className="container">
            <div className="order__hero">
              <Link className='order__back' to="/">
                  На главную
              </Link>
              <div className={Object.keys(cart).length > 0 ? 'order__massenger hide' : 'order__massenger'}>Ваша корзина пуста. Перед отправкой заказа добавьте в корзину хотя бы один товар.</div>
            </div>
            <div className="order__title-wrraper">
              <h2 className='order__title'>Оформить заказ</h2>
            </div>
            <div className="order__content">
            <div className="order__sum-label">Товаров в заказе:&nbsp;&nbsp;<span>{sum}</span></div>
              <div className="order__sum-label">Общая сумма заказа:&nbsp;&nbsp;<span>{genSum}</span></div>
              <ul className="order__list">
                    {Object.keys(cart).map(item => <Order image={goodsObj[cart[item][0]]['image']} name={goodsObj[cart[item][0]]['title']} subtitle={goodsObj[cart[item][0]]['subtitle']}  cost={goodsObj[cart[item][0]]['cost']}
                  data={item} count={cart[item].count} key={item} size={cart[item].size}/>)}
                </ul>
                <OrderForm  cart={cart} goodsObj={goodsObj}/>
            </div>
          </div>
        </div>
    );
}
export default OrderList;