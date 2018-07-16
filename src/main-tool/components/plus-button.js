import React from 'react';
import './plus-button.css';

function Plus (props) {
  return(
    <button 
      onClick={props.handlePlusClick}
      id={props.name}
      className="btn btn-success btn-simple btn-sm btn-round"
    >
      <i id={props.name} className="fa fa-plus"></i>
    </button>
  )
}

export default Plus;