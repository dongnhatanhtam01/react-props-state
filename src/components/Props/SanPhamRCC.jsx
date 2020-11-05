import React, { Component } from "react";

export default class SanPhamRCC extends Component {
  constructor(props) {
    super(props);
    this.state = "";
  }
  render() {
    // bốc tách thuộc tính ban đầu
    // bốc tách thuộc tính cuối cùng
    // props const: không chỉnh sửa bên trong được - đó là qui định
    const { hinhAnh, tenPhim, moTa } = this.props.phim_input2;
    const styleHeight = {
        height: '300px'
    }
    return (
      <div className="card text-left" >
        <img className="card-img-top" style={styleHeight} src={hinhAnh} alt={moTa} />
        <div className="card-body">
          <h4 className="card-title">{tenPhim.length>15?tenPhim.substr(0,13)+'...':tenPhim}</h4>
          <p className="card-text">
            {moTa.length > 100 ? moTa.substr(0, 100) + "..." : moTa}
          </p>
          <button>Chi Tiết Phim</button>
        </div>
      </div>
    );
  }
}
