import {createSlice} from '@reduxjs/toolkit';
export const cartSlice = createSlice({
    name : 'cart',
    initialState : {
        value : {}, //let s = [{id:{'articul': 2, 'size': 45}}]
        data: {}
    },
    reducers : {
        incriment : (state, data) => {
            let count = data.payload.count;
            let articul = data.payload.articul;
            let id = data.payload.articul + data.payload.size;
            let size = data.payload.size;

            if(state.value[id] === undefined){
                state.value[id] = {}
                state.value[id][0] = articul;
                state.value[id].count = 0;
                state.value[id].count += count;
                state.value[id].size = size;
            }else{
                state.value[id].count += count;
            }
           

        },
        prodact : (state, data) => {
            let index = data.payload.id;
            state.data[0]= index;
        },

        minus : (state, data) => {
            let count = data.payload;
            state.value[count].count--;
            if(state.value[count].count < 1) delete state.value[count];
        },
        add : (state, data) => {
            let count = data.payload;
            state.value[count].count++;
        },
        del : (state, data) => {
            let count = data.payload;
           delete state.value[count];
        }
    }
});
export const { incriment, minus, add, del, prodact } = cartSlice.actions;
export const selectCart = state => state.cart.value;
export const selectData = state => state.cart.data;
export default cartSlice.reducer;
