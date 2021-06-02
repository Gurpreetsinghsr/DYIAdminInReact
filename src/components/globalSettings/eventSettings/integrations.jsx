const Intergrations = () => {
  return (
    <div class="col-md-12  mt-4">
      <div class="w-100 bg-white p-3 h-100">
        <div class="border-bottom pb-3 mb-4 borColor1">
          <div class="row align-items-center">
            <div class="col-md-12">
              <strong> Integrations</strong>
            </div>
          </div>
        </div>
        <div class="w-100 row">
          <div class="col-md-6">
            <div class="form-group">
              <label class="control-label">Feedback Form Id </label>

              <input
                class="siteInput"
                id="FeedBackFormId"
                name="FeedBackFormId"
                type="text"
              />
              <span
                class="field-validation-valid"
                data-valmsg-for="FeedBackFormId"
                data-valmsg-replace="true"
              ></span>
            </div>
          </div>

          <div class="col-md-6">
            <div class="form-group">
              <label class="control-label">Photo Booth Id </label>

              <input
                class="siteInput"
                id="PhotoBoothId"
                name="PhotoBoothId"
                type="text"
              />
              <span
                class="field-validation-valid"
                data-valmsg-for="PhotoBoothId"
                data-valmsg-replace="true"
              ></span>
            </div>
          </div>

          <div class="col-md-6">
            <div class="form-group">
              <label class="control-label">Platform Tour Guide </label>

              <input
                class="siteInput"
                id="PlatformTourGuide"
                name="PlatformTourGuide"
                type="text"
              />
              <span
                class="field-validation-valid"
                data-valmsg-for="PlatformTourGuide"
                data-valmsg-replace="true"
              ></span>
            </div>
          </div>

          <div class="col-md-6">
            <div class="form-group">
              <label class="control-label">Exhibitor Tour Guide </label>
              <input
                class="siteInput"
                id="ExhibitorTourGuide"
                name="ExhibitorTourGuide"
                type="text"
              />
              <span
                class="field-validation-valid"
                data-valmsg-for="ExhibitorTourGuide"
                data-valmsg-replace="true"
              ></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intergrations;
