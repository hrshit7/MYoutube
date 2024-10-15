import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
    name: "app",
    initialState: {
        isMenuBar: true,
        VideoContainer: false,
    },
    reducers: {
        toggleIsMenuBar: (state)=>{
            state.isMenuBar = !state.isMenuBar;
        },
        closeMenu: (state,action)=>{
            state.isMenuBar = false;
        },
        onVideoContainer: (state)=>{
            state.VideoContainer= true;
        }
    },
})

export const {toggleIsMenuBar, closeMenu, onVideoContainer} = appSlice.actions;

export default appSlice.reducer;