import React from 'react';
import Registro from './registro';

function Cuentas(props) {
  return (
    <div>
      {
        props.registros.map(item => {
          return (
            <Registro 
              value={item.Cuenta}
              quantity={item.Cantidad}
              key={item.id}
              onChange={(event) => {
                console.log(event)
              }}
            />
          );
        })
      }
    </div>
    
  )
}

export default Cuentas;