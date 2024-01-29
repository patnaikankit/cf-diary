import { useState } from "react";
import Loading from "./Loading";
import Profile from "./Profile";


function User(props) {
    const [timer, setTimer] = useState(0);
    setTimeout(() => {
        setTimer(1);
    }, 1500);
  return <>
    { timer === 1 ? <Profile username = {props.username} /> : <Loading/> }
  </>;
}

export default User;
