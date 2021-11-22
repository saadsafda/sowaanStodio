import React from "react";

export default function CaseStudyPropos(props) {
  return (
    <div className="case-box">
      <div className="case-pic">
        <img src={props.img} alt="thumb" />
      </div>
      <div className="case-info">
        <span className="d-block l-h-1 fz-16 mb-20">{props.pera}</span>
        <a href="work-single.html">
          <h5 className="mb-0 fz-20 l-h-1">{props.title}</h5>
        </a>
      </div>
    </div>
  );
}
