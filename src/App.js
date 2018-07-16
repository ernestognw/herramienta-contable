import React, { Component } from "react";
import "./App.css";

import Navbar from "./page/components/navbar";
import Accounts from "./main-tool/containers/accounts";
import AppLayout from "./page/components/app-layout";
import Container from "./page/components/container";

class App extends Component {
  render() {
    return (
      <AppLayout>
        <Navbar 
          title="Contabilidad Electrónica"
        />
        <Container>
          <Accounts
            handleMinusClick={this.handleMinusClick}
            handlePlusClick={this.handlePlusClick}
          />
        </Container>
      </AppLayout>
    );
  }
}

export default App;
