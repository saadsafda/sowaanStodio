import React from "react";
import { Link } from "react-router-dom";

export default function ButtonProps(props) {
  return (
    <>
      <Link to="/service" className="theme-btn">
        {props.text} <i className="icofont-long-arrow-right" />
      </Link>
    </>
  );
}
