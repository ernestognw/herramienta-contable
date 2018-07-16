import React from 'react';
import Cuentas from './cuentas';

function Deudoras (props) {
  return (
    <div className="row">
      <div className="col-md-6 col-sm-12">
        <div className="card">
        <div className="card-header">Cuentas deudoras</div>
          <div className="card-body">
            <Cuentas 
              registros={props.registros}
              handleChange={props.handleChange}
            />        
          </div>
        </div>
      </div>
    </div>
    
  )
}

export default Deudoras;