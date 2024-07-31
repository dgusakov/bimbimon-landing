import '../../css//App.css';
import React from 'react';
import { ReactComponent as ArrowRight } from '../../img/arrow-right.svg';

function ListButtonWithArrow(props: any) {
  if (props.external) {
    return (
      <div className="row">
        <a
          href={props.link}
          rel="noopener noreferrer"
          target="_blank"
          className="text-black text-link"
        >
          <div className="row">
            <div className="col-auto">
              {props.displayName}
              <span className="no-wrap">
                &nbsp;
                <ArrowRight className="Arrow-inline" />
              </span>
            </div>
          </div>
          <hr className="mt-1" />
        </a>
      </div>
    );
  }
  return (
    <div className="row">
      <a href={props.link} className="text-black text-link">
        <div className="row">
          <div className="col-auto">
            {props.displayName}
            <span className="no-wrap">
              &nbsp;
              <ArrowRight className="Arrow-inline" />
            </span>
          </div>
        </div>
        <hr className="mt-1" />
      </a>
    </div>
  );
}

export default ListButtonWithArrow;
