import './CartIcon.scss';
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useSelector } from 'react-redux';
import {
  selectCart
} from '../app/cartSlice';

function CartIcon() {

  const cart = useSelector(selectCart);

  let sum = Object.keys(cart).map(item => { return cart[item].count}).reduce((a, b) => a + b, 0) //получаем масив значений объекта
    return (
      <>
        <div className="cart header__cart">
            <AiOutlineShoppingCart size='1.5em' color='white'/>
          <div className="cart__caunt">{sum}</div>
        </div>
      </>
    );
  }
  
  export default CartIcon;