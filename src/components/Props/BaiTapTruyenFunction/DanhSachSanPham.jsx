import React, { Component } from "react";

export default class DanhSachSanPham extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sanPhamChiTiet: this.props.mangSanPham[0],
    };
  }

  render() {
    let { mangSanPham } = this.props;
    return (
      <div>
        <div className="row">
          {mangSanPham.map(function (sp, index) {
            return (
              <div className="col-4" key={index}>
                <div className="card text-left">
                  <img className="card-img-top" src={sp.hinhAnh} alt />
                  <div className="card-body">
                    <h4 className="card-title">{sp.tenSP}</h4>
                    <p className="card-text">{sp.heDieuHanh}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="row">{this.state.sanPhamChiTiet.tenSP}</div>
      </div>
    );
  }
}
