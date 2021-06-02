import AllCountriesSelect from "./allCountriesSelect";

const RegisterPage = () => {
  return (
    <div class="col-md-6 mx-4 mt-4">
      <div class="w-100 bg-white p-3 h-100">
        <div class="border-bottom pb-3 mb-4 borColor1">
          <div class="row align-items-center">
            <div class="col-md-12">
              <strong> Register Page</strong>
            </div>
          </div>
        </div>
        <div class="w-100">
          <AllCountriesSelect></AllCountriesSelect>

          <div class="form-group">
            <label class="control-label">Registration Type</label>

            <select
              class="siteInput"
              data-val="true"
              data-val-required="The IsExternalRegistration field is required."
              id="IsExternalRegistration"
              name="IsExternalRegistration"
            >
              <option value="">Select</option>
              <option selected="selected" value="false">
                Internal
              </option>
              <option value="true">External</option>
            </select>
            <span
              class="field-validation-valid"
              data-valmsg-for="IsExternalRegistration"
              data-valmsg-replace="true"
            ></span>
          </div>

          <div class="row mb-3 align-items-center">
            <div class="col-md-12 " id="regpage" style={{ display: "none" }}>
              <div class="form-group">
                <label class="control-label">Registration Page Url </label>

                <textarea
                  class="siteInput"
                  cols="20"
                  id="RegistrationPageUrl"
                  name="RegistrationPageUrl"
                  rows="4"
                >
                  https://google.com
                </textarea>
                <div>
                  {" "}
                  <small>If external registration</small>
                </div>
                <span
                  class="field-validation-valid"
                  data-valmsg-for="RegistrationPageUrl"
                  data-valmsg-replace="true"
                ></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
