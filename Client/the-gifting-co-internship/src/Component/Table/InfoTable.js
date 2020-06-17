import React, { Component } from 'react';

class InfoTable extends Component {
  render() {
    return (
        <div>
            <label style={{margin:"auto"}}>
                조회결과
            </label>
        <table style={{margin:"auto"}}> 
             <colgroup>
                <col style={{width:"30%"}}/>
                <col style={{width:"30%"}}/>
                <col style={{width:"30%"}}/>
                <col style={{width:"20%"}}/>
                <col style={{width:"20%"}}/>
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
                    <td class="text-alignCenter" id="invcNo">{"asdasd"}</td>
                    <td class="text-alignCenter" id="sendrNm">{"asdasd"}</td>
                    <td class="text-alignCenter" id="rcvrNm">{"asdasd"}</td>
                    <td class="text-alignCenter" id="itemNm">{"asdasd"}</td>
                    <td class="text-alignCenter" id="itemNm">{"asdasd"}</td>
                </tr>
                <tr>
                    <td class="text-alignCenter" id="invcNo">{this.props.number}</td>
                    <td class="text-alignCenter" id="sendrNm">{this.props.sender}</td>
                    <td class="text-alignCenter" id="rcvrNm">{this.props.geter}</td>
                    <td class="text-alignCenter" id="itemNm">{this.props.itemName}</td>
                    <td class="text-alignCenter" id="qty">{this.props.itemName}</td>
                </tr>
            </tbody>
        </table>
    </div>
    );
  }
}





export default InfoTable