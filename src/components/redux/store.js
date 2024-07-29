import { configureStore } from "@reduxjs/toolkit";
import countSlice from "./countSlice";
import userSlice from "./userSlice";
import listSlice from "./listSlice";

const store = configureStore({
    reducer:{
        count: countSlice,
        user: userSlice,
        students: listSlice

    }
})
export default store