import React, { Component } from "react";

class SideBarContent extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="sidebarMenu">
          <ul>
            <li className="headerMenu">
              <span>General</span>
            </li>
            <li className="sidebar-dropdown">
              <a
                className="btn-toggle collapsed"
                data-bs-toggle="collapse"
                aria-expanded="false"
                data-bs-target="#home-collapse"
              >
                <div className="p-0">
                  <i className="icon-speedometer" />
                  <span>Dashboard</span>
                </div>
              </a>

              <div className="collapse" id="home-collapse">
                <ul>
                  <li>
                    <a href="dashboard.html">Dashboard </a>
                  </li>
                  <li>
                    <a href="dashboard1.html">Dashboard 1</a>
                  </li>
                  <li>
                    <a href="dashboard2.html">Dashboard 2</a>
                  </li>
                </ul>
              </div>
            </li>
            <li className=" sidebar-dropdown">
              <a
                href="#"
                className="btn-toggle collapsed "
                data-bs-toggle="collapse"
                aria-expanded="false"
                data-bs-target="#E-collapse"
              >
                <a className="p-0">
                  <i className="icon-basket-loaded"></i>
                  <span>E-commerce</span>
                </a>
              </a>
              <div className="collapse" id="E-collapse">
                <ul>
                  <li>
                    <a href="#">Products </a>
                  </li>
                  <li className="active">
                    <a href="#">Orders</a>
                  </li>
                  <li>
                    <a href="#">Credit cart</a>
                  </li>
                </ul>
              </div>
            </li>
            <li className="headerMenu">
              <span>Extra</span>
            </li>
            <li>
              <a href="#">
                <i className="icon-calendar"></i> <span>Calendar</span>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="icon-folder-alt"></i> <span>Examples</span>
              </a>
            </li>
          </ul>
        </div>
      </React.Fragment>
    );
  }
}

export default SideBarContent;
