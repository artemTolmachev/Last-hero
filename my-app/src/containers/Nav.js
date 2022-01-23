import './Nav.scss';
import {Link} from 'react-router-dom'; 
import { useDispatch } from 'react-redux';
import {addA, addB} from '../app/taskReduserSlice';
import { FcOrgUnit } from "react-icons/fc";
import { FcAbout } from "react-icons/fc";
import { FcConferenceCall } from "react-icons/fc";
import { FcShipped } from "react-icons/fc";
import { FcContacts } from "react-icons/fc";
import { useLocation } from "react-router";
import { useEffect, useState } from 'react';

function Nav() {
  const [active, setActive] = useState(true)
  const dispatch = useDispatch();
  const id = useLocation('/');

  let idName = id.pathname;
  

  useEffect(()=>{
    let ListNav = document.querySelectorAll('.nav__link');

    for(let i = 0; i < ListNav.length; i++){
      ListNav[i].classList.remove('active__link')
      if(ListNav[i].getAttribute('href') === idName){
        ListNav[i].classList.add('active__link')
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[active])

  let Hendler = (event) => {
    let data = event.target;
    if(data.className === 'nav__link'){
      dispatch(addA(''));
      dispatch(addB(''));
    } 
    setActive(!active)
}

    return (
      <>
        <nav className="nav" onClick={Hendler}>
            <li className="nav__item">
              <Link className="nav__link" to="/">
                <FcOrgUnit className='nav__icn' size='1.5em' />
                Каталог
              </Link>
            </li>

            <li className="nav__item">
              <Link className="nav__link" to="/about">
                <FcAbout className='nav__icn' size='1.5em' />
                О нас
              </Link>
            </li>

            <li className="nav__item">
              <Link className="nav__link" to="/team">
                <FcConferenceCall className='nav__icn' size='1.5em' />
                Наша команда
              </Link>
            </li>
            <li className="nav__item">
              <Link className="nav__link" to="/delivery">
                <FcShipped className='nav__icn' size='1.5em' />
                Доставка
              </Link>
            </li>
            <li className="nav__item">
              <Link className="nav__link" to="/contacts">
                <FcContacts className='nav__icn' size='1.5em' />
                Контакты
              </Link>
            </li>
        </nav>
      </>
    );
  }
  export default Nav;