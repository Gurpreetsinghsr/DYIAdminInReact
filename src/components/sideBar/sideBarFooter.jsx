import React, { Component } from "react";
class SideBarFooter extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div className="sidebar-footer">
          <a href="#">
            <i className="icon-bell"></i>{" "}
            <span className="badge notification">3</span>
          </a>
          <a href="#">
            <i className="icon-envelope"></i>
            <span className="badge notification">7</span>
          </a>
          <a href="#">
            <i className="icon-settings"></i>
          </a>
          <a href="#">
            <i className="icon-power"></i>
          </a>
        </div>
      </React.Fragment>
    );
  }
}

export default SideBarFooter;
