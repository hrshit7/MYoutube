import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
    name: "search",
    initialState: {
        suggestions: {},
        searchValue: "",
    },
    reducers:{
        addsuggetions : (state, action)=>{
            state.suggestions = Object.assign(state.suggestions, action.payload);
        },
        addSearchValue: (state, action)=>{
            state.searchValue = action.payload;
        },
    },
})

export const { addsuggetions, addSearchValue } = searchSlice.actions;

export default searchSlice.reducer;