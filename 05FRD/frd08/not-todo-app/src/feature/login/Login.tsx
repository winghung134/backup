import { useState } from "react";
import { Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../store/store";
import { login } from "./loginSlice";
import { loginUser } from "./loginAPI";

export function Login() {
  const dispatch = useDispatch<AppDispatch>();
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");
  const [state,newState]= useState("");
  const userformOnsubmit = async () => {
    let result = await loginUser({ username, password }); 
    newState(result.msg)
    if (result.token) {
      dispatch(login({ username: username,token:result.token}));
    }
    setusername("");
    setpassword("");
    return result
  };
  return (
    <>
      <h1>Login</h1>
      <Form
        onSubmit={(e) => {
          e.preventDefault();
          userformOnsubmit();
        }}
      >
        <input
          value={username}
          onChange={(e) => setusername(e.target.value)}
          placeholder="username"
        />
        <input
          value={password}
          onChange={(e) => setpassword(e.target.value)}
          placeholder="password"
        />
        <input type="submit" />
        <div>{state}</div>
      </Form>
    </>
  );
}
