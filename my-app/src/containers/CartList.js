import '../components/Cart.scss';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Cart from '../components/Cart';
import {
  selectCart,
  minus,
  add,
  del
} from '../app/cartSlice';
import { selectGoods } from '../app/goodsSlice';
import mainLogo from '../image/shopping-cart.png';
import { addC } from '../app/taskReduserSlice';

function CartList() {
  const goods = useSelector(selectGoods);
  const cart = useSelector(selectCart);
  const dispatch = useDispatch();

  const goodsObj = goods.reduce((accum, item) => {
    accum[item['articul']] = item;
    return accum;
  }, {});

  const getCartData = (itemKey) => {
    const product = goodsObj[cart[itemKey][0]];
    const { count, size } = cart[itemKey];
    return {
      image: product.image_s[0]?.url,
      cost: product.cost,
      subtitle: product.subtitle,
      title: product.title,
      count,
      size,
    };
  };

  // let sumItem = Object.keys(cart).map(item => {
  //   const newObj = goodsObj[cart[item][0]].cost * cart[item].count;
  //   return newObj;
  // });

  let sumItem = Object.keys(cart).map(item => {
    const { cost, count } = getCartData(item);
    const newObj = cost * count;
    return newObj;
  });

  let genSum = sumItem.reduce((accum, item) => accum + item, 0);
  let sum = Object.keys(cart).map(item => { return cart[item].count }).reduce((a, b) => a + b, 0)

  let ClickHendler = (event) => {//reduce((a, b) => a + b, 0)}
    let targe = event.target;

    if (!targe.classList.contains('minus') && !targe.classList.contains('add') && !targe.classList.contains('delete')) return true;
    if (targe.classList.contains('minus')) {
      dispatch(minus(targe.getAttribute('data-t')));
    } else if (targe.classList.contains('add')) {
      dispatch(add(targe.getAttribute('data-t')));
    } else if (targe.classList.contains('delete')) {
      dispatch(del(targe.getAttribute('data-t')));
    }
  }

  let hendler = () => {
    dispatch(addC(false));
  }
  // Object.keys(cart).map(item => (console.log(goodsObj[cart[item][0]])))

  return (
    <>
      <div className="cart" onClick={ClickHendler}>
        <div className="cart__title-wrap">
          <h3 className="cart__title">Корзина</h3>
        </div>
        <div className="cart__inner">
          <div className={sum ? 'cart__background hidde' : 'cart__background'}><img src={mainLogo} alt="" /></div>
          <ul className="cart__content">
            {Object.keys(cart).map(item => {
              const { image, cost, subtitle, title, count, size } = getCartData(item);
              return (
                <Cart
                  image={image}
                  cost={cost}
                  subtitle={subtitle}
                  title={title}
                  count={count}
                  size={size}
                  data={item}
                  key={item}
                />
              );
            })}
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