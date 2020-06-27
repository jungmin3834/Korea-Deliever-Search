import React from "react";
import "../css/TrackingSearchStyle.css";
import InfoProcessTable from "../Component/Table/InfoProcessTable";
import InfoTable from "../Component/Table/InfoTable";
import InvoicApiForm from "../Component/Form/InvoicApiForm";

class TrackingSearchPage extends React.Component {
  constructor(props) {
    super(props);

    let infoList = { number: "", sender: "", geter: "", info: "", count: "" };
    this.state = {
      process: null,
      info: infoList,
      code: "04",
      invoice: "",
      isData: false,
      isConnect: false,
      history : null,
      historyData : {},
    };

    this.inputCode = this.inputCode.bind(this);
    this.inputInvoice = this.inputInvoice.bind(this);
    this.mySubmitHandler = this.mySubmitHandler.bind(this);
    this.openHistory = this.openHistory.bind(this);
    this.onopenHistoryElement = this.onopenHistoryElement.bind(this);
  }

  mySubmitHandler = async (event) => {
    //api 조회 함수 입니다.
    if(event !== null)
        event.preventDefault();

    if (this.state.isConnect === true) {
      //버튼이 두번 클릭 되었을 시
      alert("데이터 조회중입니다.");
      return;
    }
  
    if (this.state.code === "" ||this.state.invoice === "" ||   this.state.invoice.length < 9 ||   this.state.invoice.length > 13 ) {
      //입력값이 비어 있을 경우
      this.setState({ isConnect: false, isData: false });
      alert("데이터 입력 혹은 운송장 번호를 다시 한번 확인해주세요");
      return;
    }
    this.setState({ isConnect: true, isData: false });
    
    let jsonData = { code: this.state.code, invoice: this.state.invoice };
    let data = await fetch("http://localhost:7878/api/trackingInfo", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(jsonData),
    }).then(response=>response.json()).catch(function (error) {
    });

    if (data === null || data === undefined || data.result === "N") {
      alert("Error! : 유효하지 않은 코드 혹은 운송장 번호를 찾을수가 없습니다.");
      this.setState({  invoice : "",isConnect: false, isData: false });
    } else if (data.status != null) {
      this.setState({ invoice : "", isConnect: false, isData: false });
      alert("Error! : " + data.code + " : " + data.msg);
    } else {
      this.setState({
        invoice : "",
        process: this.createInfoProcessTable(data),
        info: this.createInfoTable(data),
        isData: true,
        isConnect: false,
      });
      this.props.searchMode();
    }
    //get방식용 let url = 'http://localhost:7878/api/getTrackingInfo?t_code=' + this.state.code + '&t_invoice=' + this.state.invoice;
  };

  checkStringIsNumber = (text) => {
    //숫자 혹은 다른 값이 들어 왔을 때 처리 하는 코드 입니다.
    let data = "";
    for (const c of text) {
      data += c !== " " && c >= 0 && c <= 9 ? c : "";
    }
    return data;
  };

  createInfoTable = (data) => {
    //info 테이블 정보를 만들어주는 함수입니다.
    return {
      number: data.invoiceNo,
      sender: data.senderName,
      geter: data.receiverName,
      itemName: data.itemName,
      count: "",
    };
  };

  createInfoProcessTable = (data) => {
    //infoProccess 테이블로 진행과정을 만들어주는 함수입니다.
    return data.trackingDetails.map((commend) => {
      return (
        <tr key={commend.time}>
          <td>{commend.kind}</td>
          <td>{commend.timeString}</td>
          <td>{commend.telno + " " + commend.manName}</td>
          <td>{commend.where}</td>
        </tr>
      );
    });
  };

  onopenHistoryElement = (name) =>{
  
    let data = this.state.historyData[name];
    this.setState({invoice:name , code:data.code}, function () {
      this.mySubmitHandler(null);
    });

  }


  inputInvoice = (text) =>
    this.setState({ invoice: this.checkStringIsNumber(text) }); //invoice 부분을 바꿔주기 위한 끌어올리기 이벤트입니다.

  inputCode = (data) => this.setState({ code: data }); //code 부분을 바꿔주기 위한 끌어올리기 이벤트입니다.


  openHistory = () =>{
    if(this.state.history != null){
        this.setState({history:null,historyData:{}});
        return;
    }
    let historyList = {};
    const fun = this.onopenHistoryElement;
    fetch("http://localhost:7878/api/getAllHistory").then(response=>response.json()).then(json=>{
        let data=  json.map(function (item) {
          historyList[item.invoice] = item;
          console.log(item);
          return (<div><button name={item.invoice} style={{ marginLeft:"1%" ,width:"34.2%",height:"40px"}} onClick={(e)=>fun(e.target.name)}>{item.invoice}</button></div>);
        });
     this.setState({history:data , historyData: historyList});
    }).catch(function (error) {

    });
  }

  render() {
    return (
      <div style={{ width: "100%", height: "100%" }}>
        <div style={{ height: "100%" }}>
         <div style={{position:"absolute", paddingLeft:"1270px", paddingTop:"187px", width:"30%" , margin:"auto"}}>
           <div style={{position:"absolute", paddingLeft:"0", paddingTop:"0", width:"40%"}}>
                <button className="btn-search" onClick={()=>this.openHistory()} >{"기록보기"}</button>
                <div> 
                    {this.state.history}
                </div>
           </div>
          </div>
          <div style={{ paddingTop: "4%" }}>
            <h1>검색창</h1>
          </div>  
          <InvoicApiForm
            code ={this.state.code}
            mySubmitHandler={this.mySubmitHandler}
            invoice={this.state.invoice}
            inputInvoice={this.inputInvoice}
            inputCode={this.inputCode}
          />
           <div>          
            
          </div>
          <div style={{paddingTop: "1%",  margin: "auto",width: "100%", height: "100%", }}  >
            {this.state.isData === true ? (
              <div>
                <div style={{ marginBottom: "2%" }}>
                  
                  <InfoTable info={this.state.info} />
                
                </div>
                <div>
                  <InfoProcessTable process={this.state.process} />
                </div>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    );
  }
}

export default TrackingSearchPage;
