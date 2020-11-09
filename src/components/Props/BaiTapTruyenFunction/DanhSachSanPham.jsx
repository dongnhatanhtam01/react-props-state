import React, { Component } from "react";
import dataPhone from "../../../data/dataPhone.json";

export default class DanhSachSanPham extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sanPhamChiTiet: dataPhone[0],
    };
  }
  handelRenderDanhSachSanPham = () => {
    return dataPhone.map((dt, index) => {
      return (
        <div className="card col-4 text-left" key={index}>
          <img className="card-img-top" src={dt.hinhAnh} alt={dt.maSP} />
          <div className="card-body">
            <h4 className="card-title">{dt.tenSP}</h4>
            <p className="card-text">Body</p>
            <button onClick={()=>this.xemChiTiet(dt)}>CLick</button>
          </div>
        </div>
      );
    });
  };
  xemChiTiet(dt) {
    this.setState({
      sanPhamChiTiet: dt
    })
  }
  render() {
    return (
      <div className="container">
        <div className="row">{this.handelRenderDanhSachSanPham()}</div>

        <div className="row">
          <div className="col-6 text-left">
            <h3>{this.state.sanPhamChiTiet.tenSP}</h3>
            <img
              src={this.state.sanPhamChiTiet.hinhAnh}
              width={250}
              height={300}
            />
          </div>
          <div className="col-6">
            <h3>Thông số kỹ thuật</h3>
            <table className="table">
              <tr>
                <th>Màn hình</th>
                <th>{this.state.sanPhamChiTiet.manHinh}</th>
              </tr>
              <tr>
                <th>Hệ điều hành</th>
                <th>{this.state.sanPhamChiTiet.heDieuHanh}</th>
              </tr>
              <tr>
                <th>Camera trước</th>
                <th>{this.state.sanPhamChiTiet.cameraTruoc}</th>
              </tr>
              <tr>
                <th>Camera sau</th>
                <th>{this.state.sanPhamChiTiet.cameraSau}</th>
              </tr>
              <tr>
                <th>RAM</th>
                <th>{this.state.sanPhamChiTiet.ram}</th>
              </tr>
              <tr>
                <th>ROM</th>
                <th>{this.state.sanPhamChiTiet.rom}</th>
              </tr>
            </table>
          </div>
        </div>
      </div>
    );
  }
}
