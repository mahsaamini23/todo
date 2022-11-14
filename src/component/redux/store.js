import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../redux/todoReducer/todoReducer";

export const store = configureStore({
    reducer:{
        todo:todoReducer,
    },
})