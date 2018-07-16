import React from "react";
import "./registro.css";
import Minus from "./minus-button";

function Registro(props) {
  return (
    <div className="form-group">
      <Minus />
      <select value={props.value} className="form-control col-7" id="exampleFormControlSelect1">
        <option value="Bancos">Bancos</option>
        <option value="Caja">Caja</option>
      </select>
      <div className="input-group col-4">
        <span className="input-group-addon">
          <i className="fa fa-dollar-sign"></i>
        </span>
        <input type="text" className="form-control" placeholder="Cantidad" />
      </div>
    </div>
  );
}

export default Registro;
