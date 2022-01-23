import { useSelector } from 'react-redux';
import {selectClassD} from '../../app/taskReduserSlice';
import { useDispatch } from 'react-redux';
import {addD} from '../../app/taskReduserSlice';

const ModalMob = ({children}) => { 
    let show = useSelector(selectClassD);
    const dispatch = useDispatch();

    let showModal = (bul) => {
      dispatch(addD(bul));
    }

    return (
      <>
      {/* при нажатии на затемненную облость окно должно закрываться  setShow(false)*/}
        <div className={show ? 'modal show' : 'modal'} onClick={() => showModal()}> 
        {/* чтобы окно не закрывалось по клику на контентную часть вешаем клик с методом e.stopPropagation() */}
          <div className={show ? 'modal__content show' : 'modal__content'} onClick={e => e.stopPropagation()}> 
            {children}  
          </div>
        </div>
      </>
    );
  }
  
  export default ModalMob;