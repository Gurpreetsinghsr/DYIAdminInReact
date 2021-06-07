import NavBar from "./navBar/NavBar";
import MainSpace from "./mainSpace/mainSpace";
import SideBar from "./sideBar/sideBar";
import EventSettingsMain from "./globalSettings/eventSettings/eventSettingsMain";
import { Switch, Route } from "react-router-dom";
import ManageRooms from "./globalSettings/manageRooms/manageRooms";
import ManageSpeakers from "./globalSettings/manageSpeakers/manageSpeakers";
import ManageAgenda from "./globalSettings/manageAgenda/manageAgenda";
import ManageNotification from "./globalSettings/manageNotification/manageNotification";
import ManageResourcs from "./globalSettings/manageResource/manageResource";
import ManageQuiz from "./globalSettings/manageQuiz/manageQuiz";
import ManagePolls from "./globalSettings/managePolls/managePolls";
const DefaultPage = () => {
  return (
    <div className="paddingForHeader">
      <NavBar></NavBar>
      <main className="main" id="main">
        <SideBar></SideBar>
        <div className="mainPart transiton">
          <Switch>
            <Route
              path="/default/eventsettings"
              exact
              component={EventSettingsMain}
            />
            <Route path="/default/managerooms" exact component={ManageRooms} />
            <Route
              path="/default/managespeakers"
              exact
              component={ManageSpeakers}
            />
            <Route
              path="/default/manageagenda"
              exact
              component={ManageAgenda}
            />
            <Route
              path="/default/manageNotification"
              exact
              component={ManageNotification}
            />
            <Route
              path="/default/manageresources"
              exact
              component={ManageResourcs}
            />
            <Route path="/default/managequiz" exact component={ManageQuiz} />
            <Route path="/default/managepolls" exact component={ManagePolls} />
          </Switch>
        </div>
      </main>
    </div>
  );
};

export default DefaultPage;
