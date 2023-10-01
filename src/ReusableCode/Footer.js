import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <>
      <div className="overallfooter">
        <div className="footerHead">
          <div>
            <h2
              style={{
                color: "white",
                marginLeft: "52px",
              }}
            >
              Start your business today for <br /> $0+ state fees.
            </h2>
          </div>
          <div>
            <button type="button">Get Started</button>

            <button type="button">Contact Sales</button>
          </div>
        </div>

        <div className="footerContent">
          <div className="sect1">
            <h2>FurniShop</h2>
            <br />
            Lorem Ipsum is simply dummy text of <br />
            thr printing and typesetting industry.
            <br />
            Lorem Ipsum has been the head.
          </div>
          <div className="sect2">
            <table>
              <tr>
                <th>The Company</th>
                <th>More Information</th>
                <th>Corporate Office</th>
              </tr>
              <br />
              <tr>
                <td>About Us</td>
                <td>Faq</td>
                <td>8 Showroom</td>
              </tr>
              <tr>
                <td>Licence & Certification</td>
                <td>Be Our Fresher</td>
                <td>Invite You</td>
              </tr>
              <tr>
                <td>Company Profile</td>
                <td>Career</td>
                <td>Multiple Options</td>
              </tr>
              <tr>
                <td>Work Compentation</td>
                <td>Projects</td>
                <td>Tel : +88 12345678</td>
              </tr>
              <tr>
                <td>Our Team</td>
                <td>Feedback</td>
                <td>Phone : 664970</td>
              </tr>
              <tr>
                <td>Cantact Us</td>
                <td>Privacy & Policy</td>
                <td>Email : hari@gmail.com</td>
              </tr>
            </table>
          </div>
        </div>
        <button className="footerborder"></button>
      </div>
    </>
  );
}

export default Footer;
