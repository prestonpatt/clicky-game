import React from "react";
import "./style.css";

function Title(props) {
  return <h1 className="title">{props.children}</h1>;
}
//This should be a jumbotron card somehow
export default Title;