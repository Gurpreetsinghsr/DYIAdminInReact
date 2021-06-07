import React, { Component } from "react";
import { Link } from "react-router-dom";

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
              <Link
                className="btn-toggle collapsed"
                data-bs-toggle="collapse"
                aria-expanded="false"
                data-bs-target="#home-collapse"
              >
                <div className="p-0">
                  <i className="icon-speedometer" />
                  <span>Dashboard</span>
                </div>
              </Link>

              <div className="collapse" id="home-collapse">
                <ul>
                  <li>
                    <Link to="#">Registration Summary </Link>
                  </li>
                  <li>
                    <Link to="#">Attendee Summary</Link>
                  </li>
                  <li>
                    <Link to="#">Virtual Event Summary</Link>
                  </li>
                  <li>
                    <Link to="#">Track N Booth wise Report</Link>
                  </li>
                </ul>
              </div>
            </li>
            <li className=" sidebar-dropdown">
              <Link
                className="btn-toggle collapsed "
                data-bs-toggle="collapse"
                aria-expanded="false"
                data-bs-target="#GlobalSettings"
              >
                <div className="p-0">
                  <i className="icon-settings"></i>
                  <span>Global Settings</span>
                </div>
              </Link>
              <div className="collapse" id="GlobalSettings">
                <ul>
                  <li>
                    <Link to="/default/eventsettings">Event Settings </Link>
                  </li>
                  <li>
                    <Link to="/default/imagegallery">Image Gallery</Link>
                  </li>
                  <li>
                    <Link to="/default/resourcegallery">Resource Gallery</Link>
                  </li>
                  <li>
                    <Link to="/default/managerooms">Manage Rooms</Link>
                  </li>
                  <li>
                    <Link to="/default/managespeakers">Manage Speakers</Link>
                  </li>
                  <li>
                    <Link to="/default/manageagenda">Manage Agenda</Link>
                  </li>
                  <li>
                    <Link to="/default/manageresources">Manage Resources</Link>
                  </li>
                  <li>
                    <Link to="/default/managequiz">Manage Quiz</Link>
                  </li>
                  <li>
                    <Link to="/default/managenotification">
                      Manage Nortification
                    </Link>
                  </li>
                  <li>
                    <Link to="/default/managepolls">Manage Polls</Link>
                  </li>
                  <li>
                    <Link to="/default/managepointsystem">
                      Manage Points System
                    </Link>
                  </li>
                  <li>
                    <Link to="/default/Regesterpagelayoutsetting">
                      Register Page Layout Setting
                    </Link>
                  </li>
                  <li>
                    <Link to="/default/manageemailsmssetting">
                      Email SMS Setting
                    </Link>
                  </li>
                  <li>
                    <Link to="/default/campaignlinks">Campaign Links</Link>
                  </li>
                </ul>
              </div>
            </li>
            <li className="sidebar-dropdown">
              <Link
                className="btn-toggle collapsed"
                data-bs-toggle="collapse"
                aria-expanded="false"
                data-bs-target="#ManageDelegates"
              >
                <div className="p-0">
                  <i className="icon-speedometer" />
                  <span>Manage Delegates</span>
                </div>
              </Link>

              <div className="collapse" id="ManageDelegates">
                <ul>
                  <li>
                    <Link to="#">Orders </Link>
                  </li>
                  <li>
                    <Link to="#">Delegate List</Link>
                  </li>
                  <li>
                    <Link to="#">Manage Nortification</Link>
                  </li>
                  <li>
                    <Link to="#">Manage Polls</Link>
                  </li>
                </ul>
              </div>
            </li>
            <li className="headerMenu">
              <span>Extra</span>
            </li>
            <li className="sidebar-dropdown">
              <Link
                className="btn-toggle collapsed"
                data-bs-toggle="collapse"
                aria-expanded="false"
                data-bs-target="#DownloadReports"
              >
                <div className="p-0">
                  <i className="icon-basket-loaded" />
                  <span>Download Reports</span>
                </div>
              </Link>

              <div className="collapse" id="DownloadReports">
                <ul>
                  <li>
                    <Link to="#">Delegate Visit Report </Link>
                  </li>
                  <li>
                    <Link to="#">Room Wise Report</Link>
                  </li>
                  <li>
                    <Link to="#">Resource Wise Report</Link>
                  </li>
                  <li>
                    <Link to="#">Exhibitor Wise Report</Link>
                  </li>
                </ul>
              </div>
            </li>
            <li>
              <Link to="#">
                <i className="icon-folder-alt"></i> <span>Examples</span>
              </Link>
            </li>
          </ul>
        </div>
      </React.Fragment>
    );
  }
}

export default SideBarContent;
