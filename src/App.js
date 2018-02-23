import React, { Component } from 'react';
import './App.css';
import { images } from './config';
import { Row, Col } from 'antd';

class Header extends Component{
  render(){
    return(
      <div className="Header">
        <div className="Header-gradient"></div>
        <div className="Header-inner">
          <img src={images.logo_host} className="Logo-host"/>
          <img src={images.cybee_logo_2} className="Logo-cybee-2"/>
        </div>
      </div>
    )
  }
}

class Banner extends Component{
  render(){
    return (
      <div className="Banner">
        <div>

        </div>
      </div>
    )
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <Banner/>
      </div>
    );
  }
}

export default App;
