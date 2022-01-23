import React from 'react';
// import { FaRegPlusSquare, FaRegMinusSquare} from "react-icons/fa";
import {FaTrashAlt} from "react-icons/fa";
function Order(props) {
    return (
        <li className='order__item'>
            <div className="order__left">
                <div className="order__img">
                    <img src={props.image} alt=""/>
                </div>
                <div className="order__left-inner">
                    <div className="order__name">
                        {props.name}
                    </div>
                    <div className="order__subtitle">
                        {props.subtitle}
                    </div>
                    <div className="order__size">
                        <span>Размер:</span>&nbsp;
                        {props.size}
                    </div>
                    <div className='order__count'>
                    <span>Количество:</span>&nbsp;
                        {props.count}
                    </div>
                </div>
            </div>
            <div className="order__right">
                <div className='order__sum'>{props.cost*props.count}</div>
                <button className="delete btn-reset cart__item-btn" data-t={props.data}><FaTrashAlt size='1em'/></button>
            </div>
        </li>
    );
}

export default Order;