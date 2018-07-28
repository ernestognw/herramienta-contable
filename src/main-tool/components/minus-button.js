import React from 'react';
import "./minus-button.css"

function Minus (props) {
  return(
    <button title={props.name} data-id={props.id} onClick={props.handleMinusClick} className="btn btn-primary btn-sm btn-round btn-icon btn-icon-mini">
      <i title={props.name} data-id={props.id} className="fa fa-minus"></i>
    </button>
  )
}

export default Minus;