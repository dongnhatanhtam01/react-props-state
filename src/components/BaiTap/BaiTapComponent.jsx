import React, { Component } from "react";
import Header from "./Header";
import Slider from "./Slider";
import ProductList from "./ProductList";
import Footer from "./Footer";
import dataPhone from "../../data/dataPhone.json";
import Modal from "./Modal";
export default class BaiTapComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mangDienThoai: dataPhone,
      sanPhamModal: dataPhone[0],
    };
  }
  // Dữ liệu cần nhận ở đâu - ở đây
  xemChiTiet = (sanPhamChiTiet) => {
    this.setState({
      sanPhamModal: sanPhamChiTiet,
    });
  };
  render() {
    return (
      <div>
        <Header></Header>
        <Slider></Slider>
        <ProductList
          mangSanPham={this.state.mangDienThoai}
          xemChiTiet={this.xemChiTiet}
        ></ProductList>
        <Footer></Footer>
        <Modal sanPhamModal={this.state.sanPhamModal}></Modal>
      </div>
    );
  }
}
