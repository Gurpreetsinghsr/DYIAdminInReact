import HeaderUpdateButton from "../../commanComponents/header";
import AllCountriesSelect from "./allCountriesSelect";
import BasicEventInfo from "./basicEventInfo";
import EventBranding from "./eventBranding";
import Intergrations from "./integrations";
import IntegrationsList from "./integrationsList";
import LoginInfoNDisplayMessages from "./loginInfoNDisplayMessages";
import OneTouchSetting from "./oneTouchSetting";
import RegisterPage from "./registerPage";
import RoomInformation from "./roomInformation";
import SEOInfo from "./seoInfo";
import SocialMediaInfo from "./socialMediaInfo";

const EventSettingsMain = () => {
  return (
    <form
      action="/EventConfig"
      id="form0"
      method="post"
      novalidate="novalidate"
    >
      <HeaderUpdateButton Title="Event Settings" ButtonName="Update" />
      <BasicEventInfo></BasicEventInfo>
      <SEOInfo></SEOInfo>

      <div className="col-md-12" style={{ display: "flex" }}>
        <EventBranding></EventBranding>
        <OneTouchSetting></OneTouchSetting>
      </div>
      <div className="col-md-12" style={{ display: "flex" }}>
        <LoginInfoNDisplayMessages></LoginInfoNDisplayMessages>
        <RegisterPage></RegisterPage>
      </div>
      <RoomInformation></RoomInformation>
      <Intergrations></Intergrations>
      <div class="col-md-12">
        <div class="w-100 bg-white p-3 h-100">
          <div class="row mt-4">
            <SocialMediaInfo></SocialMediaInfo>
            <IntegrationsList></IntegrationsList>
          </div>
        </div>
      </div>
    </form>
  );
};

export default EventSettingsMain;
