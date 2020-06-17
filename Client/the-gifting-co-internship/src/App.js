import React from 'react';
import Tracking from './screen/TrackingSearchScreen';
import './css/App.css';
import Background from './logo.jpg'

function App() {
  return (
    <div className="App">
      <div  style={{width: "100%" , height:"50%" }}> 
        <img src={Background} ></img>
      </div>
 
      <div style={{backgroundColor:"#efefef", width: "1130px", height: "1000px" ,margin:"0 auto"}}>
          <div style={{margin:"10% 0% 8% 0%" }}>
          <Tracking></Tracking>
          </div>
      </div>
    </div>
  );
}

export default App;
