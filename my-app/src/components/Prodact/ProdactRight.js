import './ProdactRight.scss';
import React, {useState} from 'react';
import { FaMinus, FaPlus} from "react-icons/fa";
import { useDispatch } from 'react-redux';
import {
    incriment
  } from '../../app/cartSlice';
  import {addC} from '../../app/taskReduserSlice';

function ProdactRight(props) {
    const[value, setValue] = useState(1);
    const[checked, setChecked] = useState('');
    const dispatch = useDispatch();

    function ChangeValue(event){
        if(event.target.value !== ''){
            setValue(event.target.value)
        }else if(event.target.className === 'add prodact__btn'){
            setValue(+value + 1)
        }else if(event.target.className === 'minus prodact__btn'){
            if(+value > 1){
                setValue(+value - 1)
            }else{
                setValue( 1)
            }
        }
    }

   let  checkHendler = (event) =>{
        let t = event.target;
        if(!t.classList.contains('prodact__block')) return true;
        // console.log(t.getAttribute('data'))
        setChecked(t.getAttribute('data'))
    }

    function AddCard(event){
        // let cartObject = [checked,{'articul': props.articul,'count': value}]
            let cartObject =  {
                'articul': props.articul,
                'count': value,
                'size': checked
            }

            if(checked !== ''){
                dispatch(incriment(cartObject));
                dispatch(addC(true));
            }else{
                alert('ВЫБРАТЬ РАЗМЕР')
            }
        }
    return (    
        <>
            <div className="prodact__right">
                <h1 className="prodact__title">
                    {props.goodsobj[props.articul].title}
                </h1>
                <h2 className="prodact__subtitle">
                    {props.goodsobj[props.articul].subtitle}
                </h2>
                <div className="prodact__cost">
                    {props.goodsobj[props.articul].cost}&nbsp;<small>&#8372;</small>
                </div>
                <div className="prodact__color">
                    <span>Цвет:</span>&nbsp;&nbsp;
                    {props.goodsobj[props.articul].color}
                </div>
                <div className='prodact__size'>
                    <span>Размер:</span>
                    <div className="prodact__size-block" onClick={checkHendler}>
                        {Object.keys(props.goodsobj[props.articul].size).map(item => 
                            <div key={item} className={`prodact__block ${item === checked ? 'checked' : ''}  ${+props.goodsobj[props.articul].size[item] === 0 ? 'prodact__hide' : ''}`} data={item}>{item}</div>
                        )}
                    </div>
                </div>
                <div className="prodact__quantity">
                    <label htmlFor="quantity">Количество:</label>
                    <button onClick={ChangeValue} className="add prodact__btn" data-t={props.articul}><FaPlus/></button>
                    <input onChange={ChangeValue} className='prodact__input' type="number" value={value} min='1' name='quantity'/>
                    <button onClick={ChangeValue} className="minus prodact__btn" data-t={props.articul}><FaMinus/></button>
                </div>
                <button onClick={AddCard} className="prodact__btn-cart btn-reset" data-t={props.articul}>Добавить в корзину</button>
            </div>
        </>
    );
}

export default ProdactRight;