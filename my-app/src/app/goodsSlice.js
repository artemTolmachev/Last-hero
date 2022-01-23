import {createSlice} from '@reduxjs/toolkit';
import goodsArr from '../data/goods.json';

export const goodsSlice = createSlice({
    name : 'goods',
    initialState : {
        goods : goodsArr,
        bul: {
            man: true,
            woman: true,
            count: 0,
            value: {}
        }
    },
    reducers : {
        deng : (state, data) => {
            if(state.bul.count < 1){
                state.bul.man = false;
                state.bul.woman = false;
            }
            let a = data.payload;
            state.bul[a[0]]=a[1];
            state.bul.count+=1;
            
            if(state.bul.man === false && state.bul.woman === false && state.bul.count % 2 === 0){
                state.bul.man = true;
                state.bul.woman = true;
                state.bul.count = 0;
            }
        },
        price: (state, data) => {
            let values = data.payload;
             state.bul.value[0] = values[0];
             state.bul.value[1] = values[1];
             state.bul.value[2] = values[2];
        }
    }
});

export const {deng, price } = goodsSlice.actions;
export const selectGoods = state => state.goods.goods;
export const selectDeng = state => state.goods.bul;
export default goodsSlice.reducer;