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
        <div className="Content-banner">
            <div className="Quote Quote-left">Miễn phí 90 ngày</div>
            <div>RÀ QUÉT LỖ HỔNG BẢO MẬT WEBSITE</div>
            <div className="Quote Quote-right">trị giá 1.800.000 vnd</div>
        </div>
          <div>
              <div className="Button-trial">Đăng ký dùng thử</div>
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
