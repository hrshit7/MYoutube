import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
    name: "app",
    initialState: {
        isMenuBar: true,
    },
    reducers: {
        toggleIsMenuBar: (state)=>{
            state.isMenuBar = !state.isMenuBar;
        },
    },
})

export const {toggleIsMenuBar} = appSlice.actions;

export default appSlice.reducer;