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
        closeMenu: (state,action)=>{
            state.isMenuBar = false;
        },
    },
})

export const {toggleIsMenuBar, closeMenu} = appSlice.actions;

export default appSlice.reducer;