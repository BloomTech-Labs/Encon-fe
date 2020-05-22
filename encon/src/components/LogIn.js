import React, { useState } from "react";
import { useForm } from "react-hook-form";
import "../styles/Login.scss";
import { Headeralt } from "../components/Headeralt.js";
import { axios } from "axios";
export const Login = () => {
  const { handleSubmit, register, errors } = useForm();

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    axios
      .post("/back end user/", user)
      .then((res) => {
        localStorage.setItem("token", res.data.token);
        console.log("user data", res.data.user);
      })
      .catch((err) => {
        console.log("Error while logging in", err.response);
      });
  };
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  return (
    <div className="login-container">
      <Headeralt />
      <form onSubmit={handleSubmit}>
        <label htmlFor="email" className="label">
          Email
        </label>

        <input
          id="email"
          htmlFor="email"
          className="email"
          name="email"
          ref={register({
            required: "Required",
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
              message: "invalid email address",
            },
          })}
          value={user.email}
          onChange={handleChange}
        />
        {errors.email && errors.email.message}
        <br />
        <label htmlFor="password" className="label">
          Password
        </label>

        <input
          id="password"
          name="password"
          type="password"
          ref={register}
          value={user.password}
          onChange={handleChange}
        />

        <br />

        <button type="submit" data-testid="sign in">
          Sign In
        </button>
      </form>
    </div>
  );
};
