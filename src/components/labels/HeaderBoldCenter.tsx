import "../../css//App.css";
import React from "react";

function HeaderBoldCenter(props: any) {
  return (
    <div className="container header-bold-center">
      <span>{props.name}</span>
    </div>
  );
}

export default HeaderBoldCenter;
