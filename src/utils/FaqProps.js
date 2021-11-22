import React from "react";

export default function FaqProps(props) {
  return (
    <>
      <div className="accordion-item">
        <h2 className="accordion-header" id={props.id}>
          <button
            className={props.classes}
            type="button"
            data-bs-toggle="collapse"
            data-bs-target={props.target}
            aria-expanded={props.ariaExpanded}
            aria-controls={props.controls}
          >
            {props.title}
          </button>
        </h2>
        <div
          id={props.id2}
          className={props.classes2}
          aria-labelledby={props.lable}
          data-bs-parent="#accordionExample"
        >
          <div className="accordion-body">
            <p className="mb-0">{props.pera}</p>
          </div>
        </div>
      </div>
    </>
  );
}
