import React from "react";
import sec2 from "./images/section02.jpg";
import pic1 from "./images/singlesofa.png";
import pic2 from "./images/cabinet.png";
import pic3 from "./images/part2lapm.png";
import pic4 from "./images/table.png";
import "./sec2.css";
function Section2() {
  return (
    <div className="sec2">
      <h2 style={{ paddingTop: "5rem", paddingLeft: "7rem" }}>
        Popular Categories
      </h2>
      <div className="part1">
        <div>
          <img src={pic1} alt="Error" className="pic"></img>
          <h4 className="imgname">Chair</h4>
        </div>
        <div>
          <img src={pic2} alt="Error" className="pic"></img>
          <h4 className="imgname">Cabinete</h4>
        </div>
        <div>
          <img src={pic3} alt="Error" className="pic"></img>
          <h4 className="imgname">Lamp</h4>
        </div>
        <div>
          <img src={pic4} alt="Error" className="pic"></img>

          <h4 className="imgname">Table</h4>
        </div>
      </div>

      <div className="part2">
        <div>
          <img
            src={sec2}
            alt="error"
            className="sec2img"
            style={{ width: "50vw", height: "100%", borderRadius: "9px" }}
          ></img>
        </div>
        <div className="part2content">
          <h2>
            We Create Your Home
            <br />
            More Astetic
          </h2>
          <br />
          Lorem Ipsum is simply dummy text of the printing and <br />
          typesetting industry. Lorem Ipsum has been the head.
          <br />
          <br />
          <h4 style={{ paddingTop: "3rem" }}>Valuation Services</h4>
          <br />
          Lorem Ipsum is simply dummy text of <br />
          thr printing and typesetting industry.
          <br />
          Lorem Ipsum has been the head.
          <br />
          <br />
          <h4>Development of Furniture Mode</h4>
          <br />
          Lorem Ipsum is simply dummy text of <br />
          thr printing and typesetting industry.
          <br />
          Lorem Ipsum has been the head.
        </div>
      </div>
    </div>
  );
}

export default Section2;
