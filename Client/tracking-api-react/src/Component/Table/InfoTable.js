import React, { Component } from 'react';

class InfoTable extends Component {
  render() {
    return (
        <div>
            <label style={{fontSize:"200%", margin:"auto"}}>
                조회결과
            </label>
        <table style={{paddingTop:"1%", margin:"auto"}}> 
             <colgroup>
                <col style={{width:"250px"}}/>
                <col style={{width:"200px"}}/>
                <col style={{width:"150px"}}/>
                <col style={{width:"250px"}}/>
                <col style={{width:"150px"}}/>
            </colgroup>
            <thead>
                <tr>
                    <th scope="col">운송장 번호</th>
                    <th scope="col">보내는 분</th>
                    <th scope="col">받는 분</th>
                    <th scope="col">상품 정보</th>
                    <th scope="col">수량</th>
                </tr>
             </thead>
             <tbody>
                <tr>
                    <td >{this.props.info.number }</td>
                    <td >{this.props.info.sender }</td>
                    <td >{this.props.info.geter }</td>
                    <td >{this.props.info.itemName }</td>
                    <td >{this.props.info.itemName }</td>
                </tr>
            </tbody>
        </table>
    </div>
    );
  }
}





export default InfoTable