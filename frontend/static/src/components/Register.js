import { useState } from "react";
import Cookies from "js-cookie";

function Register(props) {
  const [state, setState] = useState({
    firstName:"",
    lastName:"",
    username: "",
    email: "",
    password1: "",
    password2:"",
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
        "Content-Type": "application/json; charset=UTF-8 ",
        
      },
      body: JSON.stringify(state),
    };

    const response = await fetch("/dj-rest-auth/registration/", options).catch(
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


      <label htmlFor="firstName">First Name</label>
      <input
        type="text"
        id="firstName"
        placeholder="Enter first name"
        value={state.firstName}
        onChange={handleInput}
        required
        name="firstName"
      />
      <label htmlFor="lastName">Last name</label>
      <input
        type="text"
        id="lastName"
        placeholder="Enter last name"
        value={state.lastName}
        onChange={handleInput}
        required
        name="lastName"
      />
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
        id="password1"
        placeholder="Enter password"
        value={state.password1}
        onChange={handleInput}
        required
        name="password1"
      />
       <label htmlFor="password">Password</label>
      <input
        type="password"
        id="password2"
        placeholder="Confirm password"
        value={state.password2}
        onChange={handleInput}
        required
        name="password2"
      />
      <button type="submit" >Register</button>
    </form>
  );
}

export default Register;
