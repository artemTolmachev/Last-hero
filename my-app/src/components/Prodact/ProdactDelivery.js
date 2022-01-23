import './ProdactDelivery.scss';
import React from 'react';
import { FaTruck } from "react-icons/fa";
function ProdactDelivery(props) {
    return (
        <div className="prodact__delivery">
            <div className='prodact__delivery-in'>
                <FaTruck color='#444b584f' size='1.5em' className='deliv-icn' />
                <span>Доставка "Новой почтой"</span>
            </div>
            
            <p>
                Доставка в течение 3 дней (кроме государственных праздников).
            </p>
            <span>79&nbsp;<small>&#8372;</small></span>
        </div>
    );
}

export default ProdactDelivery;