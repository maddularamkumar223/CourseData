import { useContext, useState } from "react";
import { userContextApi } from "../../context/AuthContext";

const Login = () => {
  let [details, setDetails] = useState({
    username: "",
    password: "",
  });
  let { singleUser } = useContext(userContextApi);

  let handleChange = (e) => {
    let { value, name } = e.target;
    setDetails({ ...details, [name]: value });
  };
  let handleSubmit = (e) => {
    e.preventDefault();
    singleUser(details.username, details.password);
  };
  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <article>
          <label htmlFor="">Email</label>
          <input
            type="text"
            name="username"
            value={details.username}
            onChange={handleChange}
          />
        </article>
        <article>
          <label htmlFor="">Password</label>
          <input
            type="text"
            name="password"
            value={details.password}
            onChange={handleChange}
          />
        </article>
        <article>
          <button>Submit</button>
        </article>
      </form>
    </div>
  );
};

export default Login;
