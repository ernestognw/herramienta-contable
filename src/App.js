import React, { Component } from "react";
import "./App.css";

import Navbar from "./page/components/navbar";
import Deudoras from "./main-tool/components/deudoras";
import AppLayout from "./page/components/app-layout";
import Container from "./page/components/container";

class App extends Component {
  state = {
    inputs: [
      { 
        id: 0,
        Cuenta: 'Bancos',
        Cantidad: '00.00',
      },
      { 
        id: 1,
        Cuenta: 'Caja',
        Cantidad: '00.00',
      },
      { 
        id: 2,
        Cuenta: 'Bancos',
        Cantidad: '00.00',
      },
      { 
        id: 3,
        Cuenta: 'Bancos',
        Cantidad: '00.00',
      },
      { 
        id: 4,
        Cuenta: 'Bancos',
        Cantidad: '00.00',
      }
    ]
  }

  handleChange = event => {
    console.log('Works');
    this.setState({
      inputs: {...this.state.inputs}
    })
  }

  render() {
    return (
      <AppLayout>
        <Navbar 
          title="Contabilidad Electrónica"
        />
        <Container>
          <Deudoras 
            registros={this.state.inputs}
            handleChange={this.handleChange}
          />
        </Container>
      </AppLayout>
    );
  }
}

export default App;
