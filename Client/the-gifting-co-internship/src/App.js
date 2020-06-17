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
      <div  style={{width: "100%" , height:"50%" }}> 
      <img src={Background} alt="backGround"></img>
      </div>
      <div style={{backgroundColor:"#efefef", width: "1130px", height: "1000px" ,margin:"0 auto"}}>
          <div style={{margin:"10% 0% 8% 0%" }}>
            <Tracking/>
          </div>
      </div>
    </div>
    );
  }
}

export default App;