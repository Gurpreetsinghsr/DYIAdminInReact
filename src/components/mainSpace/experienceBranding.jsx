import React, { Component } from "react";
class ExperienceBranding extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div class="col-md-6 mb-3">
          <div class="w-100 bg-white p-3 h-100">
            <div class="border-bottom pb-3 mb-3 borColor1">
              <div class="row align-items-center">
                <div class="col-md-12 fs14 fw600">Experience Branding </div>
              </div>
            </div>
            <div class="formStart">
              <div class="mb-4 position-relative">
                <div class="row g-0">
                  <div class="col-md-4">
                    <label class="fileLabel fs12">
                      Experience Logo
                      <span class="d-block small text-muted">
                        (Width x Height)
                      </span>
                    </label>
                  </div>
                  <div class="col-md-8">
                    <div class="d-flex justify-content-between">
                      <div class="me-3">
                        <input
                          id="logo"
                          type="file"
                          class="fileInput"
                          onchange="loadFile('output',event,'prew')"
                        />
                        <label
                          class="fileBrowse btn siteBtn btnOne fs12"
                          for="logo"
                        >
                          Browse
                        </label>
                      </div>
                      <div
                        id="prew"
                        class="prewImg"
                        style={{ display: "none" }}
                      >
                        <img id="output" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="mb-4 position-relative">
                <div class="row g-0">
                  <div class="col-md-4">
                    <label class="fileLabel fs12">
                      Favicon
                      <span class="d-block small text-muted">(32W x 32H)</span>
                    </label>
                  </div>
                  <div class="col-md-8">
                    <div class="d-flex justify-content-between">
                      <div class="me-3">
                        <input
                          id="favIcon"
                          type="file"
                          class="fileInput"
                          onchange="loadFile('favIconOutput',event,'favIconPrew')"
                        />
                        <label
                          class="fileBrowse btn siteBtn btnOne fs12"
                          for="favIcon"
                        >
                          Browse
                        </label>
                      </div>
                      <div
                        id="favIconPrew"
                        class="prewImg"
                        style={{ display: "none" }}
                      >
                        <img id="favIconOutput" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="mb-4 position-relative">
                <div class="row g-0 align-items-center">
                  <div class="col-md-4">
                    <label for="pColor" class="mb-0 fs12 mt-2">
                      Primary Colour
                    </label>
                  </div>
                  <div class="col-md-7">
                    <input
                      type="text"
                      class="form-control siteInput siteInputAdj hexcolor"
                      pattern="^#+([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$"
                      value="#19aaa4"
                    />
                    <input
                      type="color"
                      id="pColor"
                      class="showPicker border-0 colorpicker"
                      name="color"
                      pattern="^#+([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$"
                      value="#19aaa4"
                    />
                  </div>
                </div>
              </div>
              <div class="mb-4 position-relative">
                <div class="row g-0 align-items-center">
                  <div class="col-md-4">
                    <label for="sColor" class="mb-0 fs12 mt-2">
                      Secondary Colour
                    </label>
                  </div>
                  <div class="col-md-7">
                    <input
                      type="text"
                      class="form-control siteInput siteInputAdj hexcolor"
                      pattern="^#+([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$"
                      value="#f7c94a"
                    />
                    <input
                      type="color"
                      id="sColor"
                      class="showPicker border-0 colorpicker"
                      name="color"
                      pattern="^#+([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$"
                      value="#f7c94a"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default ExperienceBranding;
