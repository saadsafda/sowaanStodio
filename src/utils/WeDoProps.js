import React from "react";

function WeDoProps(props) {
  return (
    <>
      <div
        className="what-box wow fadeInUp"
        data-wow-duration="1s"
        data-wow-delay=".2s"
      >
        <div className="what-icon">
          <img src={props.img} alt="thumb" />
        </div>
        <div className="what-info">
          <h5>{props.title}</h5>
          <p>{props.pera}</p>
          <a href="service-single.html" className="what-btn">
            {props.href}
          </a>
        </div>
      </div>
    </>
  );
}

export default WeDoProps;
