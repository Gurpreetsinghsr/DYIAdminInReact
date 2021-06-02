const SEOInfo = () => {
  return (
    <div class="row px-2 mb-5">
      <div class="w-100 bg-white pt-3 px-3 mb-4">
        <div class="mb-3 d-flex align-items-center justify-content-between">
          <div class="fs14 fw600">SEO Information</div>
          <a class="btn siteBtn btnThree" href="#" target="_blank">
            View Event
          </a>
          <div class="col-8 d-none">
            <input
              class="form-control fs_12"
              id="EvenDomainUrl"
              name="EvenDomainUrl"
              readonly="readonly"
              type="url"
            />
            <span
              class="field-validation-valid"
              data-valmsg-for="EvenDomainUrl"
              data-valmsg-replace="true"
            ></span>
          </div>
        </div>
        <div class="w-100">
          <div class="row pb-2">
            <div class="col-md-4">
              <div class="form-group">
                <label class="control-label">Meta Title</label>
                <input
                  class="siteInput"
                  id="MetaTitle"
                  name="MetaTitle"
                  type="text"
                />
                <span
                  class="field-validation-valid"
                  data-valmsg-for="MetaTitle"
                  data-valmsg-replace="true"
                ></span>
              </div>
              <div class="form-group">
                <label class="control-label">Meta Description</label>
                <textarea
                  class="siteInput"
                  cols="20"
                  id="MetaDescription"
                  name="MetaDescription"
                  rows="4"
                >
                  Kestone - Virtual Event Platform
                </textarea>
                <span
                  class="field-validation-valid"
                  data-valmsg-for="MetaDescription"
                  data-valmsg-replace="true"
                ></span>
              </div>
            </div>

            <div class="col-md-4">
              <div class="form-group">
                <label class="control-label">Meta Image</label>

                <div class="d-none">
                  <input
                    class="d-none"
                    hidden="hidden"
                    id="MetaImage"
                    name="MetaImage"
                    type="url"
                  />
                </div>
                <div class="siteInput mb-3">
                  <img
                    class="thumbnail"
                    src="https://d8y4y0xebg06m.cloudfront.net//Images/PSA3Banner_564a4c6f-2045-458b-bb74-5bb8acde84bb.jpg"
                  />
                </div>
                <buttton
                  onclick="ShowImageSelect('MetaImage')"
                  type="button"
                  class="btn siteBtn btnOne"
                  id="inputGroupFileAddon02"
                >
                  Choose Image
                </buttton>

                <span
                  class="field-validation-valid"
                  data-valmsg-for="MetaImage"
                  data-valmsg-replace="true"
                ></span>
              </div>
            </div>
            <div class="col-md-4">
              <div class="form-group">
                <label class="control-label">fav icon</label>
                <div class="d-none">
                  <input
                    class="d-none"
                    hidden="hidden"
                    id="FavIcon"
                    name="FavIcon"
                    type="url"
                    value="https://d8y4y0xebg06m.cloudfront.net//Images/Kestone Logo_1f31ae68-0ffd-4b5c-aea3-7f2ef3409667.png"
                  />
                </div>
                <div class="siteInput mb-3">
                  <img
                    class="thumbnail"
                    src="https://d8y4y0xebg06m.cloudfront.net//Images/Kestone Logo_1f31ae68-0ffd-4b5c-aea3-7f2ef3409667.png"
                    style={{ maxheight: 73 }}
                  />
                </div>
                <buttton
                  onclick="ShowImageSelect('FavIcon')"
                  type="button"
                  class="btn siteBtn btnOneOutline"
                >
                  Pick Url
                </buttton>

                <span
                  class="field-validation-valid"
                  data-valmsg-for="FavIcon"
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

export default SEOInfo;
