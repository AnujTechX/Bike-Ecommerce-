import { createSlice } from "@reduxjs/toolkit";

const wishListSlice= createSlice({
  name:"wishList",
  initialState:{
    wishList:JSON.parse(localStorage.getItem("wishList"))||[]
  },
  reducers:{
    addItem:(state,action)=>{
     state.wishList.push(action.payload)
    },
    removeItem:(state,action)=>{
      state.wishList = state.wishList.filter((item)=> item.id!==action.payload.id)
    } 
  }

})

export const {addItem,removeItem}= wishListSlice.actions;
export default wishListSlice.reducer