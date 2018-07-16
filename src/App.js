import React, { Component } from "react";
import "./App.css";

import Navbar from "./page/components/navbar";
import Deudoras from "./main-tool/components/deudoras";
import AppLayout from "./page/components/app-layout";
import Container from "./page/components/container";

class App extends Component {
  state = {
    deudoras: [
      { 
        Cuenta: 'Bancos',
        Cantidad: '00.00',
      },
      { 
        Cuenta: 'Caja',
        Cantidad: '00.00',
      },
      { 
        Cuenta: 'Bancos',
        Cantidad: '00.00',
      },
      { 
        Cuenta: 'Bancos',
        Cantidad: '00.00',
      },
      { 
        Cuenta: 'Bancos',
        Cantidad: '00.00',
      }
    ]
  }

  handleMinusClick = (id) => {
    let newState = this.state.deudoras;
    newState.splice(id, 1);
    this.setState({
      deudoras: newState
    })
    console.log(this.state)
  }

  handlePlusClick = event => {
    let newState = this.state.deudoras;
    newState.push(
      { 
        Cuenta: 'Bancos',
        Cantidad: '00.00',
      }
    )
    this.setState({
      deudoras: newState
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
            registros={this.state.deudoras}
            handleMinusClick={this.handleMinusClick}
            handlePlusClick={this.handlePlusClick}
          />
        </Container>
      </AppLayout>
    );
  }
}

export default App;
