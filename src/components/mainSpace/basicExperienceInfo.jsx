import React, { Component } from "react";
class BasicExperianceInfo extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="col-md-6 mb-3">
          <div className="w-100 bg-white p-3 h-100">
            <div className="border-bottom pb-3 mb-3 borColor1">
              <div className="row align-items-center">
                <div className="col-md-12 fs14 fw600">
                  Basic Experience Information
                </div>
              </div>
            </div>
            <div className="formStart">
              <div className="mb-3 position-relative inputRowJq">
                <input
                  type="text"
                  className="form-control siteInput siteInputJq"
                  id="name"
                />
                <label
                  for="name"
                  className="inputLabel transition position-absolute"
                >
                  Experience Name
                </label>
              </div>
              <div className="mb-3 position-relative activeLabel">
                <select className="form-control siteInput" id="zone">
                  <option selected="selected" value="">
                    Select Time Zone
                  </option>
                  <option value="">Time Zone</option>
                  <option value="">Time Zone</option>
                  <option value="">Time Zone</option>
                </select>
                <label
                  for="zone"
                  className="inputLabel transition position-absolute"
                >
                  Time Zone
                </label>
              </div>
              <div className="row g-0 justify-content-between">
                <div className="col-md-5">
                  <div className="mb-3 position-relative activeLabel">
                    <input
                      type="date"
                      className="form-control siteInput"
                      id="sDate"
                    />
                    <label
                      for="sDate"
                      className="inputLabel transition position-absolute"
                    >
                      Start Date
                    </label>
                  </div>
                </div>
                <div className="col-md-5">
                  <div className="mb-3 position-relative activeLabel">
                    <input
                      type="date"
                      className="form-control siteInput"
                      id="eDate"
                    />
                    <label
                      for="eDate"
                      className="inputLabel transition position-absolute"
                    >
                      End Date
                    </label>
                  </div>
                </div>
              </div>
              <div className="row g-0 justify-content-between">
                <div className="col-md-5">
                  <div className="mb-3 position-relative activeLabel">
                    <input
                      type="time"
                      className="form-control siteInput"
                      id="sTime"
                    />
                    <label
                      for="sTime"
                      className="inputLabel transition position-absolute"
                    >
                      Start Time
                    </label>
                  </div>
                </div>
                <div className="col-md-5">
                  <div class="mb-3 position-relative activeLabel">
                    <input
                      type="time"
                      className="form-control siteInput"
                      id="eTime"
                    />
                    <label
                      for="eTime"
                      className="inputLabel transition position-absolute"
                    >
                      End Time
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default BasicExperianceInfo;
