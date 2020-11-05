import React, { Component } from "react";

export default class Slider extends Component {
  render() {
    return (
      <div id="demo" className="carousel slide" data-ride="carousel">
        {/* Indicators */}
        <ul className="carousel-indicators">
          <li data-target="#demo" data-slide-to={0} className />
          <li data-target="#demo" data-slide-to={1} className="active" />
          <li data-target="#demo" data-slide-to={2} className />
        </ul>
        {/* The slideshow */}
        <div className="carousel-inner">
          <div className="carousel-item">
            <img
              src="./img/bb8a01145c2e189d387f49476c574032.jpg"
              alt="Los Angeles"
              width="100%"
              height={500}
            />
          </div>
          <div className="carousel-item active">
            <img
              src="./img/502_cbr900rr.jpg"
              alt="Chicago"
              width="100%"
              height={500}
            />
          </div>
          <div className="carousel-item">
            <img
              src="./img/503_cbr900rr.jpg"
              alt="New York"
              width="100%"
              height={500}
            />
          </div>
        </div>
        {/* Left and right controls */}
        <a className="carousel-control-prev" href="#demo" data-slide="prev">
          <span className="carousel-control-prev-icon" />
        </a>
        <a className="carousel-control-next" href="#demo" data-slide="next">
          <span className="carousel-control-next-icon" />
        </a>
      </div>
    );
  }
}
