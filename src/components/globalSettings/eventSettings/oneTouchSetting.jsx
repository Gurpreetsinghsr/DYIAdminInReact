const OneTouchSetting = () => {
  return (
    <div class="col-md-6 mt-4 mx-4">
      <div class="w-100 bg-white p-3 h-100">
        <div class="border-bottom pb-3 mb-4 borColor1">
          <div class="row align-items-center">
            <div class="col-md-12">
              <strong> One Touch Settings</strong>
            </div>
          </div>
        </div>
        <div class="w-100">
          <div class="row">
            <div class="col-md-12">
              <div class="row mb-3 align-items-center d-none">
                <div class="col-4 fs_12">Is Paid Event ?</div>
                <div class="col-8">
                  <div class="form-check form-switch">
                    <input
                      data-val="true"
                      data-val-required="The IsPaidEvent field is required."
                      id="IsPaidEvent"
                      name="IsPaidEvent"
                      type="checkbox"
                      value="true"
                    />
                    <input name="IsPaidEvent" type="hidden" value="false" />
                  </div>
                  <span
                    class="field-validation-valid"
                    data-valmsg-for="IsPaidEvent"
                    data-valmsg-replace="true"
                  ></span>
                </div>
              </div>
              <div class="row mb-3 align-items-center">
                <div class="col-12">
                  <div class="form-check form-switch">
                    <input
                      checked="checked"
                      class="form-check-input"
                      data-val="true"
                      data-val-required="The IsEventLive field is required."
                      id="IsEventLiveCheckbox"
                      name="IsEventLive"
                      type="checkbox"
                      value="true"
                    />
                    <input name="IsEventLive" type="hidden" value="false" />
                    <label for="IsEventLiveCheckbox" class="fs_12">
                      Is Event Live ?
                    </label>
                  </div>

                  <span
                    class="field-validation-valid"
                    data-valmsg-for="IsEventLive"
                    data-valmsg-replace="true"
                  ></span>
                </div>
              </div>
              <div class="row mb-3 align-items-center">
                <div class="col-12">
                  <div class="form-check form-switch">
                    <input
                      checked="checked"
                      class="form-check-input"
                      data-val="true"
                      data-val-required="The DisplayNotification field is required."
                      id="DisplayNortificsationCheckbox"
                      name="DisplayNotification"
                      type="checkbox"
                      value="true"
                    />
                    <input
                      name="DisplayNotification"
                      type="hidden"
                      value="false"
                    />

                    <label for="DisplayNortificsationCheckbox" class="fs_12">
                      Display Notification ?
                    </label>
                  </div>
                  <span
                    class="field-validation-valid"
                    data-valmsg-for="DisplayNotification"
                    data-valmsg-replace="true"
                  ></span>
                </div>
              </div>
              <div class="row mb-3 align-items-center">
                <div class="col-12">
                  <div class="form-check form-switch">
                    <input
                      checked="checked"
                      class="form-check-input"
                      data-val="true"
                      data-val-required="The ProfileEdit field is required."
                      id="AllowProfileEditCheckbox"
                      name="ProfileEdit"
                      type="checkbox"
                      value="true"
                    />
                    <input name="ProfileEdit" type="hidden" value="false" />

                    <label for="AllowProfileEditCheckbox" class="fs_12">
                      Allow profile edit ?
                    </label>
                  </div>
                  <span
                    class="field-validation-valid"
                    data-valmsg-for="ProfileEdit"
                    data-valmsg-replace="true"
                  ></span>
                </div>
              </div>
            </div>
            <div class="col-md-12">
              <div class="row mb-3 align-items-center">
                <div class="col-8">
                  <div class="form-check form-switch">
                    <input
                      checked="checked"
                      class="form-check-input"
                      data-val="true"
                      data-val-required="The CanSendEmail field is required."
                      id="CanSendEmailCheckbox"
                      name="CanSendEmail"
                      type="checkbox"
                      value="true"
                    />
                    <input name="CanSendEmail" type="hidden" value="false" />

                    <label for="CanSendEmailCheckbox" class="fs_12">
                      Can Send Email ?
                    </label>
                  </div>
                  <span
                    class="field-validation-valid"
                    data-valmsg-for="CanSendEmail"
                    data-valmsg-replace="true"
                  ></span>
                </div>
              </div>
              <div class="row mb-3 align-items-center">
                <div class="col-12">
                  <div class="form-check form-switch">
                    <input
                      checked="checked"
                      class="form-check-input"
                      data-val="true"
                      data-val-required="The ReportGenerated field is required."
                      id="AllowReportGenerationCheckBox"
                      name="ReportGenerated"
                      type="checkbox"
                      value="true"
                    />
                    <input name="ReportGenerated" type="hidden" value="false" />

                    <label for="AllowReportGenerationCheckBox" class="fs_12">
                      Allow Report generation?
                    </label>
                  </div>
                  <span
                    class="field-validation-valid"
                    data-valmsg-for="ReportGenerated"
                    data-valmsg-replace="true"
                  ></span>
                </div>
              </div>
              <div class="row mb-3 align-items-center d-none">
                <div class="col-8 fs_12">Footer Copy ?</div>
                <div class="col-4">
                  <label class="form-check form-switch">
                    <input
                      checked="checked"
                      class="form-check-input"
                      data-val="true"
                      data-val-required="The FooterCopy field is required."
                      id="FooterCopy"
                      name="FooterCopy"
                      type="checkbox"
                      value="true"
                    />
                    <input name="FooterCopy" type="hidden" value="false" />
                  </label>
                  <span
                    class="field-validation-valid"
                    data-valmsg-for="FooterCopy"
                    data-valmsg-replace="true"
                  ></span>
                </div>
              </div>
              <div class="row mb-3 align-items-center d-none">
                <div class="col-8 fs_12">Virsa Required?</div>
                <div class="col-4">
                  <label class="form-check form-switch">
                    <input
                      checked="checked"
                      class="form-check-input"
                      data-val="true"
                      data-val-required="The VirsaRequired field is required."
                      id="VirsaRequired"
                      name="VirsaRequired"
                      type="checkbox"
                      value="true"
                    />
                    <input name="VirsaRequired" type="hidden" value="false" />
                  </label>
                  <span
                    class="field-validation-valid"
                    data-valmsg-for="VirsaRequired"
                    data-valmsg-replace="true"
                  ></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OneTouchSetting;
