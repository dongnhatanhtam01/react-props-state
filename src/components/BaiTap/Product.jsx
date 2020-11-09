import React, { Component } from "react";

export default class Product extends Component {
  render() {
    let {sanPhamCon,xemChiTiet} = this.props;
    
    return (
      <div className="container">
        <div className="card text-white bg-primary">
          <img className="card-img-top" src={sanPhamCon.hinhAnh} alt />
          <div className="card-body">
            <h4 className="card-title">{sanPhamCon.tenSP}</h4>
            <p className="card-text">Hệ Điều Hành: {sanPhamCon.heDieuHanh}</p>
            <button className="btn btn-danger mr-2"  data-toggle="modal" data-target="#modelId" onClick={()=> xemChiTiet(sanPhamCon)}>Details</button>
            <button className="btn btn-dark">List</button>
          </div>
        </div>
      </div>
    );
  }
}
