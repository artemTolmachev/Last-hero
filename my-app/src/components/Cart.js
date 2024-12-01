import './Cart.scss';
import {FaTrashAlt} from "react-icons/fa";
import React from "react"
import { FaMinus, FaPlus } from "react-icons/fa";
function Cart(props) {

    return (
      <>
        <li className="cart__item" >
          <div className="cart__item-left"  >
            <div className="cart__item-img" >
              <img src={props.image} alt=""/>
            </div>
            <div className="cart-items">
              <div className='cart__item-title'>{props.title}</div>
              <div className='cart__item-subtitle'>{props.subtitle}</div>
              <div className='cart__item-size'><span>Размер:</span>&nbsp;{props.size}</div>
              <div className='cart__item-cost'>{props.cost}&nbsp;<small>&#8372;</small></div>
            </div>
          </div>
          <div className="cart__item-right">
            <button className="add btn-reset cart__item-btn" data-t={props.data}><FaPlus size='1em'/></button>
            <div className='cart__item-count'>{props.count}</div>
            <button className="minus btn-reset cart__item-btn" data-t={props.data}><FaMinus size='1em'/></button>
            <div className='cart__item-sum'>{props.cost*props.count}&nbsp;<small>&#8372;</small></div>
            <button className="delete btn-reset cart__item-btn" data-t={props.data}><FaTrashAlt size='1em'/></button>
          </div>
        </li>
      </>
    );
  }
  
  export default Cart;