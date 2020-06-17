import React, { Component } from 'react';
import styled from "styled-components";


const Container = styled.div`
    box-sizing: border-box;
    width: 80%;
    height: 20%;
    padding 0 30px;
    font-size: 16px;
    line-height: 50px;
    margin-bottom: 5px;
    margin-left: 10.3%;
`;



class InvoiceInput extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);

  }
  
  handleClick = (e) => {
    this.props.inputInvoice(e);
  };

  render() {
    return (
        <Container>
              <label for="t_invoice">운송장 번호 : </label>
              <input type="text" 
                value={this.props.invoice} 
                onPaste={(e)=>{this.handleClick(e.clipboardData.getData('Text'))}} 
                onInput={(e)=>{this.handleClick(e.target.value)}}  
                name="t_invoice"
                placeholder="운송장 번호"
                />
        </Container>
    );
  }
}



export default InvoiceInput