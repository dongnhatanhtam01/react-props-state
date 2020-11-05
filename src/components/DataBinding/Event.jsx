import React, { Component } from 'react'

export default class Event extends Component {
    // Phương thức xử lý cho nút click
    handleShowMessage = (sms) => {
        alert(sms)
    }

    render() {
        let sms = "Hello CyberSoft!"
        return (
            <div className="container">
                {/* truyển function dưới dạng tham số thì không có ()  */}
                {/* <button onClick={this.handleShowMessage.bind(this, sms)} className="primary">Show sms</button> */}
                <button onClick={() => this.handleShowMessage(sms)} className="primary">Show sms</button>
            </div>
        )
    }
}
