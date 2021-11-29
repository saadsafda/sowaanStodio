import React from "react";
import { Dialog, DialogTitle } from "@material-ui/core";
import RightSection from "../components/ContectSection/RightSection";

export default function DialogFormProps(props) {
  return (
    <Dialog open={props.open} onClose={props.onClose}>
      <div
        style={{
          cursor: "pointer",
          borderRadius: "50px",
          backgroundColor: "#f5f5f5",
          position: "relative",
          width: "8%",
          margin: "10px",
          textAlign: "center",
        }}
        onClick={props.onClose}
      >
        X
      </div>
      <div className="Container">
        <div style={{ padding: "30px" }}>
          <RightSection />
        </div>
      </div>
    </Dialog>
  );
}
