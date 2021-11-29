import React from "react";

export default function ButtonProps(props) {
  return (
    <>
      <button onClick={props.onClick} className="theme-btn">{props.text}</button>
    </>
  );
}
