import React from 'react';
import './plus-button.css';

function Plus (props) {
  return(
    <button onClick={props.handlePlusClick} className="btn btn-success btn-simple btn-sm btn-round">
      <i className="fa fa-plus"></i>
    </button>
  )
}

export default Plus;