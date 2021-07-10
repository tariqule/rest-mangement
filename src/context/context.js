import React, { createContext } from "react";

/**
 *
 */
export const Context = createContext();

function ContextWrapper(props) {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  return (
    <Context.Provider value={{ email, setEmail, password, setPassword }}>
      {props.children}
    </Context.Provider>
  );
}

export default ContextWrapper;
