import '../components/Catalog.scss';
import './SizeTable.scss';
import '../scss/main.scss';
import { useEffect, useState } from 'react';
import GoodsList from '../containers/GoodsList';
import { FaFilter } from "react-icons/fa";
import { useDispatch } from 'react-redux';
import {addD} from '../app/taskReduserSlice';
import Filter from './Filter/Filter';
import Hero from '../components/Hero/Hero';
function Сatalog() {
  const dispatch = useDispatch();


  const[desctop, setDesctop] = useState(window.matchMedia("(min-width: 600px)").matches);
    useEffect(() => {
      function handler(e){
        setDesctop(e.matches);
      } 
      window.matchMedia("(min-width: 600px)").addEventListener('change', handler);
    })   
    let showModal = () => { //показываем модалку c фильтром
      dispatch(addD(true));
    }

    return (
      <>
      <Hero/>
        <div className="catalog">
          <div className="catalog__title-wrraper">
            <h1 className="catalog__title">Каталог</h1>
          </div>
          <div className="catalog__btn-wrraper container">
            <button className="btn catalog__btn btn-reset" onClick={showModal}>
              Фильтер
              <FaFilter size='0.5em' className='filter-icon'/>
            </button>
          </div>
          <div className="container catalog__container">
            <div className="catalog__content grid">
              <div className="catalog__left">
                {desctop ? <Filter/> : null}
              </div>
              <div className="catalog__grid">
                <GoodsList/>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
  export default Сatalog;