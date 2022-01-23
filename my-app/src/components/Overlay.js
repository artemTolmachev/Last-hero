import '../components/Overlay.scss';

import { useSelector} from 'react-redux';
import {selectClassA} from '../app/taskReduserSlice';

function Overlay() {
  const task = useSelector(selectClassA); 
  

    return (
      <>
         <div  className={`overlay ${task}`}></div>
      </>
    );
  }
  export default Overlay;