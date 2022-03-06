import "../../css//App.css";
import React from "react";

function HeaderBold(props: any) {
  return (
    <div className="container">
      <span className="header-bold">{props.name}</span>
    </div>
  );
}

export default HeaderBold;
