import React from "react";

export default function ServiceProps(props) {
  return (
    <div
      className="feature-box wow fadeInUp"
      data-wow-duration="1s"
      data-wow-delay=".1s"
    >
      <div
        className="feature-icon"
        style={{
          textAlign: "center",
        }}
      >
        <img src={props.img} alt="thumb" />
      </div>
      <div className="feature-info">
        <h5
          style={{
            textAlign: "center",
          }}
        >
          {props.title}
        </h5>
        <p
          className="mb-40"
          style={{
            textAlign: "center",
            fontSize: "16px",
          }}
        >
          {props.pera}
        </p>
      </div>
    </div>
  );
}
