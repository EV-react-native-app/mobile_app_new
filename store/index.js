import {configureStore, createSlice} from '@reduxjs/toolkit';

const initialState = {data: [], isSensePCBConnected:false};

const dataSlice = createSlice({
  name: 'data',
  initialState: initialState,
  reducers: {
    setData: (state, action) => {
      console.log("SensePCB data : "+action.payload.toString());
      state.data = action.payload;
    },
    setSensePCBConnected : (state, action) =>{
      state.isSensePCBConnected = action.payload.value;
    }
  },
});

// console.log(setData);

export const dataAction = dataSlice.actions;

const store = configureStore({reducer: dataSlice.reducer});

export default store;
