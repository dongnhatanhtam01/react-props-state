import React, { Component } from "react";

export default class Product extends Component {
  render() {
    let {sanPhamCon} = this.props;
    return (
      <div className="container">
        <div className="card text-white bg-primary">
          <img className="card-img-top" src={sanPhamCon.hinhAnh} alt />
          <div className="card-body">
            <h4 className="card-title">{sanPhamCon.tenSP}</h4>
            <p className="card-text">Hệ Điều Hành: {sanPhamCon.heDieuHanh}</p>
          </div>
        </div>
      </div>
    );
  }
}
