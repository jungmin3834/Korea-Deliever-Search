import React, { Component } from 'react';

//
//{this.props.process}
class InfoProcessTable extends Component {
  render() {
    return (
        <div>
            <label style={{fontSize:"200%", margin:"auto"}}>
                상품 상태 확인
            </label>
        	<table style={{paddingTop:"1%", margin:"auto"}}> 
                 <colgroup style={{width:"100%"}}>
				 	<col style={{width:"250px"}}/>
                	<col style={{width:"250px"}}/>
                	<col style={{width:"250px"}}/>
                	<col style={{width:"250px"}}/>
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
					 {this.props.process}
				</tbody>
			</table>
		</div>
    );
  }
}


export default InfoProcessTable;