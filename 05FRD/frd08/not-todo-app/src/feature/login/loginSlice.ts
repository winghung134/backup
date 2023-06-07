import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export type LoginUser = {
  islogin: boolean;
  id: number;
  user: { username: string };
};
let initialState: LoginUser;
let local = localStorage.getItem("User");
if (!local) {
  initialState = {
    islogin: localStorage.getItem("token") !== null,
    user: { username: "" },
    id: 0,
  };
} else {
  initialState = JSON.parse(local);
}
export const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    login: (
      state,
      action: PayloadAction<{
        username: string,token:string
      }>
    ) => {
      state.islogin = true;
      state.user.username = action.payload.username;
      localStorage.setItem("Users", JSON.stringify(state));
      localStorage.setItem("token", action.payload.token);
    },
    logout: (state) => {
      state.islogin = false;
      state.user = { username: "" };
      localStorage.removeItem("token");
    },
    //     forgetPassword:(state,action:PayloadAction<{id:number,password:string}>)=>{
    // state.user = {username:state.user.username}
    //     }
  },
});

export const { login, logout } = loginSlice.actions;
export default loginSlice.reducer;
