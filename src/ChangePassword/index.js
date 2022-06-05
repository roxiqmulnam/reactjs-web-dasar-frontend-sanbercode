import React from "react";

export const ChangePassword = () => {
  const [input, setInput] = useState({
    password: "",
  });
  const handleChangePw = (e) => {
    e.preventDefault();

    let { password } = input;
    axios
      .post("https://backendexample.sanbersy.com/api/change-password", {
        password,
      })
      .then((login) => {
        let { data } = login;
        let { password } = data;
        let { email } = user;
        Cookies.set("token", token, { expires: 1 });
        Cookies.set("email", email, { expires: 1 });
      })
      .catch((err) => {
        alert(err)
      });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post("https://backendexample.sanbersy.com/api/change-password", {
        password: input.password,
      })
      .then((res) => {
        let user = res.data.user;
        let token = res.data.token;
        let currentUser = { name: user.name, email: user.email, token };
        setUser(currentUser);
        Cookies.set("user", currentUser, { expires: 1 });
      })
      .catch((err) => {
        alert(err);
      });
  };

  const handleChange = (event) => {
    let value = event.target.value;
    let name = event.target.name;
    setInput({ ...input, [name]: value });
  };

  return <>
  </>;
};
