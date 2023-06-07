import React from "react";
import { List } from "./feature/todo/Todolist";
import "./App.css";
import { Login } from "./feature/login/Login";
import { useSelector } from "react-redux";
import { IRootState } from "./store/store";

function App() {
  const userState = useSelector((state: IRootState) => state.login.islogin);
  return (
    <div className="App">
      {/* <Map/>       */}
      {userState ? <List /> : <Login />}
    </div>
  );
}

export default App;
