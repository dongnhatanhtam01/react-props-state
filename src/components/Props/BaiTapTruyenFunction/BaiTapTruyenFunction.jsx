import React, { Component } from 'react'
import DanhSachSanPham from './DanhSachSanPham';
import dataPhone from '../../../data/dataPhone.json'
export default class BaiTapTruyenFunction extends Component {
    constructor (props) {
        super(props)
        this.state = {
            mangSanPham: dataPhone
        }
    }
    render() {
        return (
            <div className='container'>
                <h3 className="text-center text-success">Danh sách sản phẩm</h3>
                <DanhSachSanPham mangSanPham={this.state.mangSanPham}></DanhSachSanPham>
            </div>
        )
    }
}
