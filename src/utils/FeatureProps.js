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
          <p className="mb-0">{props.pera}</p>
        </div>
      </div>
    </>
  );
}
