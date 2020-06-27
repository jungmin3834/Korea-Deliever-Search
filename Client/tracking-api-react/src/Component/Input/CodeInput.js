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


//택배 회사 번호 컴포넌트 
class CodeInput extends Component {
  constructor(props) {
    super(props);
    this.selectChange = this.selectChange.bind(this);
  }
  
  selectChange = (e) => {
    this.props.inputCode(e);
  };

  render() {
    return (
        <Container>
          <span className="inputSpan">
              <label className="inputLabel" >택배사 코드 : </label>
          </span>
          <select  style={{paddingBottom:"1px"}} id="company-list" value={this.props.code}  onChange={(e)=>{this.selectChange(e.target.value)}}>
              <option value="04"> CJ대한통운</option>
              <option value="05"> 한진택배</option>
              <option value="23"> 경동택배</option>
          </select>
        </Container>
    );
  }
}

export default CodeInput;