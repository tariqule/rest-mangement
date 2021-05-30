import React from "react";
import Header from "../home/components /Header";
import router from "next/router";
function Login() {
  //hooks

  //store states
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  //target => alert when rendered for the first timers

  React.useEffect(() => {
    alert("Welcome to my page");
  }, []);

  const data = {
    title: "Sign in",
  };
  const onChangeEmail = (event) => {
    console.log(event.target.value);
    setEmail(event.target.value);
  };
  const onChangePassword = (event) => {
    console.log(event.target.value);
    setPassword(event.target.value);
  };
  const onClickSubmit = () => {
    if (email === "email@gmail.com" && password === "password") {
      router.push("/about");
    } else {
      alert("Denied");
    }
  };
  return (
    <div className="center">
      <Header data={data} />

      {/* controlled input */}
      <input
        type="email"
        placeholder="Enter email"
        className="padding-all"
        onChange={onChangeEmail}
      />

      <input
        type="password"
        placeholder="Enter password "
        className="padding-all"
        onChange={onChangePassword}
      />
      <button className="padding-all" onClick={onClickSubmit}>
        Submit
      </button>
    </div>
  );
}

export default Login;
