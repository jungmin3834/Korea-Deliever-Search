import React from 'react';
import '../css/TrackingSearchStyle.css';
import InfoProcessTable from '../Component/Table/InfoProcessTable';
import InfoTable from '../Component/Table/InfoTable';
import CodeInput from '../Component/Input/CodeInput';
import InvoiceInput from '../Component/Input/InvoiceInput';
import ButtonSubmit from '../Component/Button/ButtonSubmit'

class TrackingSearchScreen extends React.Component {
  constructor(props) {
    super(props);

    this.inputCode = this.inputCode.bind(this);
    this.inputInvoice = this.inputInvoice.bind(this);

    var infoList = {number:"",sender:"",geter:"",info:"",count:""};
    this.state = { 
      process: null, 
      info:infoList, 
      code: '' ,
      invoice: '' , 
      isData : false,
    };
  }

  mySubmitHandler = (event) => {
    event.preventDefault();
    this.setState({isData: !this.state.isData});
    if(this.state.code === "" || this.state.invoice === "")
    return;
    let dataFrom = '?t_code=' + this.state.code + '&t_invoice=' + this.state.invoice;
    let url = 'http://localhost:7878/api/trackingInfo' + dataFrom;
    fetch(url).then(response => response.json())
        .then(data => {
            if(data.status != null){
                alert("Error! : " + data.code + " : " + data.msg);
                return;
            }

            let infoList = {number:data.invoiceNo,sender:data.senderName,geter:data.receiverName,itemName:data.itemName,count:""};
            let htmlCode = data.trackingDetails.map((commend) => {
              return (
                <tr>
						      <td class="text-alignCenter" >{commend.kind}</td>
                  <td class="text-alignCenter" >{commend.timeString}</td>
						      <td class="text-alignCenter" >{commend.telno}</td>
						      <td class="text-alignCenter" >{commend.where}</td>
					      </tr>
                );
              });
            
           this.setState({process:htmlCode, info:infoList});
        });

  }

  checkStringIsNumber = (text)=>{
    //숫자 혹은 다른 값이 들어 왔을 때 처리 하는 코드 입니다.
    var data = "";
    for (const c of text) { data += (c !== ' ' &&c >= 0 && c <= 9) ? c : '';}  
    return data;
  }


  inputInvoice = text => this.setState({invoice: this.checkStringIsNumber(text)});

  inputCode = data => this.setState({process : data});
  

  render() {
    return (  
      <div style={{width:"100%", height:"100%"}}> 
        <div style={{height:"100%", margin:"10% 0% 8% 0%"}}>
        <div >
            <h1 style={{paddingTop:"10%" ,paddingBottom:"2%"}}>검색창</h1> 
        </div>
         <form onSubmit={this.mySubmitHandler}>
         <div style={{marginTop:"0.3%"}}>
            <CodeInput   inputCode={this.inputCode} />
          </div>
          <div style={{marginTop:"0.3%"}}>
            <InvoiceInput invoice={this.state.invoice} inputInvoice={this.inputInvoice}/>
          </div>
          <div style={{marginTop:"2%"}}>
            <ButtonSubmit/>
          </div>
        </form>
        <div style={{paddingTop:"5%", margin:"auto", width:"100%",height:"100%"}}>
        { 
          this.state.isData === true ? (
            <div>
              <div style={{marginBottom:"5%"}}>
                <InfoTable process={this.state.process}/>
              </div>
              <div>
                <InfoProcessTable process={this.state.process}/>
              </div>
            </div>) : null
         }
        </div>
        </div>
      </div>

    );
  }
}

export default TrackingSearchScreen;