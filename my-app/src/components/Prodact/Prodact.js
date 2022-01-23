import './Prodact.scss';
import ProdactLeft from "./ProdactLeft";
import ProdactRight from "./ProdactRight";
import ProdactTabs from './ProdactTabs';
import ProdactDelivery from './ProdactDelivery';
import {Link} from 'react-router-dom';
function Prodact(props) {

    return (
        <div className="container">
            <div className="prodact__link-wr">
                <Link className="prodact__link" to="/">
                    Каталог
                </Link>
                <span>&nbsp;/&nbsp;{props.goodsobj[props.articul].title}{props.goodsobj[props.articul].subtitle}</span>
            </div>
            
            <div className="prodact__main-content">
                <ProdactLeft goodsobj={props.goodsobj} articul={props.articul}/>
                <ProdactRight  goodsobj={props.goodsobj} articul={props.articul}/>
            </div>
            <div className="prodact__bottom">
                <ProdactTabs articul={props.articul} goodsobj={props.goodsobj}/>
                <ProdactDelivery/>
            </div>
        </div>
    );
}

export default Prodact;