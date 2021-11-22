import React from "react";
import { Link } from "react-router-dom";

export default function BlogCtergoryProps(props) {
  return (
    <>
      <li>
        <Link to="">
          {props.title}
          <span>{props.num}</span>
        </Link>
      </li>
    </>
  );
}
