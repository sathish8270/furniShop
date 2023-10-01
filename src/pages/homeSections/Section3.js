import React from "react";
import pic01 from "./images/lamp03.png";
import "./sec3.css";
function Section3() {
  return (
    <div className="container3">
      <div className="sec3part1">
        <h2>
          Design your dream home with <br /> the perfect furniture
        </h2>
        <br />
        Lorem Ipsum is simply dummy text of the <br />
        printing and typesetting industry. Lorem <br /> Ipsum has been the head.
        <br /> <br />
        <button type="button" className="click">
          Explore All Product
        </button>
      </div>
      <div className="sec3part2">
        <div>
          <img
            src={pic01}
            alt="Error"
            style={{ height: "250px", width: "20rem" }}
          ></img>
        </div>
      </div>
    </div>
  );
}

export default Section3;
