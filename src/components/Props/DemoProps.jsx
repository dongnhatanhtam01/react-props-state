import React, { Component } from "react";
import data from "../../data/dataVongLap.json";
import SanPhamRCC from "./SanPhamRCC";
import SanPhamRFC from "./SanPhamRFC";

export default class DemoProps extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mangPhim: data,
    };
  }
  render() {
    return (
      <div className="container">
        <div className="row">
          {this.state.mangPhim.map(function (phim, index) {
            return (
              <div className="col-4" key={index}>
                {/* <SanPhamRFC phim_input={phim}></SanPhamRFC> */}
                <SanPhamRCC phim_input2={phim} />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
