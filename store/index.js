import {configureStore, createSlice} from '@reduxjs/toolkit';

const initialState = {data: []};

const dataSlice = createSlice({
  name: 'data',
  initialState: initialState,
  reducers: {
    setData: (state, action) => {
      state.data = action.payload;
    },
  },
});

// console.log(setData);

export const dataAction = dataSlice.actions;

const store = configureStore({reducer: dataSlice.reducer});

export default store;
