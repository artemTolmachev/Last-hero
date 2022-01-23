import './Footer.scss';
import React from 'react';
import {Link} from 'react-router-dom'; 
import { useEffect, useState } from 'react';
import { useLocation } from "react-router";
function Footer(props) {

const [active, setActive] = useState(true)
const id = useLocation('/');



useEffect(()=>{
    let ListNav = document.querySelectorAll('.nav__link');
    let idName = id.pathname;
    for(let i = 0; i < ListNav.length; i++){
    ListNav[i].classList.remove('active__link')
    if(ListNav[i].getAttribute('href') === idName){
        ListNav[i].classList.add('active__link')
    }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
},[active])


let Hendler = (event) => {
    setActive(!active)
}

    return (
        <div className='footer'>
            <div className="container">
                <nav className="footer__nav" onClick={Hendler}>
                    <li className="footer__nav-item">
                    <Link className="footer__nav-link" to="/">
                        Каталог
                    </Link>
                    </li>

                    <li className="footer__nav-item">
                    <Link className="footer__nav-link" to="/team">
                    Наша Команда
                        
                    </Link>
                    </li>

                    <li className="footer__nav-item">
                    <Link className="footer__nav-link" to="/delivery ">
                        
                    Доставка
                    </Link>
                    </li>
                    <li className="footer__nav-item">
                    <Link className="footer__nav-link" to="/about">
                    О нас
                        
                    </Link>
                    </li>
                    <li className="footer__nav-item">
                    <Link className="footer__nav-link" to="/contacts">
                        
                        Контакты
                    </Link>
                    </li>
                </nav>
            </div>
            
        </div>
    );
}

export default Footer;