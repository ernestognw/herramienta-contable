import React, { Component } from "react";
import Cuentas from "../components/cuentas";
import { connect } from "react-redux";

class Accounts extends Component {

  handleMinusClick = event => {
    let newState;
    if (event.target.title === 'debtors') {
      newState = this.props.debtors;
      newState.splice(event.target.id, 1);
      this.setState({
        debtors: newState
      });
    } else if (event.target.title === 'creditors') {
      newState = this.props.creditors;
      newState.splice(event.target.id, 1);
      this.setState({
        creditors: newState
      });
    }
  };

  handlePlusClick = event => {
    console.log(event.target.id);
    let newState;
    if (event.target.id === "debtors") {
      newState = this.props.debtors;
      newState.push({
        account: "Bancos",
        quantity: "00.00"
      });
      this.setState({
        debtors: newState
      });
    } else if (event.target.id === "creditors") {
      newState = this.props.creditors;
      newState.push({
        account: "Bancos",
        quantity: "00.00"
      });
      this.setState({
        creditors: newState
      });
    }
  };

  setDebtorsRef = element => {
    this.debtors = element;
  };

  setCreditrosRef = element => {
    this.creditors = element;
  };

  render() {
    return (
      <div className="row">
        <Cuentas
          setRef={this.setDebtorsRef}
          name="debtors"
          title="Cuentas Deudoras"
          registros={this.props.debtors}
          handleMinusClick={this.handleMinusClick}
          handlePlusClick={this.handlePlusClick}
        />
        <Cuentas
          setRef={this.setCreditorsRef}
          name="creditors"
          title="Cuentas Acreedoras"
          registros={this.props.creditors}
          handleMinusClick={this.handleMinusClick}
          handlePlusClick={this.handlePlusClick}
        />
      </div>
    );
  }
}

function mapStateToProps(state, props) {
  return {
    debtors: state.debtors,
    creditors: state.creditors
  };
}

export default connect(mapStateToProps)(Accounts);
