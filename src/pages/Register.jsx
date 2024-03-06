import { useRef } from "react";
import { useAuth } from "hooks";
import { Link } from "react-router-dom";

const RegisterUser = () => {
  const { register, loading, error, notification, cleanNotificacion } =
    useAuth();

  const usernameRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      username: usernameRef.current.value,
      email: emailRef.current.value,
      password: passwordRef.current.value,
    };
    console.log("Form Submitted:", formData);
    register(formData);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          name="username"
          ref={usernameRef}
          required
        />

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" ref={emailRef} required />

        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          ref={passwordRef}
          required
        />

        <button type="submit">Register</button>
      </form>
      {loading ? <h2>LOADING ...</h2> : null}
      {error ? <h2>{error.message}</h2> : null}
      {notification ? <h2>{notification.message}</h2> : null}
      <Link to={"/login"} onClick={() => cleanNotificacion()}>
        Back to login
      </Link>
    </>
  );
};

export default RegisterUser;
