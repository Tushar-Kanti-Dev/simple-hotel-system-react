import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row text center">
          <div className="col-12 bg-info">😀🤣😆</div>
        </div>
      </div>
      <header className="sticky-top">
        <div className="container-fluid text-white text-center">
          <div className="row main-header bg-dark">
            <div className="company-name col-md-4">
              <h1>Dream Hotel</h1>
            </div>
            <div className="nav-bar col-md-4">
              <div className="nav-content">
              <Link className="text-decoration-none me-2 text-white" to="/">Home</Link>
              <Link className="text-decoration-none me-2 text-white" to="/rooms">Rooms</Link>
              <Link className="text-decoration-none me-2 text-white" to="/contact">Contact</Link>
              <Link className="text-decoration-none me-2 text-white" to="/about">About</Link>
              </div>
            </div>
            <div className="social-items col-md-4">
              <div className="row">
                <div className="col-md-6">
                <div className="social-icons d-flex justify-content-md-end justify-content-sm-center">
              <a href="https://fontawesome.com/icons/facebook?f=brands&s=solid&an=beat&sz=2xs"><i class="fa-brands fa-facebook fa-beat fa-2xs text-white"></i></a>
              <a href="https://fontawesome.com/icons/facebook?f=brands&s=solid&an=beat&sz=2xs"><i class="fa-brands fa-instagram fa-spin fa-2xs"></i></a>
              <a href="https://fontawesome.com/icons/facebook?f=brands&s=solid&an=beat&sz=2xs"><i class="fa-brands fa-twitter fa-beat-fade fa-2xs"></i></a>
              <a href="https://fontawesome.com/icons/facebook?f=brands&s=solid&an=beat&sz=2xs"><i class="fa-brands fa-linkedin-in fa-beat fa-2xs"></i></a>
              </div>
                </div>
                <div className="col-md-6 d-flex justify-content-center align-items-center">
                  <div className="login-content">
                  <Link to='/login'>LogIn</Link>
                  <Link to='/register'>Register</Link>
                  </div>
                </div>
              </div>
              
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
