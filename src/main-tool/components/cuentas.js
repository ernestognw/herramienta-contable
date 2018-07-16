import React from 'react';
import Registro from './registro';
import Plus from './plus-button';

function Cuentas (props) {
    return (
    <div>
      {
        props.registros.map((item, index) => {
          return (
            <Registro 
              value={item.Cuenta}
              quantity={item.Cantidad}
              key={index}
              id={index}
              handleMinusClick={props.handleMinusClick}
            />
          );
        })
      }
      <div className="text-center">
        <Plus
          handlePlusClick={props.handlePlusClick}          
        />      
      </div>
    </div>
  )
}

export default Cuentas;