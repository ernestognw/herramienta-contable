import React from "react";
import Registro from "./registro";
import Plus from "./plus-button";

function Cuentas(props) {
  return (
    <div className="col-md-6 col-sm-12">
      <div className="card">
        <div className="card-header">{props.title}</div>
        <div className="card-body">
          {props.registros.map((item, index) => {
            return (
              <Registro
                value={item.account}
                quantity={item.quantity}
                key={index}
                id={index}
                name={props.name}
                handleMinusClick={props.handleMinusClick}
              />
            );
          })}
          <div className="text-center">
            <Plus handlePlusClick={props.handlePlusClick} name={props.name} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cuentas;
