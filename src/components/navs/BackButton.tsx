import '../../css//App.css';
import React from 'react';
import { ReactComponent as ArrowLeft } from '../../img/arrow-left.svg';

function BackButton(props: any) {
  return (
    <a href="./" className="text-muted text-link">
      <div className="row">
        <div className="col col-auto">
          <ArrowLeft className="Arrow-inline" />
        </div>
        <div className="col-8 p-0">{props.name}</div>
      </div>
    </a>
  );
}

export default BackButton;
