import React from "react";

export default function BlogProps(props) {
  return (
    <>
      <div className="blog-box blog-2">
        <div
          // className="blog-pic"
          style={{ width: "200px" }}
        >
          <img src={props.img} alt="thumb" />
        </div>
      </div>
    </>
  );
}
