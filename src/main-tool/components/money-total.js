import React from "react";
import "./money-total.css"

function MoneyTotal (props) {
  return (
    <div className="input-group">
      <span className={!props.isBalanced ? 'input-group-addon icon-padding error' : 'input-group-addon icon-padding success'}>
        <i className={!props.isBalanced ? 'fa fa-times error-icon' : 'fa fa-check success-icon'}/>
      </span>
      <input
        readOnly={props.readOnly}
        type="number"
        className={!props.isBalanced ? 'form-control error' : 'form-control success'}
        placeholder="00.00"
        value={props.quantity}
      />
    </div>
  );
}

export default MoneyTotal;
