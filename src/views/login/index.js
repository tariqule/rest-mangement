import React, { useContext } from "react";
import Header from "../home/components /Header";
import router from "next/router";
import { Context } from "../../context/context";
import { useDispatch } from "react-redux";
import { userSlice } from "../../store/slices/user";

function Login() {
  const { email, setEmail, password, setPassword } = useContext(Context);

  //hooks

  //store states
  // const [email, setEmail] = React.useState("");
  // const [password, setPassword] = React.useState("");

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

  const dispatch = useDispatch();

  const onClickSubmit = () => {
    dispatch(userSlice.actions.storeUserName({ email, password }));

    router.push("/user");
    // if (email === "email@gmail.com" && password === "password") {
    //   router.push("/about");
    // } else {
    //   alert("Denied");
    // }
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
