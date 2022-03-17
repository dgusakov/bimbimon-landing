import "../../css//App.css";
import React from "react";
import { ReactComponent as ArrowRight } from "../../img/arrow-right.svg";

function ListButtonWithArrow(props: any) {
  return (
    <div className="row">
    <a href={props.link} className="text-black text-link">
      <div className="row">
        <div className="col-auto">{props.displayName}&nbsp;<ArrowRight className="Arrow-inline" /></div>
      </div>
      <hr className="mt-1" />
    </a>
  </div>
  );
}

export default ListButtonWithArrow;
