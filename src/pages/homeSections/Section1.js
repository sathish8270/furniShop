import React from "react";
import sec1 from "./images/section1.jpg";

import "./sec1.css";
function Section1() {
  return (
    <div>
      <div className="headline">
        <h1>
          Creative Home Simplify Your
          <br />
          Furniture
        </h1>
        <p style={{ fontWeight: "600", fontSize: "15px", marginTop: "6px" }}>
          Lorem Ipsum is simply dummy text of thr printing and <br />
          typesetting industry. Lorem Ipsum has been the head.
        </p>
        <button type="button" className="shopnowbutton">
          SHOP NOW
        </button>
      </div>

      <img
        src={sec1}
        alt="error"
        className="sec1img"
        style={{ width: "100%" }}
      ></img>
      <div className="interbox">
        <div className="content">
          <h2>7</h2>Year
          <br />
          Experience
        </div>
        <div className="content">
          <h2>2</h2>Opened in
          <br />
          the country
        </div>
        <div className="content">
          <h2>15k+</h2>furniture
          <br />
          slod
        </div>
        <div>
          <h2>250k+</h2>
          Variant
          <br />
          Funiture
        </div>
      </div>
    </div>
  );
}

export default Section1;
