import React from "react";

export default function CaseStudyPropos(props) {
  return (
    <div className="case-box">
      <div className="case-pic">
        <img src={props.img} alt="" style={{ margin: "20px" }} />
      </div>
    </div>
  );
}
