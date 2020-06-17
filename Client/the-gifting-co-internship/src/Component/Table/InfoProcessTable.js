import React, { Component } from 'react';

//
//{this.props.process}
class InfoProcessTable extends Component {
  render() {
    return (
        <div>
            <label style={{margin:"auto"}}>
                상품 상태 확인
            </label>
        	<table style={{margin:"auto"}}> 
                 <colgroup style={{width:"100%"}}>
                    <col style={{width:"20%"}}/>
					<col style={{width:"20%"}}/>
					<col style={{width:"20%"}}/>
					<col style={{width:"10%"}}/>
				</colgroup>
				<thead>
					<tr>
					    <th scope="col">처 리</th>
					    <th scope="col">상품상태</th>
						<th scope="col">전화번호</th>
						<th scope="col">상품 정보</th>
					</tr>
				 </thead>
				 
				 <tbody>
					<td  id="invcNo">{"asdasd"}</td>
                    <td  id="sendrNm">{"asdasd"}</td>
                    <td class="text-alignCenter" id="rcvrNm">{"asdasd"}</td>
                    <td class="text-alignCenter" id="itemNm">{"asdasd"}</td>
				</tbody>
			</table>
		</div>
    );
  }
}


export default InfoProcessTable;