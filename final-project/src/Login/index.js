import React, { useState } from "react";
import axios from "axios";
import { Redirect, Route, useHistory } from "react-router-dom";
import Cookies from "js-cookie";
import { message } from "antd";

export const LoginRoute = ({ ...login }) => {
  if (Cookies.get("token") === undefined) {
    return <Route {...login} />;
  } else if (Cookies.get("token") !== undefined) {
    return <Redirect to="/" />;
  }
};

export const DashboardRoute = ({ ...dashboard }) => {
  if (Cookies.get("token") === undefined) {
    return <Redirect to="/" />;
  } else if (Cookies.get("token") !== undefined) {
    return <Route {...dashboard} />;
  }
};

export const Login = () => {
  let history = useHistory();
  const [input, setInput] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    let valueOfInput = e.target.value;
    let nameOfInput = e.target.name;

    setInput({ ...input, [nameOfInput]: valueOfInput });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    console.log(input);
    let { email, password } = input;
    axios
      .post("https://backendexample.sanbersy.com/api/user-login", {
        email,
        password,
      })
      .then((login) => {
        let { data } = login;
        let { token, user } = data;
        let { email } = user;
        Cookies.set("token", token, { expires: 1 });
        Cookies.set("email", email, { expires: 1 });
        console.log(login);
        history.push("/dashboard");
        message.success(`Halo ${email} !`);
      })
      .catch(() => {
        message.error("gagal login")
      });
  };

  return (
    <>
      <form onSubmit={handleLogin}>
        <input
          value={input.email}
          onChange={handleChange}
          required
          type={"text"}
          name="email"
        />
        <input
          value={input.password}
          onChange={handleChange}
          required
          type={"password"}
          name="password"
        />
        <input type={"submit"} value={"Login"} />
      </form>
    </>
  );
};
