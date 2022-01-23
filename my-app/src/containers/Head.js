import './Head.scss';
import Nav from './Nav';
import ToggleMenu from '../components/ToggleMenu';
import CartIcon from '../components/CartIcon';
import { useDispatch } from 'react-redux';
import {addC} from '../app/taskReduserSlice';


function Head() {
  const dispatch = useDispatch();
    let showModal = () => {
      dispatch(addC(true));
    }

    return (
      <>
        <header className="header">
        <ToggleMenu/>
          <div className="container header__container grid">
            <div className="header__left">
              <a href="/"className="header__logo" >
                  {/* <span className="header__logo-sratr">Last</span><span className="header__logo-end">Hero</span> */}
                  <img src={process.env.PUBLIC_URL + `images/Logo.png`} alt="Логотип"/>
              </a>
            </div>
            <div className="header__right">
              <Nav/>
            </div>
            <button className="header__icon cart__btn btn-reset" onClick={showModal}>
              <CartIcon/>
            </button>
          </div>
          
        </header>
      </>
    );
  }
  export default Head;