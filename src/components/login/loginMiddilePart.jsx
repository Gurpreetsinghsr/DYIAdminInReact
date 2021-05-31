const LoginMiddlePart = () => {
  return (
    <section class="py-5 mb-5">
      <div class="container position-relative">
        <form
          action="/"
          data-ajax="true"
          data-ajax-begin="OnBegin"
          data-ajax-complete="OnComplete"
          data-ajax-failure="OnFailure"
          data-ajax-loading="#divLoading"
          data-ajax-method="POST"
          data-ajax-mode="replace"
          data-ajax-success="OnSuccess"
          data-ajax-update="#mainData"
          id="form0"
          method="post"
          novalidate="novalidate"
        >
          <section class="py-5 d-flex align-items-center min-vh-100">
            <div class="container position-relative">
              <div class="col-lg-9 col-md-10 col-12 m-auto">
                <div class="row no-gutters bg-white boxShadow">
                  <div class="col-lg-6 d-flex align-items-center">
                    <div class="box p-5 w-100">
                      <div class="w-100">
                        <h1 class="h5 font-weight-normal position-relative mb-0 text-uppercase">
                          Login
                        </h1>
                        <span class="hrDesign d-block">
                          <span></span> <span></span> <span></span>
                          <span></span> <span></span>
                        </span>
                      </div>
                      <div class="formMain mt-4 pt-2">
                        <div class="w-100">
                          <input
                            class="siteInput mb-3 valid"
                            data-val="true"
                            data-val-email="Invalid Email Address"
                            data-val-length="Must be at least 5 characters"
                            data-val-length-max="50"
                            data-val-length-min="5"
                            data-val-required="* Required Field"
                            id="Email"
                            name="Email"
                            placeholder="Email Address"
                            type="text"
                            value=""
                            aria-describedby="Email-error"
                            aria-invalid="false"
                          />
                          <span
                            class="field-validation-valid"
                            data-valmsg-for="Email"
                            data-valmsg-replace="true"
                          ></span>
                        </div>
                        <div class="w-100">
                          <input
                            class="siteInput mb-3 valid"
                            data-val="true"
                            data-val-length="Must be at least 5 characters"
                            data-val-length-max="20"
                            data-val-length-min="5"
                            id="Password"
                            name="Password"
                            placeholder="Password"
                            type="password"
                            value=""
                            aria-describedby="Password-error"
                            aria-invalid="false"
                          />
                          <span
                            class="field-validation-valid"
                            data-valmsg-for="Password"
                            data-valmsg-replace="true"
                          ></span>
                        </div>
                        <div class="w-100">
                          <input
                            type="submit"
                            value="Login"
                            class="btn siteBtn"
                          />
                        </div>

                        <div class="w-100 mt-3">
                          <p class="font_size_12">
                            <a class="forgotA" href="/Login/ForgotPassword">
                              Forgot password?
                            </a>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-6 site_bg text-white d-flex align-items-center ">
                    <div class="box p-5 w-100">
                      <div class="lLogo image mb-5"></div>

                      <div class="w-100 my-3">
                        <p class="font-weight-bold d-none">BENEFITS TOGETHER</p>

                        <div class="eventRow">
                          <label class="evtLabel">Name:</label>
                          <span class="evtValue">
                            <strong>BENEFITS TOGETHER</strong>
                          </span>
                        </div>
                        <div class="eventRow">
                          <label class="evtLabel">Date:</label>
                          <span class="evtValue ">
                            November 3 and November 10, 2020
                          </span>
                        </div>
                        <div class="eventRow">
                          <label class="evtLabel">Time:</label>
                          <span class="evtValue ">
                            12:00 p.m. – 4:00 p.m. ET /<br /> 1:00 p.m. – 5:00
                            p.m. AT
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="bestView mt-5 font_size_11 text-center">
                  This platform is best viewed by
                  <a
                    href="https://www.microsoft.com/en-in/download/internet-explorer.aspx"
                    target="_blank"
                  >
                    Internet Explorer
                  </a>
                  11 or higher,
                  <a
                    href="https://www.mozilla.org/en-US/firefox/new/"
                    target="_blank"
                  >
                    Mozilla Firefox 68
                  </a>
                  or higher,
                  <a
                    href="https://support.apple.com/downloads/safari"
                    target="_blank"
                  >
                    Safari 7
                  </a>
                  or higher,
                  <a href="https://www.google.com/chrome/" target="_blank">
                    Chrome 75.0.3770
                  </a>
                  or higher. If your browser is old, you may have trouble with
                  settings and/or viewing many of our platform features
                  properly. You can determine the version of your browser by
                  choosing “Help” at the top of your browser window, then select
                  “About” <br />
                  <br />
                  If you are using a VPN connection, then some platform features
                  may not be accessible as per the policies of your VPN service
                  provider. For best experience of our platform, please check
                  your connection speed, browser settings and access to
                  audio/video controls by
                  <a
                    href="https://virtualevent.kestoneglobal.com/system-check/"
                    target="_blank"
                  >
                    clicking here
                  </a>
                  .
                </div>
              </div>
            </div>
          </section>
        </form>

        <div
          id="divLoading"
          class="position-fixed pos_full loadingBoxForModal logdJq align-items-center justify-content-center"
          //   style="display: none;"
        >
          <div class="spinner_main">
            <div class="spinner" id="spinner_one"></div>
            <div class="spinner" id="spinner_two"></div>
            <div class="spinner" id="spinner_three"></div>
            <div class="spinner" id="spinner_four"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoginMiddlePart;
