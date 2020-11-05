import React, { Component } from "react";

export default class DemoVongLap extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mangSanPham: [
        { maSP: 1, tenSP: "IphoneX", giaSP: 1000 },
        { maSP: 2, tenSP: "SamSung Galaxy", giaSP: 2000 },
        { maSP: 3, tenSP: "Huawei P30 pro", giaSP: 3000 },
        { maSP: 4, tenSP: "vivo", giaSP: 4000 },
      ],
    };
  }

  // Viết phương thức render các sản phẩm thành các tag tr
  renderSanPham = () => {
    let contentTable = [];
    for (let i = 0; i < this.state.mangSanPham.length; i++) {
      const sp = this.state.mangSanPham[i];
      contentTable.push(
        <tr>
          <td key={i}>{sp.maSP}</td>
          <td>{sp.tenSP}</td>
          <td>{sp.giaSP}</td>
        </tr>
      );
    }
    console.log(contentTable);
    return contentTable;
  };

  render() {
    const styleChu = {
      color: "white",
      background: "black",
      padding: "1rem",
      textAlign: "center",
    };
    return (
      <div className="container">
        <h3 style={styleChu}>Demo Vòng Lặp React</h3>
        <table className="table">
          <thead>
            <tr>
              <th>#</th>
              <th>Tên Sản Phẩm</th>
              <th>Giá cả</th>
            </tr>
          </thead>
          <tbody>{this.renderSanPham()}</tbody>
        </table>
      </div>
    );
  }
}
