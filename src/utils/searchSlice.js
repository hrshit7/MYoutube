import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
    name: "search",
    initialState: {},
    reducers:{
        addsuggetions : (state, action)=>{
            state = Object.assign(state, action.payload);
        },
    },
})

export const { addsuggetions } = searchSlice.actions;

export default searchSlice.reducer;