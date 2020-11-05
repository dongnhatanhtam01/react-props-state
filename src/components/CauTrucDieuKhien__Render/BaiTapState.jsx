import React, { Component } from 'react'

export default class BaiTapState extends Component {
    constructor(props) {
        super(props);
        this.state = {
            motobikeName: 'black',
            srcImg: './img/502_cbr900rr.jpg'
        }
    }
    changeMotorBranchName = (param) => {
        let imgSource = '';
        switch(param){
            case 'red': {imgSource = './img/503_cbr900rr.jpg'};break;
            case 'black': {imgSource = './img/502_cbr900rr.jpg'};break;
            case 'orange': {imgSource = './img/bb8a01145c2e189d387f49476c574032.jpg'};break;
        };
        this.setState({
            motobikeName: param,
            srcImg: imgSource
        }, console.log(this.state))
    }
    render() {
        const styleButton = {
            marginLeft: '1rem'
        }
        const ImgStyle = {
            maxWidth: '100%'
        }
        return (
            <div className="container">
                <div className="row">
                    <div className="col-4">
                        <img src={this.state.srcImg} alt={this.state.motobikeName} width={400} height={300} style={ImgStyle}/>
                    </div>
                    <div className="col-8">
                        <h2>Vui lòng chọn màu</h2>
                        <button onClick={()=> {this.changeMotorBranchName('red')}} className="btn btn-danger MotorColorRed">MotorColorRed</button>
                        <button onClick={()=> {this.changeMotorBranchName('black')}} style={styleButton} className="btn btn-success MotorColorBlack">MotorColorBlack</button>
                        <button onClick={()=> {this.changeMotorBranchName('orange')}} style={styleButton} className="btn btn-secondary MotorColorOrange">MotorColorOrange</button>
                    </div>
                </div>
            </div>
        )
    }
}
