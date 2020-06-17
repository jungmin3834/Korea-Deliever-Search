import React, { Component } from 'react';
import Tracking from './screen/TrackingSearchScreen';
import './css/App.css';
import Background from './logo.jpg';


class App extends Component {
  constructor(props) {
    super(props);
    this.state= ({process:null});
    this.clickProcess = this.clickProcess.bind(this);
  }

  clickProcess = (data) =>{
    this.setState({process : data});
  }
  
  render() {
    return (
      <div className="App">
      <div style={{width: "100%" , height:"10%" ,marginTop:"50px"}}> 
         <div style={{width:"100%",height:"10%"}}>
           <img style={{width:"10%",height:"10%",margin:"0 auto"}} src={Background} alt="backGround"></img>
           <label style={{fontSize:"400%",margin:"0 auto"}}>
              The-Gifting-Co.
           </label>    
         </div>
      </div>
      <div style={{width: "100%" , height:"1500px",backgroundColor:"#efefef"}}>
        <div style={{width: "100%" , height:"100%" ,margin:"0 auto"}}>
            <div style={{width: "100%" , height:"100%" ,margin:"0 auto"}}>
              <Tracking/>
            </div>
        </div>
      </div>
     
      <div style={{width: "100%" , height:"200px" , backgroundColor:"#efefef"}}>

      </div>
    </div>
    );
  }
}

export default App;