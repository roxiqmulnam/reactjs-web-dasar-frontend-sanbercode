import React, { useContext, useState } from "react";
import axios from "axios";
import { UserContext } from "../UserContext";
import Cookies from "js-cookie";
import { message } from "antd";
import { Link, useHistory } from "react-router-dom";

const Register = () => {
  let history = useHistory();
  const [, setUser] = useContext(UserContext);
  const [input, setInput] = useState({ name: "", email: "", password: "" });

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post("https://backendexample.sanbersy.com/api/register", {
        name: input.name,
        email: input.email,
        password: input.password,
      })
      .then((res) => {
        let user = res.data.user;
        let token = res.data.token;
        let currentUser = { name: user.name, email: user.email, token };
        setUser(currentUser);
        Cookies.set("user", currentUser, { expires: 1 });
        history.push("/login");
        message.success("Berhasil Register, Silahkan Login");
      })
      .catch(() => {
        message.error("Akun sudah terdaftar");
      });
  };

  const handleChange = (event) => {
    let value = event.target.value;
    let name = event.target.name;
    setInput({ ...input, [name]: value });
  };

  return (
    <>
        <form className="form-input" onSubmit={handleSubmit}>
          <h1 style={{textAlign:"center"}}>Register</h1>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            onChange={handleChange}
            value={input.name}
          />
          <label>Email:</label>
          <input
            type="text"
            name="email"
            onChange={handleChange}
            value={input.email}
          />
          <label>Password: </label>
          <input
            type="password"
            name="password"
            onChange={handleChange}
            value={input.password}
          />
          <input type={"submit"} value={"Register"} />
          <p>Have an account? <Link to={"/login"}>Login Here</Link></p>
        </form>
    </>
  );
};

export default Register;
