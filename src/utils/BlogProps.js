import React from "react";
import { Link } from "react-router-dom";

export default function BlogProps(props) {
  return (
    <>
      <div className="blog-box blog-2">
        <div className="blog-pic">
          <img src={props.img} alt="thumb" />
        </div>
        <div className="blog-info">
          <a href="single.html">
            <h5 className="blog-title">{props.title}</h5>
          </a>
          <ul className="blog-meta">
            <li>
              <i className="icofont-user-alt-4" /> {props.name}
            </li>
            <li>
              <i className="icofont-clock-time" /> {props.date}
            </li>
          </ul>
          <Link to={props.link} className="fz-16-5">
            {" "}
            {props.linktext}{" "}
          </Link>
        </div>
      </div>
    </>
  );
}
