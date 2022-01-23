
import React from 'react';
import { useLocation } from "react-router";
import Prodact from './Prodact';

function ProdactList({goodsObj, cart}) {

    const id = useLocation('/');
    let idName = id.pathname.split('');
    idName.shift();
    let articul = idName.join('');

   
    return(
        <div className="prodact">
            <Prodact cart={cart} goodsobj={goodsObj} articul={articul} />
        </div>
    );
}

export default ProdactList;