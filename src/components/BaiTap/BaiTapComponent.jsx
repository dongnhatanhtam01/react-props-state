import React, { Component } from 'react'
import Header from './Header'
import Slider from './Slider'
import ProductList from './ProductList'
import Footer from './Footer'
import dataPhone from '../../data/dataPhone.json'
export default class BaiTapComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            mangDienThoai: dataPhone
        }
    }
    render() {
        return (
            <div>
                <Header></Header>
                <Slider></Slider>
                <ProductList mangSanPham={this.state.mangDienThoai}></ProductList>
                <Footer></Footer>
            </div>
        )
    }
}
