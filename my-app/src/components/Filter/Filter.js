import React from 'react';
import RangeSlider from '../../containers/RangeSlider';
import Checkbox from '../../containers/Checbox';
import {selectGoods} from '../../app/goodsSlice';
import { useSelector} from 'react-redux';
import './Filter.scss';


function Filter() {
    const goods = useSelector(selectGoods);
    return (
        <div className="filter">
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
      </div>
    );
}
export default Filter;