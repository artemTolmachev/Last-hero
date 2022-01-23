import { configureStore } from '@reduxjs/toolkit';
import taskReducer from './taskReduserSlice';
import  goodsReducer from './goodsSlice';
import  cartReduser from './cartSlice';

export default configureStore({
  reducer: {
    taskReducer: taskReducer,
    goods: goodsReducer,
    cart: cartReduser
  },
});