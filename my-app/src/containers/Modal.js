import './Modal.scss';
import { useSelector } from 'react-redux';
import {selectClassC} from '../app/taskReduserSlice';
import { useDispatch } from 'react-redux';
import {addC} from '../app/taskReduserSlice';
import { BiX } from "react-icons/bi";
//делаем компонент переиспользованым с поьщщью {children} 
const Modal = ({children}) => { 
    let show = useSelector(selectClassC);
    const dispatch = useDispatch();

    let showModal = (bul) => {

      dispatch(addC(bul));
      
    }
  
    return (
      <>
      {/* при нажатии на затемненную облость окно должно закрываться  setShow(false)*/}
        <div className={show ? 'modal show' : 'modal'} onClick={() => showModal()}> 
        {/* чтобы окно не закрывалось по клику на контентную часть вешаем клик с методом e.stopPropagation() */}
          <div className={show ? 'modal__content show' : 'modal__content'} onClick={e => e.stopPropagation()}> 
            <BiX className='btn-reset modal__content-btn' size='2em' color='#444b58' onClick={() => showModal()}/>
            {children}  
          </div>
        </div>
      </>
    );
  }
  
  export default Modal;