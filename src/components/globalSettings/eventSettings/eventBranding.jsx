const EventBranding = () => {
  return (
    <div class="col-md-6 ">
      <div class="w-100 bg-white p-3 mt-4">
        <div class="border-bottom pb-3 mb-4 borColor1">
          <div class="row align-items-center">
            <div class="col-md-12">
              <strong> Event Branding</strong>
            </div>
          </div>
        </div>
        <div class="w-100">
          <div class="row mb-3 align-items-center">
            <div class="col-6 ">
              <div class="form-group">
                <label class="control-label">Client Logo</label>
                <div class="d-none">
                  <input
                    class="form-control fs_12"
                    id="ClientLogo"
                    name="ClientLogo"
                    type="url"
                    value="https://d8y4y0xebg06m.cloudfront.net//Images/logo_red_white_97380a2a-0a99-427b-81a6-9d19f87003b8.png"
                  />
                </div>
                <div class="siteInput mb-3">
                  <img
                    class="thumbnail"
                    src="https://d8y4y0xebg06m.cloudfront.net//Images/logo_red_white_97380a2a-0a99-427b-81a6-9d19f87003b8.png"
                    style={{ maxheight: 73 }}
                  />
                </div>
              </div>
              <buttton
                onclick="ShowImageSelect('ClintLogo')"
                type="button"
                class="btn siteBtn btnOneOutline"
              >
                Pick Url
              </buttton>

              <span
                class="field-validation-valid"
                data-valmsg-for="ClientLogo"
                data-valmsg-replace="true"
              ></span>
            </div>

            <div class="col-6">
              <div class="form-group">
                <label class="control-label">Event Logo</label>
                <div class="d-none">
                  <input
                    class="form-control fs_12"
                    id="Logo"
                    name="Logo"
                    type="url"
                    value="https://d8y4y0xebg06m.cloudfront.net//Images/Adaptations-01_abe718bd-ea41-4302-9292-57064bd475bd.png"
                  />
                </div>
                <div class="siteInput mb-3">
                  <img
                    class="thumbnail"
                    src="https://d8y4y0xebg06m.cloudfront.net//Images/Adaptations-01_abe718bd-ea41-4302-9292-57064bd475bd.png"
                    style={{ maxheight: 73 }}
                  />
                </div>
              </div>
              <buttton
                onclick="ShowImageSelect('Logo')"
                type="button"
                class="btn siteBtn btnOneOutline"
              >
                Pick Url
              </buttton>

              <span
                class="field-validation-valid"
                data-valmsg-for="Logo"
                data-valmsg-replace="true"
              ></span>
            </div>
          </div>
          <div class="row mb-3 align-items-center">
            <div class="col-6">
              <div class="form-group">
                <label class="control-label">Event Banner</label>
                <div class="d-none">
                  <input
                    class="form-control fs_12"
                    id="EventBanner"
                    name="EventBanner"
                    type="url"
                    value="https://d8y4y0xebg06m.cloudfront.net//Images/ban_ner_85266495-9800-4b0d-8bc0-7f85bc69b3ee.png"
                  />
                </div>
                <div class="siteInput mb-3">
                  <img
                    class="thumbnail"
                    src="https://d8y4y0xebg06m.cloudfront.net//Images/ban_ner_85266495-9800-4b0d-8bc0-7f85bc69b3ee.png"
                    style={{ maxheight: 73 }}
                  />
                </div>
              </div>
              <buttton
                onclick="ShowImageSelect('Logo')"
                type="button"
                class="btn siteBtn btnOneOutline"
              >
                Pick Url
              </buttton>
              <span
                class="field-validation-valid"
                data-valmsg-for="EventBanner"
                data-valmsg-replace="true"
              ></span>
            </div>

            <div class="col-6">
              <div class="form-group">
                <label class="control-label">Footer Logo</label>
                <div class="d-none">
                  <input
                    class="form-control fs_12"
                    id="FooterLogo"
                    name="FooterLogo"
                    type="url"
                    value="https://d8y4y0xebg06m.cloudfront.net//Images/logo_red_white_97380a2a-0a99-427b-81a6-9d19f87003b8.png"
                  />
                </div>
                <div class="siteInput mb-3">
                  <img
                    class="thumbnail"
                    src="https://d8y4y0xebg06m.cloudfront.net//Images/logo_red_white_97380a2a-0a99-427b-81a6-9d19f87003b8.png"
                    style={{ maxheight: 73 }}
                  />
                </div>
              </div>
              <buttton
                onclick="ShowImageSelect('Logo')"
                type="button"
                class="btn siteBtn btnOneOutline"
              >
                Pick Url
              </buttton>

              <span
                class="field-validation-valid"
                data-valmsg-for="FooterLogo"
                data-valmsg-replace="true"
              ></span>
            </div>
          </div>
          <div class="row mb-3 ">
            <div class="col-6">
              <label class="fs_12">Theme Colour</label>
              <input
                class="form-control fs_12"
                id="ThemeHEXCode"
                name="ThemeHEXCode"
                type="color"
                value="#db0000"
              />
              <span
                class="field-validation-valid"
                data-valmsg-for="ThemeHEXCode"
                data-valmsg-replace="true"
              ></span>
            </div>
            <div class="col-6">
              <label class="fs_12">Theme Opposite Colour</label>

              <input
                class="form-control fs_12"
                id="ThemeHEXCodeOpposite"
                name="ThemeHEXCodeOpposite"
                type="color"
                value="#ffffff"
              />
              <span
                class="field-validation-valid"
                data-valmsg-for="ThemeHEXCodeOpposite"
                data-valmsg-replace="true"
              ></span>
            </div>
            <div class="col-4 d-none">
              <label class="fs_12">Font</label>
              <select class="form-control fs_12">
                <option>Select Font</option>
                <option>Time Zone 1</option>
                <option>Time Zone 2</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventBranding;
