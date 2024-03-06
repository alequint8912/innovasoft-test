import { useEffect, useState } from "react";
import { useAuth } from "hooks";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const { login, loading, notification, cleanNotification } = useAuth();
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    login({ username, password });
  };

  useEffect(() => {
    if (notification?.status === "Success") {
      cleanNotification();
      navigate("/");
    }
  }, [notification]);

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
      </form>
      {loading ? <h2>LOADING ...</h2> : null}
      {notification?.status === "Error" ? (
        <h2 style={{ color: "red" }}>{notification?.message ?? "Error"}</h2>
      ) : null}
      <Link to={"/register"}>Go to Register</Link>
    </>
  );
};

export default Login;
