import React from "react";

export default function ImgProps(props) {
  return (
    <div className="col boxcli">
      <img src={props.img} alt="img" style={props.styles} />
    </div>
  );
}
