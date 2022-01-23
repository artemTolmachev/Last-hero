
import '../scss/main.scss';
import {useDispatch} from 'react-redux';
import {deng} from '../app/goodsSlice';

function Сheckbox (){ 

  const dispatch = useDispatch();
  // let inputS = document.querySelectorAll('.custom-checkbox__field');
  // let blockS = document.querySelectorAll('.goods__card');

  function clickCheced(event){
    let {name, checked} = event.target;
    dispatch(deng([name, checked]));
  }
      return(
          <>
            <div className="catalog__prop">
                <strong>Пол</strong>
                <div className="catalog__prop-inner catalog__prop-checkboxes">
                  <label className="custom-checkbox">
                    <input type="checkbox" onChange={clickCheced} className="custom-checkbox__field" name="man"/>
                    <span className="custom-checkbox__content">Мужской</span>
                  </label>
                  <label className="custom-checkbox">
                    <input type="checkbox" onChange={clickCheced}  className="custom-checkbox__field" name="woman"/>
                    <span className="custom-checkbox__content">Женский</span>
                  </label>
                </div>
              </div>
            </>
        )
      
  }
    
    export default Сheckbox;