import React from "react";
import "./registro.css";
import Minus from "./minus-button";
import MoneyInput from "./money-input"

function Registro(props) {
  return (
    <div className="form-group">
      <div className="col-1">
        <Minus
          handleMinusClick={props.handleMinusClick}
          id={props.id}
          name={props.name}
        />
      </div>
      <select name={props.name} title={props.id} value={props.value} onChange={props.handleSelectChange} className="form-control col-6">
        <option value="110100000">Caja</option>
        <option value="110200000">Bancos</option>
        <option value="110300000">Inversiones</option>
        <option value="110705000">Otros Instrumentos Financieros</option>
        <option value="110702000">Clientes</option>
        <option value="110703000">Otros documentos por cobrar a corto plazo</option>
        <option value="110704000">Deudores Diversos</option>
        <option value="110701000">Estimación de Cuentas Incobrables</option>
        <option value="110500000">Pagos anticipados</option>        
      </select>
      <div className="col-5">
        <MoneyInput
          isBalanced
          active={props.active}
          handleFocus={props.handleFocus} 
          handleBlur={props.handleBlur}                    
          handleInputChange={props.handleInputChange}
          name={props.name}
          id={props.id}
          quantity={props.quantity}
        />
      </div>
    </div>
  );
}

export default Registro;
