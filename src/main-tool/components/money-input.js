import React from "react";
import "./money-input.css"

function MoneyInput (props) {
  return (
    <div className={!props.active ? 'input-group' : 'input-group input-group-focus'} onFocus={props.handleFocus} onBlur={props.handleBlur}>
      <span className="input-group-addon icon-padding">
        <i className="fa fa-dollar-sign" />
      </span>
      <input
        onChange={props.handleInputChange}
        name={props.name}
        title={props.id}
        type="number"
        className="form-control"
        placeholder="00.00"
        value={props.quantity}
      />
    </div>
  );
}

export default MoneyInput;
