import "../../css//App.css";
import React from "react";

function Banner(props: any) {
  return (
    <div className="jumbotron">
      <h1 className="display-4">{props.title}</h1>
      <p className="lead">{props.body}</p>
      <p className="lead">
        <a
          className="btn btn-main"
          type="button"
          href={props.link}
          role="button"
        >
          {props.buttonText}
        </a>
      </p>
    </div>
  );
}

export default Banner;
