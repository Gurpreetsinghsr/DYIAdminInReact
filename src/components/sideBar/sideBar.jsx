import React, { Component } from "react";
import SideBarContent from "./sideBarContent";
import SideBarFooter from "./sideBarFooter";
import SideBarHeader from "./sideBarHeader";
class SideBar extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="sideBar bg-dark transition text-white position-fixed">
          <SideBarHeader></SideBarHeader>
          <SideBarContent></SideBarContent>
          <SideBarFooter></SideBarFooter>
        </div>
      </React.Fragment>
    );
  }
}

export default SideBar;
