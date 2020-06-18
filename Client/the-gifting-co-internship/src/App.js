import React, { Component } from 'react';
import TrackingSearchPage from './Pages/TrackingSearchPage';
import Logo from './Component/Image/Logo';
import './css/App.css';


class App extends Component {
  constructor(props){
    super(props);
    this.searchMode = this.searchMode.bind(this);
    this.state = ({isSearchMode:false});
  }


  searchMode =()=>{
      this.setState({isSearchMode:true});
  }

  render() {
    return (
      <div className="App">
        {
           (this.state.isSearchMode === false ? (<Logo/>) : null)
        }
        <div style={{width: "100%" , height:"100%",backgroundColor:"#efefef"}}>
          <div div style={{width: "100%" , height:"100%" ,margin:"0 auto"}}>
            <div style={{width: "100%" , height:"100%" ,margin:"0 auto"}}>
              <TrackingSearchPage
                  searchMode = {this.searchMode}
              />
            </div>
        </div>
      </div>
      <div style={{width: "100%" , height:"300px",backgroundColor:"#efefef"}}>
      </div>
    </div>
    );
  }
}

export default App;