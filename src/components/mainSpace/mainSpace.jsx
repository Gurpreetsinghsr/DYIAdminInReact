import React, { Component } from "react";
import BasicExperianceInfo from "./basicExperienceInfo";
import ExperienceBranding from "./experienceBranding";
import Header from "./header";

class MainSpace extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="mainPart transiton">
          <Header></Header>
          <div className="container-fluid">
            <div className="row px-2">
              <BasicExperianceInfo></BasicExperianceInfo>
              <ExperienceBranding></ExperienceBranding>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default MainSpace;
