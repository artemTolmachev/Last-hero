
import './App.scss';
import React from 'react';
import { useEffect, useState } from 'react';
import ModalMob from '../components/Filter/ModalMob';
import FilterMobile from '../components/Filter/FilterMobile';
import CartList from '../containers/CartList';
import Head from '../containers/Head';
import Сatalog from './Сatalog';
import About from './About/About';
import Team from './Team/Team';
import Delivery from './Delivery/Delivery';
import Contacts from './Contacts/Contacts';
import Modal from '../containers/Modal';
import Error from './Error';
import Overlay from './Overlay';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useSelector, useDispatch} from 'react-redux';
import {
  selectClassB,

} from '../app/taskReduserSlice';
import {
  addA, 
  addB
} from '../app/taskReduserSlice';
import MobileMenu from './MobileMenu';
import OrderList from '../components/Order/OrderList';
import ProdactList from './Prodact/ProdactList';
import {selectGoods} from '../app/goodsSlice';
import {
  selectCart
} from '../app/cartSlice';
import Footer from './Footer/Footer';


function App() {
  const cart = useSelector(selectCart);
  const goods = useSelector(selectGoods);
  const task = useSelector(selectClassB); 
  const dispatch = useDispatch();
  const[mobile, setMobile] = useState(window.matchMedia("(max-width: 600px)").matches);
  
  const goodsObj = goods.reduce((accum, item) => {
    accum[item['articul']] = item;
    return accum;
  },{});

  useEffect(() => { //при ресайзе удаляем фильтер из компонента на desctop
    function handler(e){
      setMobile(e.matches);
    } 
    window.matchMedia("(max-width: 600px)").addEventListener('change', handler);
    // handler();
  }) 

  let Hendler = (event) => {//закрытие мобильного меню по клику вне его облости
    let t = event.target;
    if(task !== "" && !t.classList.contains('mobile-menu')){//если при клике по дисплею task == "active" (mobile menu открыто) тогда выполняется функция 
        dispatch(addA(''));
        dispatch(addB(''));
    }
  }


  return (
    <div className={task} onClick={Hendler}>
      <Overlay/>
      <Router>
        <Head/>
        <MobileMenu/>
        <Modal>
          <CartList/>
        </Modal>
        <Routes>
            <Route exact path="/" element={<Сatalog/>}/> 
            <Route  path="/about" element={<About/>}/>
            <Route exact path="/team" element={<Team/>}/>
            <Route  path="/delivery" element={<Delivery/>}/>
            <Route  path="/contacts" element={<Contacts/>}/>
            <Route  path="/order" element={<OrderList/>}/>
            <Route  path="/:id" element={<ProdactList goodsObj={goodsObj} cart={cart}/>}/>
           <Route element={<Error/>}/>
        </Routes>
        <Footer/>
      </Router>
      <ModalMob>
        {mobile ? <FilterMobile/> : null}
      </ModalMob>
      
    </div>
  );
}
export default App;
