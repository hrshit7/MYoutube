import { configureStore } from "@reduxjs/toolkit";
import appReducer from "./appSlice";
import searchReducer from "./searchSlice";
import liveReducer from "./liveSlice";

const appStore = configureStore({
    reducer:{
        app: appReducer,
        search: searchReducer,
        live: liveReducer,
    }
})

export default appStore;  