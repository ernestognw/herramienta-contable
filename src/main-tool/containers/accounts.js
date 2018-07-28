import React, { Component } from "react";
import Cuentas from "../components/cuentas";
import { connect } from "react-redux";

import * as actions from '../../actions/actions';
import { bindActionCreators } from 'redux';

class Accounts extends Component {

  handleMinusClick = event => {
    this.props.actions.minusClick(event.target);
  };

  handlePlusClick = event => {
    this.props.actions.plusClick(event.target.title);
  };

  handleSelectChange = event => {
    this.props.actions.selectChange(event.target.value, event.target.name, event.target.title)
  };

  handleInputChange = event => {
    this.props.actions.inputChange(event.target.value, event.target.name, event.target.title)
  };

  handleFocus = event => {
    this.props.actions.inputFocus(event.target.name, event.target.title);
  }

  handleBlur = event => {
    this.props.actions.inputBlur(event.target.name, event.target.title)
  }

  handleSubmit = event => {
    this.props.actions.getXML()
  }

  render() {
    return (
      <div className="row">
        <Cuentas
          handleFocus={this.handleFocus}
          handleBlur={this.handleBlur}          
          name="debtors"
          title="Cuentas Deudoras"
          registros={this.props.debtors}
          handleMinusClick={this.handleMinusClick}
          handlePlusClick={this.handlePlusClick}
          handleSelectChange={this.handleSelectChange}
          handleInputChange={this.handleInputChange}
          totalMoney={this.props.debtorsTotal}
          isBalanced={this.props.isBalanced}                       
        />
        <Cuentas
          handleFocus={this.handleFocus}
          handleBlur={this.handleBlur}                    
          name="creditors"
          title="Cuentas Acreedoras"
          registros={this.props.creditors}
          handleMinusClick={this.handleMinusClick}
          handlePlusClick={this.handlePlusClick}
          handleSelectChange={this.handleSelectChange}
          handleInputChange={this.handleInputChange} 
          totalMoney={this.props.creditorsTotal}                
          isBalanced={this.props.isBalanced}                       
        />
        <div className="col-12 text-center">
          <button className="btn btn-success btn-lg" onClick={this.handleSubmit}><b>Obtener XML</b></button>
        </div>
        <div className="col-12">
          <textarea className="form-control" rows="15" value={this.props.XML_file}></textarea>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state, props) {
  return {
    debtors: state.debtors,
    creditors: state.creditors,
    debtorsTotal: state.debtorsTotal,
    creditorsTotal: state.creditorsTotal,
    isBalanced: state.isBalanced,
    XML_file: state.XML_file
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Accounts);
