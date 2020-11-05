import React, { Component } from "react";

export default class SinhVien extends Component {
  // Thuộc tính hoten, lop thuộc class SinhVien
  hoten = " Nguyễn Văn A";
  lop = "FrontEnd XXX";

  // phương thức khác
  renderThongTinSinhVien = (param) => {
    // đặt biến thì ở trong phương thức
    // biến chỉ hoạt động trong phương thức thôi
    // không gọi ở ngoài được
    return (
      <ul>
        {/* giống như stringTemplate */}
        <li>Họ tên: {this.hoten}</li>
        <li>Lớp: {this.lop}</li>
        <li>Tên trung tâm: {param}</li>
      </ul>
    );
  };
  // Phương thức thuộc lớp SinhVien
  render() {
    const tenTrungTam = "CYBERSOFT";

    return <div classname="container">{this.renderThongTinSinhVien(tenTrungTam)}</div>;
  }
}
