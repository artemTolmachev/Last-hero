import '../components/Goods.scss';
import {selectDeng} from '../app/goodsSlice';
import { useSelector } from 'react-redux';
import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom'; 

function Goods(props) {
  const ObjDeng = useSelector(selectDeng);
  const [x, setX] = useState(true);

  useEffect(() => {
      Object.keys(ObjDeng).forEach(item => {
        if(props.gender === item){
           setX(ObjDeng[item]);
        }    
      })
  });

  let sizen = Object.keys(props.size).filter(el => props.size[el] > 0);
      return (
        <>
          <Link  to={`/${props.articul}`} className={x ? 'goods__card' : 'hide'} data-c={props.gender} data-key={props.articul}>
            <img src={props.image} alt="фото кросовок"/>
            <div className="goods__card-items">
              <span className='goods__card-title'>{props.title}</span>
              <div className='goods__card-subtitle'>{props.subtitle}</div>
              <p className='goods__card-size'>{sizen.join(', ')}</p>
              <div className='goods__card-cost'>{props.cost}&nbsp;<small>&#8372;</small></div>
            </div>
          </Link>
        </>
      );
    }
    export default Goods;