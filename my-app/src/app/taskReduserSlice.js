import { createSlice } from '@reduxjs/toolkit';

export const taskReducerSlice = createSlice({
  name: 'store',
  initialState: {
    classA : '',
    classB: '',
    classC: false,
    classD: false
  },
  reducers: {
      addA: (state, data) => {
          state.classA = data.payload;
      },
      addB: (state, data) => {
      state.classB = data.payload;
      },
      addC: (state, data) => {
        state.classC = data.payload;
      },
      addD: (state, data) => {
        state.classD = data.payload;
      }
  }

});

export const { addA, addB, addC, addD } = taskReducerSlice.actions;
export const selectClassA = state => state.taskReducer.classA;
export const selectClassB = state => state.taskReducer.classB;
export const selectClassC = state => state.taskReducer.classC;
export const selectClassD = state => state.taskReducer.classD;
export default taskReducerSlice.reducer;