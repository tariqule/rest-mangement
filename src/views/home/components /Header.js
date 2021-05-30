import React from "react";

function Header({ data }) {
  return (
    <>
      <h1>{data.title}</h1>
      {/* if data.subtitle is true rencer h2 or else undefined */}
      {data?.subtitle && <h2>{data?.subtitle}</h2>}
      {data?.name && <h2>{data?.name}</h2>}
      {data?.address && <h2>{data?.address}</h2>}
    </>
  );
}

export default Header;
