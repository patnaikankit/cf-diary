import { useNavigate } from "react-router-dom";
import { useState } from "react";
import User from "./User";

const Home = () => {
  const [username, setUsername] = useState("");
  const main = (event) => {
    event.preventDefault();
    const val = event.target[0].value;
    setUsername(val);
  };
  const handleChange = (e) => {
    setUsername(e.target.value);
  };
  var form;
  if (username === "") {
    form = (
      <div className="home-form">
        <form onSubmit={main}>
          <input type="text" placeholder="Codeforces Username" />
          <button>Go!</button>
        </form>
      </div>
    );
  } else {
    form = <User username={username} />;
  }
  return <>{form}</>;
};
export default Home;
