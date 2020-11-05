import React, { Component, Fragment } from 'react'

export default class DemoIf extends Component {
    constructor(props) {
        super(props);
        // thuộc tính có sẵn của component
        // chứa các thuộc tính có khả năng thay đổi bởi một 
        // sự kiện nào đó của component
        this.state = {
            isLogin: false,
            userName: ''
        }
    }

    login = () => {
        // là phương thức kế thừa của class component
        // thay đổi giá trị của state -> gọi hàm render()
        // render lại giao diện
        this.setState({
            isLogin: true,
            userName: 'Đồng Nhật Anh Tâm'
        },()=> console.log(this.state))
    }
    logout = () => {
        this.setState({
            isLogin: false,
            userName: ''
        }, ()=> console.log(this.state))
    }
    // cách 1 dùng phương thức để xác định nội dung render ra giao diện
    // renderContent = (userName) => {
    //     if (this.isLogin) {
    //         return (
    //             <Fragment> Hello {userName} <button>Log out</button></Fragment>
    //         )
    //     }
    //     return (<div>Vui lòng đăng nhập để dùng dịch vụ <button>Log In</button></div>)
    // }
    // Phương thức render của component DemoIf

    render() {
        return (
            <div>
                {this.state.isLogin?<div>Hello {this.state.userName} <button onClick={this.logout}>Log out</button></div>:<div>Vui lòng đăng nhập <button onClick={this.login}>Log In</button></div>}
            </div>
        )
    }
}
