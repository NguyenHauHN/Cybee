import React, {Component} from 'react';
import './App.css';
import {images} from './config';
import {Row, Col} from 'antd';

class Header extends Component {
    render() {
        return (
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

class Banner extends Component {
    render() {
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

class Function extends Component {
    render() {
        return (
            <div className="Function">
                <Row style={{maxWidth: 1200}} gutter={24} type="flex" justify="center" className="margin-center">
                    <Col xs={24} sm={12} md={6} className="display-flex flex-direction align-items-center">
                        <img className="Img-function" src={images.search}/>
                        <div className="Name-function">
                            Thu thập thông tin hệ điều hành
                        </div>
                    </Col>
                    <Col xs={24} sm={12} md={6} className="display-flex flex-direction align-items-center">
                        <img className="Img-function" src={images.cycle_time}/>
                        <div className="Name-function">
                            Tự động rà quét lỗ hổng bảo mật
                        </div>
                    </Col>
                    <Col xs={24} sm={12} md={6} className="display-flex flex-direction align-items-center">
                        <img className="Img-function" src={images.chart}/>
                        <div className="Name-function">
                            Hỗ trợ trích xuất báo cáo chi tiết theo lỗ hổng
                        </div>
                    </Col>
                    <Col xs={24} sm={12} md={6} className="display-flex flex-direction align-items-center">
                        <img className="Img-function" src={images.exchange}/>
                        <div className="Name-function">
                            Tư vấn khắc phúc sự cố an ninh bảo mật
                        </div>
                    </Col>
                </Row>
            </div>
        );
    }
}

class SecurityWebsite extends Component {
    render() {
        return (
            <div className="Security-website">
                <div className="Title-security">
                    <div className="Question">Website của bạn đã thực sự an toàn?</div>
                    <div className="Description">Hàng năm theo thống kê có hơn 10.000 vụ tấn công website xảy ra tại
                        Việt Nam.
                    </div>
                </div>
                <div className="Content-security">
                    <Row gutter={24}>
                        <Col xs={24} sm={8} style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                            <img src={images.web} className="Img-content"/>
                            <div className="Title-content">
                                Website bị tấn công
                            </div>
                            <div className="Description-content">
                                Website của bạn có nguy cơ bị tấn công làm thay đổi giao diện, cài các mã độc giúp
                                Hacker dễ dàng đánh cắp thông tin.
                            </div>
                        </Col>
                        <Col xs={24} sm={8} style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                            <img src={images.link} className="Img-content"/>
                            <div className="Title-content">
                                Khắc phục sự cố bảo mật
                            </div>
                            <div className="Description-content">
                                Bạn không có đội ngủ trong việc xử lý các sự cố liên quan đến vấn đề an ninh bảo mật cho
                                chính Website của mình.
                            </div>
                        </Col>
                        <Col xs={24} sm={8} style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                            <img src={images.change} className="Img-content"/>
                            <div className="Title-content">
                                Tư vấn đảm bảo an ninh
                            </div>
                            <div className="Description-content">
                                Bạn luôn muốn nhận được những thông tin, cảnh báo SỚM mỗi khi Website của bạn gặp vấn đề
                                hoặc Hacker tấn công.
                            </div>
                        </Col>

                    </Row>
                    <div className="Button-trial">Đăng ký dùng thử</div>
                </div>
            </div>
        );
    }
}

class Solution extends Component {
    render() {
        return (
            <div className="Solution">
                <div className="Title-solution">
                    <div className="Question">Giải pháp đánh giá an ninh và bảo mật website</div>
                    <div className="Description">Phát hiện sớm các lỗ hổng an ninh, từ đó đưa ra bản vá phù hợp là cách
                        hiều quả nhất để bảo vệ Website của bạn.
                    </div>
                </div>
                <div className="Content-solution">
                    <div className="Detail-soltion">
                        <div className="Description-solution">

                            <Row gutter={24} type='flex' style={{margin: '36px 0 26px 0'}}>
                                <Col xs={24} sm={24} md={12}
                                     style={{
                                         display: 'flex',
                                         flexDirection: 'column',
                                         justifyContent: 'space-between',
                                         alignItems: 'baseline'
                                     }}>
                                    <div style={{
                                        fontSize: 20,
                                        color: '#499bd6',
                                        fontWeight: '700',
                                        marginTop: 18,
                                        textAlign: 'left'
                                    }}>Rà quét lỗ
                                        hổng bảo mật
                                    </div>
                                    <div className="Item-solution">
                                        <img src={images.check} className="Img-check"/>
                                        <div className="Content-item">Chủ động phát hiện sớm các lỗ hổng an ninh từ đó
                                            đưa ra giải pháp phù hợp ngăn chặn.
                                        </div>
                                    </div>
                                    <div className="Item-solution">
                                        <img src={images.check} className="Img-check"/>
                                        <div className="Content-item">Chủ động phát hiện sớm các lỗ hổng an ninh từ đó
                                            đưa ra giải pháp phù hợp ngăn chặn.
                                        </div>
                                    </div>
                                    <div className="Item-solution">
                                        <img src={images.check} className="Img-check"/>
                                        <div className="Content-item">Chủ động phát hiện sớm các lỗ hổng an ninh từ đó
                                            đưa ra giải pháp phù hợp ngăn chặn.
                                        </div>
                                    </div>
                                    <div className="Item-solution">
                                        <img src={images.check} className="Img-check"/>
                                        <div className="Content-item">Chủ động phát hiện sớm các lỗ hổng an ninh từ đó
                                            đưa ra giải pháp phù hợp ngăn chặn.
                                        </div>
                                    </div>
                                    <div style={{textAlign: 'center', width: '100%'}}>
                                        <div className="Button-trial">Đăng ký dùng thử</div>
                                    </div>

                                </Col>
                                <Col xs={24} sm={24} md={12}
                                     style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                                    <img className="Img-solution" src={images.solution_1}/>
                                </Col>
                            </Row>
                            <Row gutter={24} type='flex' style={{margin: '36px 0 26px 0'}}>

                                <Col xs={24} sm={24} md={12}
                                     style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                                    <img className="Img-solution" src={images.solution_2}/>
                                </Col>
                                <Col xs={24} sm={24} md={12}
                                     style={{
                                         display: 'flex',
                                         flexDirection: 'column',
                                         justifyContent: 'space-between',
                                         alignItems: 'baseline'
                                     }}>
                                    <div style={{
                                        fontSize: 20,
                                        color: '#499bd6',
                                        fontWeight: '700',
                                        marginTop: 18,
                                        textAlign: 'left'
                                    }}>Khắc phục xử lý sự cố</div>
                                    <div className="Item-solution">
                                        <img src={images.check} className="Img-check"/>
                                        <div className="Content-item">Chủ động phát hiện sớm các lỗ hổng an ninh từ đó
                                            đưa ra giải pháp phù hợp ngăn chặn.
                                        </div>
                                    </div>
                                    <div className="Item-solution">
                                        <img src={images.check} className="Img-check"/>
                                        <div className="Content-item">Chủ động phát hiện sớm các lỗ hổng an ninh từ đó
                                            đưa ra giải pháp phù hợp ngăn chặn.
                                        </div>
                                    </div>
                                    <div className="Item-solution">
                                        <img src={images.check} className="Img-check"/>
                                        <div className="Content-item">Chủ động phát hiện sớm các lỗ hổng an ninh từ đó
                                            đưa ra giải pháp phù hợp ngăn chặn.
                                        </div>
                                    </div>
                                    <div className="Item-solution">
                                        <img src={images.check} className="Img-check"/>
                                        <div className="Content-item">Chủ động phát hiện sớm các lỗ hổng an ninh từ đó
                                            đưa ra giải pháp phù hợp ngăn chặn.
                                        </div>
                                    </div>
                                    <div style={{textAlign: 'center', width: '100%'}}>
                                        <div className="Button-trial">Đăng ký dùng thử</div>
                                    </div>

                                </Col>
                            </Row>
                            <Row gutter={24} type='flex' style={{margin: '36px 0 26px 0'}}>
                                <Col xs={24} sm={24} md={12}
                                     style={{
                                         display: 'flex',
                                         flexDirection: 'column',
                                         justifyContent: 'space-between',
                                         alignItems: 'baseline'
                                     }}>
                                    <div style={{
                                        fontSize: 20,
                                        color: '#499bd6',
                                        fontWeight: '700',
                                        marginTop: 18,
                                        textAlign: 'left'
                                    }}>Tư vấn đảm bảo an ninh</div>
                                    <div className="Item-solution">
                                        <img src={images.check} className="Img-check"/>
                                        <div className="Content-item">Chủ động phát hiện sớm các lỗ hổng an ninh từ đó
                                            đưa ra giải pháp phù hợp ngăn chặn.
                                        </div>
                                    </div>
                                    <div className="Item-solution">
                                        <img src={images.check} className="Img-check"/>
                                        <div className="Content-item">Chủ động phát hiện sớm các lỗ hổng an ninh từ đó
                                            đưa ra giải pháp phù hợp ngăn chặn.
                                        </div>
                                    </div>
                                    <div className="Item-solution">
                                        <img src={images.check} className="Img-check"/>
                                        <div className="Content-item">Chủ động phát hiện sớm các lỗ hổng an ninh từ đó
                                            đưa ra giải pháp phù hợp ngăn chặn.
                                        </div>
                                    </div>
                                    <div className="Item-solution">
                                        <img src={images.check} className="Img-check"/>
                                        <div className="Content-item">Chủ động phát hiện sớm các lỗ hổng an ninh từ đó
                                            đưa ra giải pháp phù hợp ngăn chặn.
                                        </div>
                                    </div>
                                    <div style={{textAlign: 'center', width: '100%'}}>
                                        <div className="Button-trial">Đăng ký dùng thử</div>
                                    </div>

                                </Col>
                                <Col xs={24} sm={24} md={12}
                                     style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                                    <img className="Img-solution" src={images.solution_3}/>
                                </Col>
                            </Row>
                        </div>

                    </div>

                </div>
            </div>
        );
    }
}

class Customer extends Component{
    render(){
        return(
          <div className="Customer">
              <div className="Title-customer">
                    <div className="Question">Khách hàng của chúng tôi</div>
                    <div className="Description">Cảm ơn quý Khách Hàng đã đồng hành cùng chúng tôi
                    </div>
                </div>
          </div>
        );
    }
}

class App extends Component {
    render() {
        return (
            <div className="App">
                <Header/>
                <Banner/>
                <Function/>
                <SecurityWebsite/>
                <Solution/>
                <Customer/>
            </div>
        );
    }
}

export default App;
