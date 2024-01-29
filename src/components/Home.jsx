import { useState } from "react";
import User from "./User";

const Home = () => {
  const [username, setUserName] = useState("");
  const init = (event) => {
    event.preventDefault();
    const val = event.target[0].value;
    setUserName(val);
  };
  
  var inputForm;
  if(username === ""){
    inputForm = (
      <div className="home-form">
        <form onSubmit={ init }>
          <input type="text" placeholder="Codeforces Username..." />
          <button>Search</button>
        </form>
      </div>
    );
  } 
  else{
    inputForm = <User username={ username } />;
  }
  return (
  <>
    { inputForm }
  </>
  );
};
export default Home;
