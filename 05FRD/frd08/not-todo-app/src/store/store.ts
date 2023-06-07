import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../feature/todo/todoslice"
import loginReducer from "./../feature/login/loginSlice"
import historyReducer from "./../feature/history/historySlice"

export const store = configureStore({
    reducer: { 
      todo:  todoReducer,
      login:loginReducer,
      history:historyReducer,
    },
  });

export type IRootState  = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;