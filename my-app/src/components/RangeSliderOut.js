import {useDispatch} from 'react-redux';
import {price} from '../app/goodsSlice';
import {useEffect} from 'react';
  function RangeSliderOut(props) {
    const dispatch = useDispatch();
   
    useEffect(() => {
      dispatch(price([props.textValue1, props.textValue2]));
    });
    
    
    return (
        <div className='renge-value'>
            <div className='renge-value__iteem'>{props.textValue1}</div>
            <div className='renge-value__item'>{props.textValue2}</div>
        </div>
    );
  }
  export default RangeSliderOut;