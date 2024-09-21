import React from "react";
import 'boxicons/css/boxicons.min.css';

const Header = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg align-items-center">
        <div className="container align-items-center px-lg-0">
        <a class="navbar-brand" href="#">
              <img src="logo-header.png" alt="logo" height="40px"></img>
            </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Services
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#" >
                  FAQ'S
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                <span data-bs-toggle="modal" data-bs-target="#careers"> Careers</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Contact us
                </a>
              </li>
            </ul>
            <div class="d-flex">
              <a href="#" class="footer-icon" target="_blank"><i className='bx bxl-facebook'></i></a>
              <a href="#" class="footer-icon" target="_blank"><i class="bx bxl-twitter"></i></a>
              <a href="#" class="footer-icon" target="_blank"><i class="bx bxl-linkedin"></i></a>
              <a href="#" class="footer-icon" target="_blank"><i class="bx bxl-youtube"></i></a>
            </div>
          </div>
        </div>
      </nav>
      <>
  {/* Modal */}
  <div
    className="modal fade"
    id="careers"
    tabIndex={-1}
    aria-labelledby="careersLabel"
    aria-hidden="true"
  >
    <div className="modal-dialog modal-lg modal-dialog-centered">
      <div className="modal-content">
        <div className="modal-header">
          <h1 className="modal-title fs-5" id="careersLabel">          
CAREER OPPORTUNITY
          </h1>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          />
        </div>
        <div className="modal-body">
          <p>Within the next 10 years, 37% of financial advisors, collectively
             controlling $10.4 trillion, or 40% of total industry assets, are expected to retire.
             <a href="#"> (https://www.cerulli.com/press-releases/)</a> - June 13, 2022</p>
        </div>
        <div className="modal-footer">
          <button
            type="button"
            className="btn btn-secondary"
            data-bs-dismiss="modal"
          >
            Close
          </button>
          <button type="button" className="btn btn-primary">
            Save changes
          </button>
        </div>
      </div>
    </div>
  </div>
</>

    </>
    
  );
};

export default Header;
