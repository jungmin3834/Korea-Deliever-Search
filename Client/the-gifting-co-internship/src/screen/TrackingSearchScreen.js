import React from 'react';
import '../css/TrackingSearchStyle.css';

class TrackingSearchScreen extends React.Component {
  constructor(props) {
    super(props);
    var infoList = {number:"",sender:"",geter:"",info:"",count:""};
    this.state = {process: null, info:infoList, code: '' ,invoice: ''  };
  }

  mySubmitHandler = (event) => {
    var dataFrom = '?t_code=' + this.state.code + '&t_invoice=' + this.state.invoice;
    var url = 'http://localhost:7878/api/trackingInfo' + dataFrom;
    fetch(url).then(response => response.json())
        .then(data => {
            if(data.status != null){
                alert("Error! : " + data.code + " : " + data.msg);
                return;
            }

            var infoList = {number:data.invoiceNo,sender:data.senderName,geter:data.receiverName,itemName:data.itemName,count:""};
            var htmlCode = [];
           for(const commend of data.trackingDetails){
                      htmlCode.push(
                        <tr>
						    <td class="text-alignCenter" >{commend.kind}</td>
                            <td class="text-alignCenter" >{commend.timeString}</td>
						    <td class="text-alignCenter" >{commend.telno}</td>
						    <td class="text-alignCenter" >{commend.where}</td>
					    </tr>
                      );    
           }
           this.setState({process:htmlCode, info:infoList});
        });
     event.preventDefault();
  }

  checkStringIsNumber = (text)=>{
    //숫자 혹은 다른 값이 들어 왔을 때 처리 하는 코드 입니다.
    var data = "";
    for (const c of text) { data += (c !== ' ' &&c >= 0 && c <= 9) ? c : '';}  
    return data;
  }

  inputInvoiceChange = (text)=>{this.setState({invoice: this.checkStringIsNumber(text)}); }

  inputCodeChange = (text)=>{ this.setState({code: this.checkStringIsNumber(text)});}
  





  render() {
    return (  
      <div >
        <div style={{margin:"10% 0% 8% 0%"}}>
        <div>
            <h1>검색창</h1>
        </div>
         <form onSubmit={this.mySubmitHandler}>
            <div class="form-group">
              <label for="t_code">택배사 코드 : </label>
              <input type="text"    
                value={this.state.code} 
                onPaste={(e)=>{this.inputCodeChange(e.clipboardData.getData('Text'))}} 
                onInput={(e)=>{this.inputCodeChange(e.target.value)}}  
                name="t_code"
                placeholder="택배사 코드"/>
            </div>
            <div class="form-group">
              <label for="t_invoice">운송장 번호 : </label>
              <input type="text" 
                value={this.state.invoice} 
                onPaste={(e)=>{this.inputInvoiceChange(e.clipboardData.getData('Text'))}} 
                onInput={(e)=>{this.inputInvoiceChange(e.target.value)}}  
                name="t_invoice"
                placeholder="운송장 번호"
                />
            </div>
            <button type="submit" class="btn-search" >조회하기</button>
        </form>
        </div>
        <div>
        <div style={{marginLeft:"18%"}}>
            <label style={{marginRight:"20%"}}>
                조회결과
            </label>
            <table>
                 <colgroup>
                    <col style={{width:"20%"}}/>
					<col style={{width:"20%"}}/>
					<col style={{width:"20%"}}/>
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
                        <td class="text-alignCenter" id="invcNo">{this.state.info.number}</td>
						<td class="text-alignCenter" id="sendrNm">{this.state.info.sender}</td>
						<td class="text-alignCenter" id="rcvrNm">{this.state.info.geter}</td>
						<td class="text-alignCenter" id="itemNm">{this.state.info.itemName}</td>
						<td class="text-alignCenter" id="qty">1</td>
					</tr>
				</tbody>
			</table>
		</div>
        <div style={{marginTop:"5%", marginLeft:"18%" }}>
            <label style={{marginRight:"20%"}}>
                상품 상태 확인
            </label>
            <table>
                 <colgroup>
                    <col style={{width:"20%"}}/>
					<col style={{width:"20%"}}/>
					<col style={{width:"20%"}}/>
					<col style={{width:"20%"}}/>
				</colgroup>
				<thead>
					<tr>
					    <th scope="col">처리</th>
					    <th scope="col">상품상태</th>
						<th scope="col">전화번호</th>
						<th scope="col">상품 정보</th>
					</tr>
				 </thead>
				 <tbody>
					{this.state.process}
				</tbody>
			</table>
		</div>
        </div>
      </div>

    );
  }
}

export default TrackingSearchScreen;