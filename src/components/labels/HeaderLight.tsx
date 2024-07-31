import '../../css//App.css';
import React from 'react';

function HeaderLight(props: any) {
  return (
    <div className="container mt-3 px-0">
      <span className="header-light">{props.name}</span>
    </div>
  );
}

export default HeaderLight;
