import '../components/Cart.scss';
import {Link} from 'react-router-dom'; 
import { useDispatch, useSelector } from 'react-redux';
import Cart from '../components/Cart';
import {
  selectCart,
  minus,
  add,
  del
} from '../app/cartSlice';
import {selectGoods} from '../app/goodsSlice';
import mainLogo from'../image/shopping-cart.png';
import {addC} from '../app/taskReduserSlice';

function CartList() {
  const goods = useSelector(selectGoods);
  const cart = useSelector(selectCart);
  const dispatch = useDispatch();

  const goodsObj = goods.reduce((accum, item) => {
    accum[item['articul']] = item;
    return accum;
  },{});
 
 
  let sumItem = Object.keys(cart).map(item => {
    const newObj = goodsObj[cart[item][0]].cost*cart[item].count;
    return newObj;
  });

  let genSum = sumItem.reduce((accum, item) => accum + item, 0);
  let sum = Object.keys(cart).map(item => { return cart[item].count}).reduce((a, b) => a + b, 0)

  let ClickHendler = (event) => {//reduce((a, b) => a + b, 0)}
    let t = event.target;
   
    if(!t.classList.contains('minus') && !t.classList.contains('add') && !t.classList.contains('delete')) return true;
    if(t.classList.contains('minus')){
      dispatch(minus(t.getAttribute('data-t')));
    }else if(t.classList.contains('add')){
      dispatch(add(t.getAttribute('data-t')));
    }else if(t.classList.contains('delete')){
      dispatch(del(t.getAttribute('data-t')));
    }
  }

  let hendler = () => {
    dispatch(addC(false));
  }

      return (
        <>
          <div className="cart" onClick={ClickHendler}>
            <div className="cart__title-wrap">
                <h3 className="cart__title">Корзина</h3>
            </div>
            <div className="cart__inner">
              <div className={sum ? 'cart__background hidde' : 'cart__background'}><img src={mainLogo} alt=""/></div>
              <ul className="cart__content">
                {Object.keys(cart).map(item => <Cart image={goodsObj[cart[item][0]]['image']} cost={goodsObj[cart[item][0]]['cost']}
                  data={item} subtitle={goodsObj[cart[item][0]]['subtitle']} title={goodsObj[cart[item][0]]['title']} count={cart[item].count} key={item} size={cart[item].size}/>)}
              </ul>
            </div>
            <div className="cart__sum-wrap">
              <div>
                <span className='cart__sum-title'>К ОПЛАТЕ:</span>{genSum}&nbsp;<small>&#8372;</small>
              </div>
              <Link to="/order">
                <button className="btn-reset btn-primery button-cart" onClick={hendler}>ОФОРМИТЬ</button>
              </Link>
            </div>
          </div>
        </>
      );
    }
    export default CartList;