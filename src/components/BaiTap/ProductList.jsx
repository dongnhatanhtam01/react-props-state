import React, { Component } from "react";
import Product from "./Product";
export default class ProductList extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    // lấy giá trị mangSanPham tu cha truyen vao thông qua this.próps
    let {mangSanPham} = this.props
    return (
      <div>
        <h3 className="text-">BEST PRODUCT</h3>
        <div className="row">
          {mangSanPham.map(function(dt, index){
            return (
              <div className="col-3" key={index}>
                <Product sanPhamCon={dt}></Product>
              </div>
            )
          })}
        </div>
      </div>
    );
  }
}
