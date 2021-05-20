import React, { Component } from "react";
import eventBnr1 from "../../static/img/eventBnr1.jpg";
class SideBarHeader extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="row g-0 sideBarHeader align-items-center">
          <div className="col-md-3">
            <img src={eventBnr1} className="rounded" alt="Event Name" />{" "}
          </div>
          <div className="col-md-9">
            <div className="ps-2">
              <p
                className="fs12 mb-0 fw600 text-truncate"
                data-bs-toggle="tooltip"
                data-bs-placement="bottom"
                title=""
                data-bs-original-title="Airtel CIO Connect long name Airtel CIO Connect long name "
              >
                Airtel CIO Connect
              </p>
              <p className="fs12 mb-0 text-truncate">
                <small>26 Jan 2021 | 05:00 pm</small>
              </p>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default SideBarHeader;
