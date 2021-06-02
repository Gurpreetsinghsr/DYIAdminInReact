import SelectStandardTime from "./selectStandardTime";

const BasicEventInfo = () => {
  return (
    <div class="col-md-12">
      <div class="w-100 bg-white pt-3 px-3 mb-4">
        <div class="mb-3">
          <div class="fs14 fw600">Basic Event Information</div>
        </div>

        <div class="w-100">
          <div class="row pb-2">
            <div class="col-md-6">
              <div class="form-group">
                <label class="control-label">Client Name</label>
                <input
                  data-val="true"
                  data-val-number="The field ID must be a number."
                  data-val-required="The ID field is required."
                  id="ID"
                  name="ID"
                  type="hidden"
                />
                <input id="EventCode" name="EventCode" type="hidden" />
                <input
                  class="siteInput"
                  id="ClientName"
                  name="ClientName"
                  type="text"
                />
                <span
                  class="field-validation-valid"
                  data-valmsg-for="ClientName"
                  data-valmsg-replace="true"
                ></span>
                <div>
                  <small>It will not be shown on the event platform.</small>
                </div>
              </div>
              <div class="form-group">
                <label class="control-label">Event Name</label>
                <input
                  class="siteInput"
                  id="EventName"
                  name="EventName"
                  type="text"
                />
                <span
                  class="field-validation-valid"
                  data-valmsg-for="EventName"
                  data-valmsg-replace="true"
                ></span>
                <div>
                  <small>
                    It will be shown on the Stay Tuned &amp; Login Page
                  </small>
                </div>
              </div>
            </div>
            <div class="col-md-6">
              <div class="form-group">
                <label class="control-label">Event Description</label>
                <textarea
                  class="siteInput"
                  cols="20"
                  id="EventDescription"
                  name="EventDescription"
                  rows="4"
                >
                  The clock is ticking &amp; we are in the processing setting up
                  some great sessions for you. Stay tuned to
                  www.techspectations.com &amp; register yourself to experience
                  magnified digital storytelling &amp; knowledge sessions coming
                  up your way.
                </textarea>
                <span
                  class="field-validation-valid"
                  data-valmsg-for="EventDescription"
                  data-valmsg-replace="true"
                ></span>
                <div>
                  <small>
                    It will not be shown on the event platform or will be used
                    to create FAQ’s for Virsa AI Bot
                  </small>
                </div>
              </div>
            </div>
          </div>
          <div class="row mb-3">
            <div class="col-3">
              <div class="form-group">
                <label class="control-label">Start Date</label>
                <input
                  class="siteInput"
                  data-val="true"
                  data-val-date="The field StartDate must be a date."
                  data-val-required="The StartDate field is required."
                  id="StartDate"
                  name="StartDate"
                  type="date"
                />
                <span
                  class="field-validation-valid"
                  data-valmsg-for="StartDate"
                  data-valmsg-replace="true"
                ></span>
              </div>
            </div>
            <div class="col-3">
              <div class="form-group">
                <label class="control-label">Event End Date</label>
                <input
                  class="siteInput"
                  data-val="true"
                  data-val-date="The field EndDate must be a date."
                  data-val-required="The EndDate field is required."
                  id="EndDate"
                  name="EndDate"
                  type="date"
                />
                <span
                  class="field-validation-valid"
                  data-valmsg-for="EndDate"
                  data-valmsg-replace="true"
                ></span>
              </div>
            </div>
            <div class="col-3">
              <div class="form-group">
                <label class="control-label">Event Start Time</label>
                <input
                  class="siteInput"
                  id="StartTime"
                  name="StartTime"
                  type="time"
                />
                <span
                  class="field-validation-valid"
                  data-valmsg-for="StartTime"
                  data-valmsg-replace="true"
                ></span>
              </div>
            </div>
            <div class="col-3">
              <div class="form-group">
                <label class="control-label">Event End Time</label>
                <input
                  class="siteInput"
                  id="EndTime"
                  name="EndTime"
                  type="time"
                />
                <span
                  class="field-validation-valid"
                  data-valmsg-for="EndTime"
                  data-valmsg-replace="true"
                ></span>
              </div>
            </div>
            <div class="col-3">
              <div class="form-group">
                <label class="control-label">Event Display Date</label>
                <input
                  class="siteInput"
                  id="EventDisplayDate"
                  name="EventDisplayDate"
                  type="text"
                />
                <span
                  class="field-validation-valid"
                  data-valmsg-for="EventDisplayDate"
                  data-valmsg-replace="true"
                ></span>
              </div>
            </div>
            <div class="col-3">
              <div class="form-group">
                <label class="control-label">Event Display Time</label>
                <input
                  class="siteInput"
                  id="EventDisplayTime"
                  name="EventDisplayTime"
                  type="text"
                />
                <span
                  class="field-validation-valid"
                  data-valmsg-for="EventDisplayTime"
                  data-valmsg-replace="true"
                ></span>
              </div>
            </div>
            <div class="col-3">
              <div class="form-group">
                <label class="control-label">On Demand Days</label>
                <input
                  class="siteInput"
                  data-val="true"
                  data-val-number="The field OnDemandDays must be a number."
                  data-val-required="The OnDemandDays field is required."
                  id="OnDemandDays"
                  name="OnDemandDays"
                  type="number"
                />
                <span
                  class="field-validation-valid"
                  data-valmsg-for="OnDemandDays"
                  data-valmsg-replace="true"
                ></span>
              </div>
            </div>
            <SelectStandardTime></SelectStandardTime>
            <div class="col-3">
              <div class="form-group">
                <label class="control-label">Audience Size</label>
                <input
                  class="siteInput"
                  data-val="true"
                  data-val-number="The field AudienceSize must be a number."
                  id="AudienceSize"
                  name="AudienceSize"
                  type="text"
                />
                <span
                  class="field-validation-valid"
                  data-valmsg-for="AudienceSize"
                  data-valmsg-replace="true"
                ></span>
              </div>
            </div>
            <div class="col-3">
              <div class="form-group">
                <label class="control-label">Audience Location</label>
                <input
                  class="siteInput"
                  id="AudienceLocation"
                  name="AudienceLocation"
                  type="text"
                />
                <span
                  class="field-validation-valid"
                  data-valmsg-for="AudienceLocation"
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

export default BasicEventInfo;
