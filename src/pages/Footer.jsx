import React from "react";

const Footer = () => {
  const footerBg = {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url("/footer-bg.png")`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    color: "#fff",
  };

  return (
    <>
      <section className="section-footer py-5" style={footerBg}>
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-4">
              <h5>Our Office</h5>
              <ul>
                <li>
                  <span className="me-2">
                    <i class="bx bx-map"></i>
                  </span>
                  <span>2624 Mill woods road east nw edmonton, ab</span>
                </li>
                <li>
                  <span className="me-2">
                    <i class="bx bx-phone"></i>
                  </span>
                  <span>CALL/TEXT: +1 (780) 239 9417</span>
                </li>
                <li>
                  <span className="me-2">
                    <i class="bx bx-envelope"></i>
                  </span>
                  <span>info@blueswaninvestment.ca</span>
                </li>
              </ul>
            </div>

            <div className="col-12 col-lg-4">
              <h5>Services</h5>
              <div className="d-flex">
                <ul>
                  <li>Tax saving Solution</li>
                  <li>RRSP Investment</li>
                  <li>TFSA Investment</li>
                  <li>FHSA Investment</li>
                  <li>Other Investments</li>
                  <li>Estate Planning Solution</li>
                </ul>
                <ul>
                  <li>RESP for Children</li>
                  <li>Life Insurance Plan</li>
                  <li>Critical illness Plan</li>
                  <li>Disability Insurance</li>
                  <li>Health & Dental Plan</li>
                  <li>Super Visa & Travel Insurance</li>
                </ul>
              </div>
            </div>
            <div className="col-12 col-lg-4">
              <h5>Quick Links</h5>
              <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Services</li>
                <li>Contact Us</li>
              </ul>
              <div class="d-flex">
                <a href="#" class="footer-icon" target="_blank">
                  <i className="bx bxl-facebook"></i>
                </a>
                <a href="#" class="footer-icon" target="_blank">
                  <i class="bx bxl-twitter"></i>
                </a>
                <a href="#" class="footer-icon" target="_blank">
                  <i class="bx bxl-linkedin"></i>
                </a>
                <a href="#" class="footer-icon" target="_blank">
                  <i class="bx bxl-youtube"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Footer;
