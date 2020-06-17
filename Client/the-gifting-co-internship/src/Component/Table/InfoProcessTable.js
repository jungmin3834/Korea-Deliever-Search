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
					 <tr>
						<td >{"undefined"}</td>
                    	<td >{"undefined"}</td>
                    	<td >{"undefined"}</td>
                    	<td >{"undefined"}</td>
					</tr>
					<tr>
						<td >{"undefined"}</td>
                    	<td >{"undefined"}</td>
                    	<td >{"undefined"}</td>
                    	<td >{"undefined"}</td>
					</tr>
					<tr>
						<td >{"undefined"}</td>
                    	<td >{"undefined"}</td>
                    	<td >{"undefined"}</td>
                    	<td >{"undefined"}</td>
					</tr>
					<tr>
						<td >{"undefined"}</td>
                    	<td >{"undefined"}</td>
                    	<td >{"undefined"}</td>
                    	<td >{"undefined"}</td>
					</tr>
					<tr>
						<td >{"undefined"}</td>
                    	<td >{"undefined"}</td>
                    	<td >{"undefined"}</td>
                    	<td >{"undefined"}</td>
					</tr>
				</tbody>
			</table>
		</div>
    );
  }
}


export default InfoProcessTable;