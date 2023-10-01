import React from "react";
import "./sec4.css";
import pic1 from "./images/home sofa.jpeg";
function Section4() {
  return (
    <div className="section4">
      <h1 style={{ textAlign: "center", paddingTop: "2rem" }}>Our Reviews</h1>
      <div className="part001">
        <div className="part0011">
          <h2>R.T.sathish 01</h2>
          <br />
          Lorem Ipsum is simply dummy text of the printing and
          <br />
          typesetting industry. Lorem Ipsum has been the head.
        </div>
        <div
          className="part0011"
          style={{ backgroundColor: "rgb(27, 73, 51)", color: "whitesmoke" }}
        >
          <h2>S.dhaswin 02</h2>
          <br />
          Lorem Ipsum is simply dummy text of the printing and
          <br />
          typesetting industry. Lorem Ipsum has been the head.
        </div>
        <div className="part0011">
          <h2>S.krithik 03</h2>
          <br />
          Lorem Ipsum is simply dummy text of the printing and
          <br />
          typesetting industry. Lorem Ipsum has been the head.
        </div>
      </div>
      <div className="part002">
        <img
          src={pic1}
          alt="Error"
          style={{ height: "300px", width: "80%", borderRadius: "8px" }}
        ></img>
      </div>
    </div>
  );
}

export default Section4;
