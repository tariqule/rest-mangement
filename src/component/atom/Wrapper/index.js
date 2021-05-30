import React from "react";

/**
 * Props will take children
 * @returns Everything centered
 */
function Wrapper(props) {
  return <div className="center">{props.children}</div>;
}

export default Wrapper;
