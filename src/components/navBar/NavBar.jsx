import React, { Component } from "react";
import logo from "../../static/img/logo.png";
class NavBar extends Component {
  render() {
    return (
      <React.Fragment>
        <header className="bg-dark fixed-top">
          <nav className="navbar navbar-expand-lg navbar-dark">
            <div className="container-fluid">
              <a className="navbar-brand py-0 me-5" href="/">
                <img src={logo} alt="logo" className="transition" />
              </a>
              <span
                className="icon_design"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <div className="bar1"></div>
                <div className="bar2"></div>
                <div className="bar3"></div>
              </span>
              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              >
                <div className="ms-auto">
                  <ul className="navbar-nav align-items-center">
                    <li className="nav-item">
                      <a href="#" className="nav-link">
                        Preview Experience
                      </a>
                    </li>
                    <li className="nav-item ms-3">
                      <a
                        href="#"
                        data-bs-toggle="modal"
                        data-bs-target="#publishExperience"
                        className="btn siteBtn btnThree"
                      >
                        Publish Experience
                      </a>
                    </li>
                    <li className="nav-item ms-3">
                      <a href="#" className="nav-link">
                        <i className="icon-bell"></i>
                      </a>
                    </li>
                    <li className="nav-item ms-1 dropdown">
                      <a
                        href="#"
                        className="nav-link py-0"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <span className="userChar d-flex align-items-center justify-content-center rounded-circle">
                          S
                        </span>
                      </a>
                      <ul className="adjDropAction dropdown-menu dropdown-menu-end">
                        <a className="d-block">Hi Saurabh</a>
                        <hr className="dropdown-divider m-0" />
                        <a className="dropdown-item" href="#">
                          Profile
                        </a>
                        <a className="dropdown-item" href="#">
                          Global Settings
                        </a>
                        <a
                          className="dropdown-item"
                          data-bs-toggle="modal"
                          data-bs-target="#subscriptionPlan"
                          href="#"
                        >
                          Subscription Plan
                        </a>
                        <a className="dropdown-item" href="#">
                          Billing Information
                        </a>
                        <hr className="dropdown-divider m-0" />
                        <a className="dropdown-item" href="#">
                          Logout
                        </a>
                      </ul>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </nav>
        </header>
      </React.Fragment>
    );
  }
}

export default NavBar;
