import React, { Component } from "react";

export default class SanPham extends Component {
  render() {
    let { dt, xemChiTiet } = this.props;
    return (
      <div className="card col-4 text-left">
        <img className="card-img-top" src={dt.hinhAnh} alt={dt.maSP} />
        <div className="card-body">
          <h4 className="card-title">{dt.tenSP}</h4>
          <p className="card-text">Body</p>
          <button className="btn btn-primary" onClick={() => xemChiTiet(dt)}>
            CLick
          </button>
        </div>
      </div>
    );
  }
}
