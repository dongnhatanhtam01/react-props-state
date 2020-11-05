import React, { Component } from "react";

export default class DemoVongLap2 extends Component {
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
  
  render() {
    return (
      <div className="container">
        <h3>Demo Vòng Lặp React</h3>
        <table className="table">
          <thead>
            <tr>
              <th>#</th>
              <th>Tên Sản Phẩm</th>
              <th>Giá cả</th>
            </tr>
          </thead>
          <tbody>
              {/* dùng hàm như biến trong method cũng được  */}
              {/* dùng method ngoài render() cũng được  */}
              {/* hoặc dùng cách này trực tiếp trong thẻ JSX  */}
              {/* Cùng hiệu năng */}
            {this.state.mangSanPham.map(function (sp, index) {
                    return (
                        <tr>
                            <td key={index}>{sp.maSP}</td>
                            <td>{sp.tenSP}</td>
                            <td>{sp.giaSP}</td>
                        </tr>
                    );
                })}
          </tbody>
        </table>
      </div>
    );
  }
}
