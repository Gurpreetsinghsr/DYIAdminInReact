import React, { Component } from "react";

class Header extends Component {
  render() {
    return (
      <React.Fragment>
        <div class="pageHeader p-3 bg-white d-flex align-items-center justify-content-between mb-4">
          <h5 class="fs-6 m-0">General Information</h5>
          <button type="button" class="btn siteBtn btnOne">
            Update
          </button>
        </div>
      </React.Fragment>
    );
  }
}

export default Header;
