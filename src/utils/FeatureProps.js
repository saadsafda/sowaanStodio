import React from "react";

export default function FeatureProps(props) {
  return (
    <>
      <div
        className="feature-box wow fadeInUp "
        data-wow-duration="1s"
        data-wow-delay=".2s"
      >
        <div className="feature-icon">
          <img src={props.img} alt="thumb" />
        </div>
        <div className="feature-info">
          <h5>{props.title}</h5>
        </div>
        <p className="mb-0" style={{ fontSize: "16px" }}>
          {props.pera}
        </p>
      </div>
    </>
  );
}
