import "../../css//App.css";
import React from "react";

function HeaderSemiBold(props: any) {
  return (
    <div className="container mt-3 px-0">
    <span className="header-semi-bold">{props.name}</span>
  </div>
  );
}

export default HeaderSemiBold;
