import React from "react";
import { Link } from "react-router-dom";
import { Dialog } from "@material-ui/core";
import RightSection from "../components/ContectSection/RightSection";

export default function DialogFormProps(props) {
  return (
    <Dialog open={props.open} onClose={props.onClose}>
      <div className="Container" style={{ backgroundColor: "aliceblue" }}>
        <h2 style={{ textAlign: "center", padding: "20px" }}>
          Have Any Questions?
        </h2>
        <div style={{ padding: "30px", paddingTop: "0px" }}>
          <RightSection />
        </div>
      </div>
    </Dialog>
  );
}
