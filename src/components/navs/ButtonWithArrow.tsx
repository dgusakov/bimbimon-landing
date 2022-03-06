import "../../css//App.css";
import React from "react";

function ButtonWithArrow(props: any) {
  return (
    <div className="row" key={props.index}>
    <a href={props.link} className="text-black text-link">
      <div className="row">
        <div className="col-auto">{props.displayName}</div>
        <div className="col col-1 px-1">&#8594;</div>
      </div>
      <hr className="mt-1" />
    </a>
  </div>
  );
}

export default ButtonWithArrow;
