import { useState } from "react"
import { useDispatch } from "react-redux"
import { AppDispatch, loginAction } from "../store"
export default function Login(){
const [username,setusername] = useState("")
const dispatch = useDispatch<AppDispatch>()

const submitHandler = (e:React.FormEvent<HTMLFormElement>)=>{
e.preventDefault()
dispatch(loginAction(username))
}
return(<>
    <form onSubmit={submitHandler}>
        <h3>Login</h3>
        <>Username:</>
<input id="username" type="text" placeholder="username" value={username} onChange={(e)=>{setusername(e.target.value)}}/>
<input type="submit" value="submit"/>
    </form>
    
    </>)
}