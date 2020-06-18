import React, { Component } from 'react';
import styled from "styled-components";
import CodeInput from '../Input/CodeInput';
import InvoiceInput from '../Input/InvoiceInput';
import ButtonSubmit from '../Button/ButtonSubmit';

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


//폼 형식 완성본
class InvoicApiForm extends Component {
  render() {
    return (
        <Container>
            <form style={{paddingTop:"1%"}} onSubmit={this.props.mySubmitHandler}>
                <div style={{marginTop:"0.3%"}}>
                    <CodeInput   inputCode={this.props.inputCode} />
                </div>
                <div style={{marginTop:"0.3%"}}>
                    <InvoiceInput invoice={this.props.invoice} inputInvoice={this.props.inputInvoice}/>
                </div>
                <div style={{marginTop:"1%"}}>
                    <ButtonSubmit/>
                </div>
            </form>
        </Container>
    );
  }
}



export default InvoicApiForm