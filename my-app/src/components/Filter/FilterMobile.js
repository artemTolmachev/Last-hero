import './FilterMobile.scss';
import { useDispatch } from 'react-redux';
import React from 'react';
import RangeSlider from '../../containers/RangeSlider';
import Checkbox from '../../containers/Checbox';
import {selectGoods} from '../../app/goodsSlice';
import {useSelector} from 'react-redux';
import {addD} from '../../app/taskReduserSlice';

function FilterMobile(props) {
    const goods = useSelector(selectGoods);
    const dispatch = useDispatch();

    function handler(){
        dispatch(addD(false));
        // console.log(bul)
    }

    return (
        <div className="filter-mobile">
        <h3>Параметры</h3>
        <strong>Цена.гр</strong>
          <RangeSlider/>
          <Checkbox goods={goods}/>
        <table className="sizes-table">
          <tbody>
          <tr>
            <td>35</td>
            <td>36</td>
            <td>37</td>
          </tr>
          <tr>
            <td>38</td>
            <td>39</td>
            <td>40</td>
          </tr>
          <tr>
            <td>41</td>
            <td>42</td>
            <td>43</td>
          </tr>
          </tbody>
        </table>
        <button onClick={handler} className="btn btn-reset btn-primery">применить</button>
      </div>
    );
}
export default FilterMobile;