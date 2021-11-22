import React from "react";

export default function AboutProps(props) {
  return (
    <>
      <div
        className="fun-fact wow fadeInUp"
        data-wow-duration="1s"
        data-wow-delay=".2s"
      >
        <div className="fun-icon">
          <img src={props.img} alt="thumb" />
          <p className="timer" data-to={2382} data-speed={3000}>
            {props.rating}
          </p>
        </div>
        <div className="fun-desc">
          <span className="medium">{props.title}</span>
        </div>
      </div>
    </>
  );
}
