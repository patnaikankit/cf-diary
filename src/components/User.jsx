import { useState } from "react";
import Loading from "./Loading";
import Profile from "./Profile";


function User(props) {
    const [f,setF]=useState(0);
    setTimeout(() => {
        setF(1);
    }, 1500);
  return <>
    {f===1?<Profile username = {props.username}/>:<Loading/>}
  </>;
}

export default User;
