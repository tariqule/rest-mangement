import React from "react";
import Header from "./components /Header";
import router from "next/router";
import Wrapper from "../../component/atom/Wrapper";

//smart component
//object
function Home() {
  //data source=> api => json => object: key: value
  const data = {
    title: "object header",
    subtitle: "Subway Hello ",
    name: "Sdk",
    address: "Address",
  };
  //{} : object

  return (
    <Wrapper>
      <Header data={data} />

      <h2>Home</h2>
      <button
        onClick={() => {
          //one way to route
          router.push("/about");
        }}
      >
        Go To About
      </button>

      {/* //2nd way to route */}
      <a href="/login" className="padding-all">
        Go To Login
      </a>

      <a href="/user" className="padding-all">
        Go To Users Page
      </a>
    </Wrapper>
  );
}

export default Home;
