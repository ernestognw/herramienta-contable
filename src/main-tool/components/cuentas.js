import React from "react";
import Registro from "./registro";
import Plus from "./plus-button";
import MoneyTotal from "./money-total"

function Cuentas(props) {
  return (
    <div className="col-md-6 col-sm-12">
      <div className="card">
        <div className="card-header text-center">
          <h6>{props.title}</h6>
        </div>
        <div className="card-body">
          {props.registros.map((item, index) => {
            return (
              <Registro
                active={item.active}
                handleFocus={props.handleFocus}
                handleBlur={props.handleBlur}          
                value={item.account}
                quantity={item.quantity}
                key={index}
                id={index}
                name={props.name}
                handleMinusClick={props.handleMinusClick}
                handleSelectChange={props.handleSelectChange}
                handleInputChange={props.handleInputChange}
              />
            );
          })}
          <div className="text-center form-group">
          <div className="col-1"></div>
            <div className="offset-md-1 col-6">
              <Plus handlePlusClick={props.handlePlusClick} name={props.name} />
            </div>
            <div className="col-5">
              <MoneyTotal
                readOnly
                isBalanced={props.isBalanced}
                quantity={props.totalMoney}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cuentas;
