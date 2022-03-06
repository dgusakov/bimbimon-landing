import "../../css//App.css";
import React from "react";

function BackButton(props: any) {
  return (
    <a href="./" className="text-muted text-link">
      <div className="row">
        <div className="col-auto">&#8592; {props.name}</div>
      </div>
    </a>
  );
}

export default BackButton;
