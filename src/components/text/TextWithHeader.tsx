import "../../css//App.css";
import React from "react";

function TextWithHeader(props: any) {
  return (
    <div className="container mt-3 mb-2 px-0">
      <span className="header-semi-bold">{props.name}</span>
      <div>{props.body}</div>
    </div>
  );
}

export default TextWithHeader;
