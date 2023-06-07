import { useSelector } from "react-redux"
import TodoList from "../component/TodoList"
import { IRootState } from "../store"
import Login from "./Login"
export default function Home(){
    const isAuth = useSelector((state:IRootState)=>state.isAuth)
return (<div>{isAuth?<TodoList/>:<Login/>} </div>)

}