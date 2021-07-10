import React, { useContext } from "react";
import { useSelector } from "react-redux";
import Wrapper from "../../component/atom/Wrapper";
import { Context } from "../../context/context";
import { selectUser } from "../../store/slices/user";

function About() {
  const { email, password } = useContext(Context);
  const { name } = useSelector(selectUser);

  return (
    <Wrapper>
      {name.email} {name.password}
    </Wrapper>
  );
}

export default About;
