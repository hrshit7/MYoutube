import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
    name: "search",
    initialState: {
        suggestions: {},
        searchValue: "",
        searchVideos: {},
    },
    reducers:{
        addsuggetions : (state, action)=>{
            state.suggestions = Object.assign(state.suggestions, action.payload);
        },
        addSearchValue: (state, action)=>{
            state.searchValue = action.payload;
        },
        addSearchVideos: (state, action)=>{
            state.searchVideos = action.payload;
        }
    },
})

export const { addsuggetions, addSearchValue, addSearchVideos } = searchSlice.actions;

export default searchSlice.reducer;