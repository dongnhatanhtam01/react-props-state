import React, { Component } from "react";
import DanhSachSanPham from "./DanhSachSanPham";
import Axios from "axios";

export default class BaiTapTruyenFunction extends Component {
  render() {
    return (
      <div className="container">
        <h3 className="text-center text-success">Danh sách sản phẩm</h3>
        <DanhSachSanPham></DanhSachSanPham>
      </div>
    );
  }
  // componentDidMount() {
  //     Axios({
  //         method: "GET",
  //         url: 'localhost:3000/api/phones'
  //     }).then(
  //         function (res) {
  //             console.log(res);
  //         }
  //     ).catch(
  //         function(err) {
  //             console.log(err);
  //         }
  //     );
  // ajax - cung cap promise - tra ve done hoac fail
  // axios return ve promise - vi chung ta khong biet khi nao du lieu tra ve nen moi promise

  // }
}
