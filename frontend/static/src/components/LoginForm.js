import { useState } from "react";
import Cookies from "js-cookie";

function LoginForm(props) {
  const [state, setState] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleInput = (e) => {
    const { name, value } = e.target;
    setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleError = (err) => console.warn(err);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-CSRFToken": Cookies.get("csrftoken"),
      },
      body: JSON.stringify(state),
    };
    console.log(Cookies)

    const response = await fetch("/dj-rest-auth/login/", options).catch(
      handleError
    );
    if (!response.ok) {
      throw new Error("Oops. Something went wrong!");
    } else {
      const data = await response.json();
      Cookies.set("Authorization", `Token ${data.key}`);
      props.setAuth(true);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="username">Username</label>
      <input
        type="text"
        id="username"
        placeholder="Enter username"
        value={state.username}
        onChange={handleInput}
        required
        name="username"
      />
      <label htmlFor="email">Email</label>
      <input
        type="email"
        id="email"
        placeholder="Enter email"
        value={state.email}
        onChange={handleInput}
        required
        name="email"
      />
      <label htmlFor="password">Password</label>
      <input
        type="password"
        id="password"
        placeholder="Enter password"
        value={state.password}
        onChange={handleInput}
        required
        name="password"
      />
      <button type="submit">Login</button>
    </form>
  );
}

export default LoginForm;
