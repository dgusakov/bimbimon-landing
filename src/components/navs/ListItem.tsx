import '../../css//App.css';
import React from 'react';

function ListItem(props: any) {
  return (
    <div className="row">
      <div className="row text-link">
        <div className="col-auto">{props.displayName}</div>
      </div>
      <hr className="mt-1" />
    </div>
  );
}

export default ListItem;
