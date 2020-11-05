import React, { Component } from "react";
import data from "../../data/dataVongLap.json";

export default class BaiTapVongLap extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mangPhim: data,
    };
  }
  render() {
    const styleHinh = {
      background: "grey",
      //   height: "200px",
      width: "100%",
      maxWidth: "100%",
      height: "100%",
    };
    const styleLayout = {
      display: "flex",
    };
    const styleDeCol4 = {
      padding: "0",
      margin: ".5rem",
      flexDirection: "row",
    };
    const styleContainer = {
      margin: "5%",
    };
    return (
      <div style={styleContainer}>
        <h3>Danh sách Phim</h3>
        <div className="row" style={styleLayout}>
          {this.state.mangPhim.map(function (phim, index) {
            return (
              <div
                key={index}
                className="card col-md-4 text-left"
                style={styleDeCol4}
              >
                <img
                  style={styleHinh}
                  className="card-img-top"
                  src={phim.hinhAnh}
                  alt={phim.biDanh}
                />
                <div className="card-body">
                  <h4 className="card-title">{phim.tenPhim}</h4>
                  <p className="card-text">
                    {phim.moTa.length > 100
                      ? phim.moTa.substr(0, 100) + "..."
                      : phim.moTa}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
