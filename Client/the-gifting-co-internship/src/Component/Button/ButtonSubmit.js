import React, { Component } from 'react';
import styled from "styled-components";


const Container = styled.div`
    box-sizing: border-box;
    width: 100%;
    height: 20%;
    padding 0 30px;
    font-size: 16px;
    line-height: 50px;
    margin-bottom: 5px;
    margin-left: 10.3%;
    margin:auto;
`;



class ButtonSubmit extends Component {
  render() {
    return (
        <Container>
              <button className="btn-search"  type="submit" >조회하기</button>
        </Container>
    );
  }
}



export default ButtonSubmit