import { createSlice } from "@reduxjs/toolkit";
import { LIVE_CHAT_COUNT } from "./constant";

const liveSlice = createSlice({
    name: "live",
    initialState:{
        message:[],
        isliveChat: true,
    },
    reducers:{
        addMessages : (state,action)=>{
            state.message.splice(LIVE_CHAT_COUNT,1);
            state.message.unshift(action.payload);
        },
        addisliveChat : (state)=>{
            state.isliveChat = !state.isliveChat;
        },
    },
})

export const {addMessages, addisliveChat} = liveSlice.actions;

export default liveSlice.reducer;