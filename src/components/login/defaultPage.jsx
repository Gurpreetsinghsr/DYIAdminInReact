import NavBar from "./../navBar/NavBar";
import MainSpace from "./../mainSpace/mainSpace";
import SideBar from "./../sideBar/sideBar";
import EventSettingsMain from "../globalSettings/eventSettings/eventSettingsMain";
import { Route } from "react-router-dom";
const DefaultPage = () => {
  return (
    <div className="paddingForHeader">
      <NavBar></NavBar>
      <main className="main" id="main">
        <SideBar></SideBar>
        <div className="mainPart transiton">
          <div className="container-fluid">
            <div className="row px-2">
              <EventSettingsMain />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default DefaultPage;
