import '../components/MobileMenu.scss';
import { useSelector} from 'react-redux';
import {selectClassA} from '../app/taskReduserSlice';
import Nav from '../containers/Nav';
function MobileMenu() {

    const task = useSelector(selectClassA); 

    return (
      <>
         <div className={`mobile-menu ${task}`}>
             <Nav/>
         </div>
      </>
    );
  }
  export default MobileMenu;