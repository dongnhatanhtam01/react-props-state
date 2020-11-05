import React from "react";

export default function SanPhamRFC({phim_input,...restParam}) {
    // let {phim_input} = props;
    //nhìn lên cách viết khác
  return (
    <div className="card text-left">
      <img className="card-img-top" src={phim_input.hinhAnh} alt={phim_input.moTa} />
      <div className="card-body">
        <h4 className="card-title">{phim_input.tenPhim}</h4>
        <p className="card-text">{phim_input.moTa.length>100?phim_input.moTa.substr(0,100)+'...':phim_input.moTa}</p>
      </div>
    </div>
  );
}
