import {useState} from "react";
import {login, logout} from "../store";
import {useDispatch, useSelector} from "react-redux";

export const Login = () => {
    const [newUserName, setNewUserName] = useState("");

    const dispatch = useDispatch();
    const username = useSelector((state: any) => state.user.value.username);
    return (
        <div>
            <h1>{username}</h1>
            <input onChange={(e) => {
                setNewUserName(e.target.value)
            }}
            />
            <button onClick={() => dispatch(login({username: newUserName}))}>Submit Login</button>
            <button onClick={() => dispatch(logout())}>Logout</button>
        </div>
    )
}