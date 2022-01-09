// import React, { useContext } from "react";
// import Header from "../home/components /Header";
// import router from "next/router";
// import { Context } from "../../context/context";
// import { useDispatch } from "react-redux";
// import { userSlice } from "../../store/slices/user";

// function Login() {
//   const { email, setEmail, password, setPassword } = useContext(Context);

//   //hooks

//   //store states
//   // const [email, setEmail] = React.useState("");
//   // const [password, setPassword] = React.useState("");

//   //target => alert when rendered for the first timers

//   React.useEffect(() => {
//     alert("Welcome to my page");
//   }, []);

//   const data = {
//     title: "Sign in",
//   };
//   const onChangeEmail = (event) => {
//     console.log(event.target.value);
//     setEmail(event.target.value);
//   };
//   const onChangePassword = (event) => {
//     console.log(event.target.value);
//     setPassword(event.target.value);
//   };

//   const dispatch = useDispatch();

//   const onClickSubmit = () => {
//     dispatch(userSlice.actions.storeUserName({ email, password }));

//     router.push("/user");
//     // if (email === "email@gmail.com" && password === "password") {
//     //   router.push("/about");
//     // } else {
//     //   alert("Denied");
//     // }
//   };
//   return (
//     <div className="center">
//       <Header data={data} />

//       {/* controlled input */}
//       <input
//         type="email"
//         placeholder="Enter email"
//         className="padding-all"
//         onChange={onChangeEmail}
//       />

//       <input
//         type="password"
//         placeholder="Enter password "
//         className="padding-all"
//         onChange={onChangePassword}
//       />
//       <button className="padding-all" onClick={onClickSubmit}>
//         Submit
//       </button>
//     </div>
//   );
// }

// export default Login;

import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import HomeIcon from "@material-ui/icons/Home";
import { Grid, Input } from "@material-ui/core";
const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      minHeight: "1000px",
      borderWidth: "1px solid red",
      // flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
    paddingRight: {
      marginRight: theme.spacing(5),
    },
  })
);

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Rest Management
          </Typography>
          <div className={classes.paddingRight}>
            <Button color="primary" variant="contained">
              <HomeIcon />
              Home
            </Button>
            <Button color="inherit">Login</Button>
          </div>
        </Toolbar>
      </AppBar>

      <Grid
        container
        justifyContent="center"
        alignItems="center"
        direction="column"
        spacing={3}
        style={{ marginTop: "100px" }}
      >
        <Grid item>
          <Input title="username" placeholder="Username" />
        </Grid>
        <Grid item>
          <Input title="password" placeholder="Password" />
        </Grid>
        <Grid item>
          <Button title="Submit" color="primary" variant="contained">
            <Typography>Submit</Typography>
          </Button>
        </Grid>
      </Grid>
    </div>
  );
}
