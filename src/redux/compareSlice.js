import { createSlice } from "@reduxjs/toolkit";

export const compareSlice = createSlice({
  name: "compare",
  initialState: {
    compList: [],
  }
  ,
  reducers: {
    addToCompList: (state, action) => {
      const exist = state.compList.some(item => item.id === action.payload.id);
      if (!exist && state.compList.length < 3){ 
        state.compList.push(action.payload)
      }
    },
    removeToCompList: (state, action) => {
      state.compList = state.compList.filter(item => item.id !== action.payload)
    },
    clearCompList: (state) =>{ state.compList = []
      console.log("compare list :",state.compList)
    }  // no need it 
  },
})

export const { addToCompList, removeToCompList,clearCompList } = compareSlice.actions
export default compareSlice.reducers