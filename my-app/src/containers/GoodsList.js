import '../data/goods.json';
import { useDispatch, useSelector } from 'react-redux';
import {selectGoods, selectDeng} from '../app/goodsSlice';
import Goods from '../components/Goods';
import {
  prodact
} from '../app/cartSlice';

function GoodsList() {
  const ObjDeng = useSelector(selectDeng);
  const goods = useSelector(selectGoods);
  const dispatch = useDispatch();
  let goodsObject = goods.map(item => {
    const newObj = {
      cost: item.cost,
      id: item.articul
    }
    return newObj;
  })

  let ClikcHandler = (event) => {
    let t = event.target;
    if(!t.classList.contains('goods__card')) return true;
    for(let i = 0; i < goodsObject.length; i++){
        if(t.getAttribute('data-key') === goodsObject[i].id){
          dispatch(prodact(goodsObject[i]));
        }
    }
  }
  
  let goodsFilter = goods;
  function filter(){
    goodsFilter = goods.filter(item => item.cost >= ObjDeng.value[0] && item.cost <= ObjDeng.value[1]);
  }
  filter()
    return (
      <>
        <div className="catalog__grid-items grid" onClick={ClikcHandler}>
          {goodsFilter.map(item => <Goods gender={item.gender} key={item.articul + item} image={item.image} size={item.size} subtitle={item.subtitle}  title={item.title} articul={item.articul} cost={item.cost}/>
           )}
        </div>
      </>
    );
  }
 export default GoodsList;