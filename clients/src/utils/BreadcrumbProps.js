import React from "react";
import { Link } from "react-router-dom";
import imgUrl from "../assets/img/breadcrumb/breadcrumb.png";

const imgStyle = {
  backgroundImage: "url(" + imgUrl + ")",
};

export default function BreadcrumbProps(props) {
  return (
    <div className="site-breadcrumb" style={imgStyle}>
      <div
        className="container wow fadeInUp"
        data-wow-duration="1s"
        data-wow-delay=".4s"
      >
        <h2 className="breadcrumb-title">{props.title}</h2>
        <ul className="breadcrumb-menu clearfix">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li className="active">{props.urlpage}</li>
        </ul>
      </div>
    </div>
  );
}
