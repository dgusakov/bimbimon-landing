import "../../css//App.css";
import React from "react";

function ButtonWithIcon(props: any) {
  return (
    <div className="row">
    <a href={props.link} className="text-black text-link">
      <div className="row">
        <div className="col col-auto">{props.children}</div>
        <div className="col-8">{props.displayName}</div>
      </div>
      <hr className="mt-1" />
    </a>
  </div>
  );
}

export default ButtonWithIcon;
