import './ProdactTabs.scss';
import React from 'react';
import {useState} from 'react';

function ProdactTabs(props) {
    const [desc, setDes] = useState('');
    const [text, setText] = useState('hide');

    function Handler(event){

        let t = event.target;
        if(!t.classList.contains('prodact__tabs-item')){
            return true;
        }else{
            let allTabs = document.querySelectorAll('.prodact__tabs-item');
            for(let i = 0; i < allTabs.length; i++){
                allTabs[i].classList.remove('item-active');
                t.classList.add('item-active');
            }
        }

        if(t.getAttribute('data') === 'text'){
            setText('hide');
            setDes('');
        }else{
            setText('');
            setDes('hide');
        }

    }

    return (
        <div className="prodact__tabs" onClick={Handler}>
            <div className="prodact__tabs-wr">
                <div className="prodact__tabs-item  item-active" data='text'>Описание</div>
                <div className="prodact__tabs-item " data='back'>Возврат</div>
            </div>
            <div className="prodact__tabs-description">
                <div className={`prodact__tabs-text ${desc}`} data='text'>
                    <div className="prodact__tabs-title">
                        <h3>{`${props.goodsobj[props.articul].title} ${props.goodsobj[props.articul].subtitle}`}</h3>
                    </div>
                    <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga fugit corporis nostrum ex magni eveniet reiciendis debitis placeat dicta temporibus vel, aspernatur excepturi autem tempora, harum laborum. Incidunt, voluptate perferendis.
                    </p>
                </div> 
                <div className={`prodact__tabs-text ${text}`} data='back'>
                    <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga fugit corporis nostrum ex magni eveniet reiciendis debitis placeat dicta temporibus vel, aspernatur excepturi autem tempora, harum laborum. Incidunt, voluptate perferendis.
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga fugit corporis nostrum ex magni eveniet reiciendis debitis placeat dicta temporibus vel, aspernatur excepturi autem tempora, harum laborum. Incidunt, voluptate perferendis.
                    </p>
                </div>   
            </div>   
        </div>
    );
}
export default ProdactTabs;