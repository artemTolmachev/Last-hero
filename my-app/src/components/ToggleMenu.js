import './toggleMenu.scss';
import {  useDispatch } from 'react-redux';
import {addA, addB} from '../app/taskReduserSlice';
import {selectClassA} from '../app/taskReduserSlice';
import { useSelector} from 'react-redux';


function ToggleMenu() {
    const dispatch = useDispatch();
    const task = useSelector(selectClassA); 
   
    let onClickHandler = () => {
        if(task !== ''){
          dispatch(addA(''));
          dispatch(addB(''));
        }
        else{
          dispatch(addA('active'));
          dispatch(addB('nonescroll'));
        } 
    }
    return (
      <>
        <div onClick={onClickHandler} className={`toggle-menu ${task}`} ><span></span></div> 
      </>
    );
  }
  export default ToggleMenu;