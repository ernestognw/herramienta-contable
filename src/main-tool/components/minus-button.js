import React from 'react';
import "./minus-button.css"

function Minus (props) {
  return(
    <button onClick={props.handleMinusClick} className="btn btn-primary btn-sm btn-round btn-icon btn-icon-mini mr-3">
      <i title={props.name} id={props.id} className="fa fa-minus"></i>
    </button>
  )
}

export default Minus;