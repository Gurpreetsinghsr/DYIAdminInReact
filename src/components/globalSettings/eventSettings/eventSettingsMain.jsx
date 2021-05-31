const EventSettingsMain = () => {
  return (
    <div class="m-10">
      <form
        action="/EventConfig"
        data-ajax="true"
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
        <div class="pageHeader p-3 bg-white d-flex align-items-center justify-content-between mb-4">
          <h5 class="fs-6 m-0"> Event Settings</h5>
          <button type="submit" class="btn siteBtn btnOne">
            Update
          </button>
        </div>
        <div class="container-fluid">
          <div class="row px-2 mb-5">
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
                          value="1"
                        />
                        <input
                          id="EventCode"
                          name="EventCode"
                          type="hidden"
                          value=""
                        />
                        <input
                          class="siteInput"
                          id="ClientName"
                          name="ClientName"
                          type="text"
                          value="Kestone"
                        />
                        <span
                          class="field-validation-valid"
                          data-valmsg-for="ClientName"
                          data-valmsg-replace="true"
                        ></span>
                        <div>
                          <small>
                            It will not be shown on the event platform.
                          </small>
                        </div>
                      </div>
                      <div class="form-group">
                        <label class="control-label">Event Name</label>
                        <input
                          class="siteInput"
                          id="EventName"
                          name="EventName"
                          type="text"
                          value="Nucleus Global -1"
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
                          The clock is ticking &amp; we are in the processing
                          setting up some great sessions for you. Stay tuned to
                          www.techspectations.com &amp; register yourself to
                          experience magnified digital storytelling &amp;
                          knowledge sessions coming up your way.
                        </textarea>
                        <span
                          class="field-validation-valid"
                          data-valmsg-for="EventDescription"
                          data-valmsg-replace="true"
                        ></span>
                        <div>
                          <small>
                            It will not be shown on the event platform or will
                            be used to create FAQ’s for Virsa AI Bot
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
                          value="2021-04-19"
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
                          value="2021-04-22"
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
                          value="11:00:00"
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
                          value="16:00:00"
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
                          value="19th April 2021 -  22st April 2022"
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
                          value="12.00 hrs"
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
                          value="31"
                        />
                        <span
                          class="field-validation-valid"
                          data-valmsg-for="OnDemandDays"
                          data-valmsg-replace="true"
                        ></span>
                      </div>
                    </div>
                    <div class="col-3">
                      <div class="form-group">
                        <label class="control-label">Event Time Zone</label>
                        <select class="siteInput" id="TimeZone" name="TimeZone">
                          <option value="">Select</option>
                          <option value="Dateline Standard Time">
                            (UTC-12:00) International Date Line West
                          </option>
                          <option value="UTC-11">
                            (UTC-11:00) Coordinated Universal Time-11
                          </option>
                          <option value="Aleutian Standard Time">
                            (UTC-10:00) Aleutian Islands
                          </option>
                          <option value="Hawaiian Standard Time">
                            (UTC-10:00) Hawaii
                          </option>
                          <option value="Marquesas Standard Time">
                            (UTC-09:30) Marquesas Islands
                          </option>
                          <option value="Alaskan Standard Time">
                            (UTC-09:00) Alaska
                          </option>
                          <option value="UTC-09">
                            (UTC-09:00) Coordinated Universal Time-09
                          </option>
                          <option value="Pacific Standard Time (Mexico)">
                            (UTC-08:00) Baja California
                          </option>
                          <option value="UTC-08">
                            (UTC-08:00) Coordinated Universal Time-08
                          </option>
                          <option value="Pacific Standard Time">
                            (UTC-08:00) Pacific Time (US &amp; Canada)
                          </option>
                          <option value="US Mountain Standard Time">
                            (UTC-07:00) Arizona
                          </option>
                          <option value="Mountain Standard Time (Mexico)">
                            (UTC-07:00) Chihuahua, La Paz, Mazatlan
                          </option>
                          <option value="Mountain Standard Time">
                            (UTC-07:00) Mountain Time (US &amp; Canada)
                          </option>
                          <option value="Yukon Standard Time">
                            (UTC-07:00) Yukon
                          </option>
                          <option value="Central America Standard Time">
                            (UTC-06:00) Central America
                          </option>
                          <option value="Central Standard Time">
                            (UTC-06:00) Central Time (US &amp; Canada)
                          </option>
                          <option value="Easter Island Standard Time">
                            (UTC-06:00) Easter Island
                          </option>
                          <option value="Central Standard Time (Mexico)">
                            (UTC-06:00) Guadalajara, Mexico City, Monterrey
                          </option>
                          <option value="Canada Central Standard Time">
                            (UTC-06:00) Saskatchewan
                          </option>
                          <option value="SA Pacific Standard Time">
                            (UTC-05:00) Bogota, Lima, Quito, Rio Branco
                          </option>
                          <option value="Eastern Standard Time (Mexico)">
                            (UTC-05:00) Chetumal
                          </option>
                          <option value="Eastern Standard Time">
                            (UTC-05:00) Eastern Time (US &amp; Canada)
                          </option>
                          <option value="Haiti Standard Time">
                            (UTC-05:00) Haiti
                          </option>
                          <option value="Cuba Standard Time">
                            (UTC-05:00) Havana
                          </option>
                          <option value="US Eastern Standard Time">
                            (UTC-05:00) Indiana (East)
                          </option>
                          <option value="Turks And Caicos Standard Time">
                            (UTC-05:00) Turks and Caicos
                          </option>
                          <option value="Paraguay Standard Time">
                            (UTC-04:00) Asuncion
                          </option>
                          <option value="Atlantic Standard Time">
                            (UTC-04:00) Atlantic Time (Canada)
                          </option>
                          <option value="Venezuela Standard Time">
                            (UTC-04:00) Caracas
                          </option>
                          <option value="Central Brazilian Standard Time">
                            (UTC-04:00) Cuiaba
                          </option>
                          <option value="SA Western Standard Time">
                            (UTC-04:00) Georgetown, La Paz, Manaus, San Juan
                          </option>
                          <option value="Pacific SA Standard Time">
                            (UTC-04:00) Santiago
                          </option>
                          <option value="Newfoundland Standard Time">
                            (UTC-03:30) Newfoundland
                          </option>
                          <option value="Tocantins Standard Time">
                            (UTC-03:00) Araguaina
                          </option>
                          <option value="E. South America Standard Time">
                            (UTC-03:00) Brasilia
                          </option>
                          <option value="SA Eastern Standard Time">
                            (UTC-03:00) Cayenne, Fortaleza
                          </option>
                          <option value="Argentina Standard Time">
                            (UTC-03:00) City of Buenos Aires
                          </option>
                          <option value="Greenland Standard Time">
                            (UTC-03:00) Greenland
                          </option>
                          <option value="Montevideo Standard Time">
                            (UTC-03:00) Montevideo
                          </option>
                          <option value="Magallanes Standard Time">
                            (UTC-03:00) Punta Arenas
                          </option>
                          <option value="Saint Pierre Standard Time">
                            (UTC-03:00) Saint Pierre and Miquelon
                          </option>
                          <option value="Bahia Standard Time">
                            (UTC-03:00) Salvador
                          </option>
                          <option value="UTC-02">
                            (UTC-02:00) Coordinated Universal Time-02
                          </option>
                          <option value="Mid-Atlantic Standard Time">
                            (UTC-02:00) Mid-Atlantic - Old
                          </option>
                          <option value="Azores Standard Time">
                            (UTC-01:00) Azores
                          </option>
                          <option value="Cape Verde Standard Time">
                            (UTC-01:00) Cabo Verde Is.
                          </option>
                          <option value="UTC">
                            (UTC) Coordinated Universal Time
                          </option>
                          <option value="GMT Standard Time">
                            (UTC+00:00) Dublin, Edinburgh, Lisbon, London
                          </option>
                          <option value="Greenwich Standard Time">
                            (UTC+00:00) Monrovia, Reykjavik
                          </option>
                          <option value="Sao Tome Standard Time">
                            (UTC+00:00) Sao Tome
                          </option>
                          <option value="Morocco Standard Time">
                            (UTC+01:00) Casablanca
                          </option>
                          <option value="W. Europe Standard Time">
                            (UTC+01:00) Amsterdam, Berlin, Bern, Rome,
                            Stockholm, Vienna
                          </option>
                          <option value="Central Europe Standard Time">
                            (UTC+01:00) Belgrade, Bratislava, Budapest,
                            Ljubljana, Prague
                          </option>
                          <option value="Romance Standard Time">
                            (UTC+01:00) Brussels, Copenhagen, Madrid, Paris
                          </option>
                          <option value="Central European Standard Time">
                            (UTC+01:00) Sarajevo, Skopje, Warsaw, Zagreb
                          </option>
                          <option value="W. Central Africa Standard Time">
                            (UTC+01:00) West Central Africa
                          </option>
                          <option value="Jordan Standard Time">
                            (UTC+02:00) Amman
                          </option>
                          <option value="GTB Standard Time">
                            (UTC+02:00) Athens, Bucharest
                          </option>
                          <option value="Middle East Standard Time">
                            (UTC+02:00) Beirut
                          </option>
                          <option value="Egypt Standard Time">
                            (UTC+02:00) Cairo
                          </option>
                          <option value="E. Europe Standard Time">
                            (UTC+02:00) Chisinau
                          </option>
                          <option value="Syria Standard Time">
                            (UTC+02:00) Damascus
                          </option>
                          <option value="West Bank Standard Time">
                            (UTC+02:00) Gaza, Hebron
                          </option>
                          <option value="South Africa Standard Time">
                            (UTC+02:00) Harare, Pretoria
                          </option>
                          <option value="FLE Standard Time">
                            (UTC+02:00) Helsinki, Kyiv, Riga, Sofia, Tallinn,
                            Vilnius
                          </option>
                          <option value="Israel Standard Time">
                            (UTC+02:00) Jerusalem
                          </option>
                          <option value="Kaliningrad Standard Time">
                            (UTC+02:00) Kaliningrad
                          </option>
                          <option value="Sudan Standard Time">
                            (UTC+02:00) Khartoum
                          </option>
                          <option value="Libya Standard Time">
                            (UTC+02:00) Tripoli
                          </option>
                          <option value="Namibia Standard Time">
                            (UTC+02:00) Windhoek
                          </option>
                          <option value="Arabic Standard Time">
                            (UTC+03:00) Baghdad
                          </option>
                          <option value="Turkey Standard Time">
                            (UTC+03:00) Istanbul
                          </option>
                          <option value="Arab Standard Time">
                            (UTC+03:00) Kuwait, Riyadh
                          </option>
                          <option value="Belarus Standard Time">
                            (UTC+03:00) Minsk
                          </option>
                          <option value="Russian Standard Time">
                            (UTC+03:00) Moscow, St. Petersburg
                          </option>
                          <option value="E. Africa Standard Time">
                            (UTC+03:00) Nairobi
                          </option>
                          <option value="Iran Standard Time">
                            (UTC+03:30) Tehran
                          </option>
                          <option value="Arabian Standard Time">
                            (UTC+04:00) Abu Dhabi, Muscat
                          </option>
                          <option value="Astrakhan Standard Time">
                            (UTC+04:00) Astrakhan, Ulyanovsk
                          </option>
                          <option value="Azerbaijan Standard Time">
                            (UTC+04:00) Baku
                          </option>
                          <option value="Russia Time Zone 3">
                            (UTC+04:00) Izhevsk, Samara
                          </option>
                          <option value="Mauritius Standard Time">
                            (UTC+04:00) Port Louis
                          </option>
                          <option value="Saratov Standard Time">
                            (UTC+04:00) Saratov
                          </option>
                          <option value="Georgian Standard Time">
                            (UTC+04:00) Tbilisi
                          </option>
                          <option value="Volgograd Standard Time">
                            (UTC+04:00) Volgograd
                          </option>
                          <option value="Caucasus Standard Time">
                            (UTC+04:00) Yerevan
                          </option>
                          <option value="Afghanistan Standard Time">
                            (UTC+04:30) Kabul
                          </option>
                          <option value="West Asia Standard Time">
                            (UTC+05:00) Ashgabat, Tashkent
                          </option>
                          <option value="Ekaterinburg Standard Time">
                            (UTC+05:00) Ekaterinburg
                          </option>
                          <option value="Pakistan Standard Time">
                            (UTC+05:00) Islamabad, Karachi
                          </option>
                          <option value="Qyzylorda Standard Time">
                            (UTC+05:00) Qyzylorda
                          </option>
                          <option
                            selected="selected"
                            value="India Standard Time"
                          >
                            (UTC+05:30) Chennai, Kolkata, Mumbai, New Delhi
                          </option>
                          <option value="Sri Lanka Standard Time">
                            (UTC+05:30) Sri Jayawardenepura
                          </option>
                          <option value="Nepal Standard Time">
                            (UTC+05:45) Kathmandu
                          </option>
                          <option value="Central Asia Standard Time">
                            (UTC+06:00) Astana
                          </option>
                          <option value="Bangladesh Standard Time">
                            (UTC+06:00) Dhaka
                          </option>
                          <option value="Omsk Standard Time">
                            (UTC+06:00) Omsk
                          </option>
                          <option value="Myanmar Standard Time">
                            (UTC+06:30) Yangon (Rangoon)
                          </option>
                          <option value="SE Asia Standard Time">
                            (UTC+07:00) Bangkok, Hanoi, Jakarta
                          </option>
                          <option value="Altai Standard Time">
                            (UTC+07:00) Barnaul, Gorno-Altaysk
                          </option>
                          <option value="W. Mongolia Standard Time">
                            (UTC+07:00) Hovd
                          </option>
                          <option value="North Asia Standard Time">
                            (UTC+07:00) Krasnoyarsk
                          </option>
                          <option value="N. Central Asia Standard Time">
                            (UTC+07:00) Novosibirsk
                          </option>
                          <option value="Tomsk Standard Time">
                            (UTC+07:00) Tomsk
                          </option>
                          <option value="China Standard Time">
                            (UTC+08:00) Beijing, Chongqing, Hong Kong, Urumqi
                          </option>
                          <option value="North Asia East Standard Time">
                            (UTC+08:00) Irkutsk
                          </option>
                          <option value="Singapore Standard Time">
                            (UTC+08:00) Kuala Lumpur, Singapore
                          </option>
                          <option value="W. Australia Standard Time">
                            (UTC+08:00) Perth
                          </option>
                          <option value="Taipei Standard Time">
                            (UTC+08:00) Taipei
                          </option>
                          <option value="Ulaanbaatar Standard Time">
                            (UTC+08:00) Ulaanbaatar
                          </option>
                          <option value="Aus Central W. Standard Time">
                            (UTC+08:45) Eucla
                          </option>
                          <option value="Transbaikal Standard Time">
                            (UTC+09:00) Chita
                          </option>
                          <option value="Tokyo Standard Time">
                            (UTC+09:00) Osaka, Sapporo, Tokyo
                          </option>
                          <option value="North Korea Standard Time">
                            (UTC+09:00) Pyongyang
                          </option>
                          <option value="Korea Standard Time">
                            (UTC+09:00) Seoul
                          </option>
                          <option value="Yakutsk Standard Time">
                            (UTC+09:00) Yakutsk
                          </option>
                          <option value="Cen. Australia Standard Time">
                            (UTC+09:30) Adelaide
                          </option>
                          <option value="AUS Central Standard Time">
                            (UTC+09:30) Darwin
                          </option>
                          <option value="E. Australia Standard Time">
                            (UTC+10:00) Brisbane
                          </option>
                          <option value="AUS Eastern Standard Time">
                            (UTC+10:00) Canberra, Melbourne, Sydney
                          </option>
                          <option value="West Pacific Standard Time">
                            (UTC+10:00) Guam, Port Moresby
                          </option>
                          <option value="Tasmania Standard Time">
                            (UTC+10:00) Hobart
                          </option>
                          <option value="Vladivostok Standard Time">
                            (UTC+10:00) Vladivostok
                          </option>
                          <option value="Lord Howe Standard Time">
                            (UTC+10:30) Lord Howe Island
                          </option>
                          <option value="Bougainville Standard Time">
                            (UTC+11:00) Bougainville Island
                          </option>
                          <option value="Russia Time Zone 10">
                            (UTC+11:00) Chokurdakh
                          </option>
                          <option value="Magadan Standard Time">
                            (UTC+11:00) Magadan
                          </option>
                          <option value="Norfolk Standard Time">
                            (UTC+11:00) Norfolk Island
                          </option>
                          <option value="Sakhalin Standard Time">
                            (UTC+11:00) Sakhalin
                          </option>
                          <option value="Central Pacific Standard Time">
                            (UTC+11:00) Solomon Is., New Caledonia
                          </option>
                          <option value="Russia Time Zone 11">
                            (UTC+12:00) Anadyr, Petropavlovsk-Kamchatsky
                          </option>
                          <option value="New Zealand Standard Time">
                            (UTC+12:00) Auckland, Wellington
                          </option>
                          <option value="UTC+12">
                            (UTC+12:00) Coordinated Universal Time+12
                          </option>
                          <option value="Fiji Standard Time">
                            (UTC+12:00) Fiji
                          </option>
                          <option value="Kamchatka Standard Time">
                            (UTC+12:00) Petropavlovsk-Kamchatsky - Old
                          </option>
                          <option value="Chatham Islands Standard Time">
                            (UTC+12:45) Chatham Islands
                          </option>
                          <option value="UTC+13">
                            (UTC+13:00) Coordinated Universal Time+13
                          </option>
                          <option value="Tonga Standard Time">
                            (UTC+13:00) Nuku'alofa
                          </option>
                          <option value="Samoa Standard Time">
                            (UTC+13:00) Samoa
                          </option>
                          <option value="Line Islands Standard Time">
                            (UTC+14:00) Kiritimati Island
                          </option>
                        </select>
                        <span
                          class="field-validation-valid"
                          data-valmsg-for="TimeZone"
                          data-valmsg-replace="true"
                        ></span>
                      </div>
                    </div>
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
                          value="500"
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
                          value="IND, US, PAK"
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
                      value="https://app.nowvirtual.live"
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
                          value="Kestone - Virtual Event Platform"
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
                            value="https://d8y4y0xebg06m.cloudfront.net//Images/PSA3Banner_564a4c6f-2045-458b-bb74-5bb8acde84bb.jpg"
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
                    {/* <!--<div class="col-3 fs_12">Client Logo<span class="d-block fs_08">(Width x Height)</span></div>
                                    <div class="col-6">
                                        <div class="input-group">
                                            <div class="custom-file">
                                              
                                            </div>
                                            <div class="input-group-append">-->
                                                                
                                                                <!--<buttton onclick="ShowImageSelect('ClientLogo')" type="button" class="btn siteBtn btnOneOutline">Pick Url</buttton>
                                            </div>

                                        </div>
                                       
                                    </div>
                                    <div class="col-3">
                                        <img class="thumbnail" src="https://d8y4y0xebg06m.cloudfront.net//Images/logo_red_white_97380a2a-0a99-427b-81a6-9d19f87003b8.png" />
                                    </div>--> */}
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

                    {/* <!--<div class="col-3 fs_12">Event Logo<span class="d-block fs_08">(Width x Height)</span></div>
    <div class="col-6">
        <div class="input-group">
            <div class="custom-file">
                

            </div>
            <div class="input-group-append">-->
                            
                            <!--<buttton  onclick="ShowImageSelect('Logo')" type="button" class="btn siteBtn btnOneOutline">Pick Url</buttton>
            </div>

        </div>
       
    </div>
    <div class="col-3">
        <img class="thumbnail" src="https://d8y4y0xebg06m.cloudfront.net//Images/Adaptations-01_abe718bd-ea41-4302-9292-57064bd475bd.png" />
    </div>--> */}

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
                    {/* <!--<div class="col-3 fs_12">Event Banner<span class="d-block fs_08">(Width x Height)</span></div>
                                <div class="col-6">
                                    <div class="input-group">
                                        <div class="custom-file">
                                            <input class="form-control fs_12" id="EventBanner" name="EventBanner" type="url" value="https://d8y4y0xebg06m.cloudfront.net//Images/ban_ner_85266495-9800-4b0d-8bc0-7f85bc69b3ee.png" />

                                        </div>
                                        <div class="input-group-append">-->
                                                        
                                                        <!--<buttton  onclick="ShowImageSelect('EventBanner')" type="button" class="btn siteBtn btnOneOutline">Pick Url</buttton>
                                        </div>

                                    </div>
                                   
                                </div>
                                <div class="col-3">
                                    <img class="thumbnail" src="https://d8y4y0xebg06m.cloudfront.net//Images/ban_ner_85266495-9800-4b0d-8bc0-7f85bc69b3ee.png" />
                                </div>--> */}

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

                    {/* <!--<div class="col-3 fs_12">Footer Logo<span class="d-block fs_08">(Width x Height)</span></div>
        <div class="col-6">
            <div class="input-group">
                <div class="custom-file">
                    <input class="form-control fs_12" id="FooterLogo" name="FooterLogo" type="url" value="https://d8y4y0xebg06m.cloudfront.net//Images/logo_red_white_97380a2a-0a99-427b-81a6-9d19f87003b8.png" />

                </div>
                <div class="input-group-append">-->
                                
                                <!--<buttton onclick="ShowImageSelect('FooterLogo')" type="button" class="btn siteBtn btnOneOutline">Pick Url</buttton>
            </div>

        </div>

    </div>
    <div class="col-3">
        <img class="thumbnail" src="https://d8y4y0xebg06m.cloudfront.net//Images/logo_red_white_97380a2a-0a99-427b-81a6-9d19f87003b8.png" />
    </div>--> */}

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
            <div class="col-md-6 mt-4">
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
                            <input
                              name="IsPaidEvent"
                              type="hidden"
                              value="false"
                            />
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
                            <input
                              name="IsEventLive"
                              type="hidden"
                              value="false"
                            />
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

                            <label
                              for="DisplayNortificsationCheckbox"
                              class="fs_12"
                            >
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
                            <input
                              name="ProfileEdit"
                              type="hidden"
                              value="false"
                            />

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
                            <input
                              name="CanSendEmail"
                              type="hidden"
                              value="false"
                            />

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
                            <input
                              name="ReportGenerated"
                              type="hidden"
                              value="false"
                            />

                            <label
                              for="AllowReportGenerationCheckBox"
                              class="fs_12"
                            >
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
                            <input
                              name="FooterCopy"
                              type="hidden"
                              value="false"
                            />
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
                            <input
                              name="VirsaRequired"
                              type="hidden"
                              value="false"
                            />
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
            <div class="col-md-6  mt-4">
              <div class="w-100 bg-white p-3 h-100">
                <div class="border-bottom pb-3 mb-4 borColor1">
                  <div class="row align-items-center">
                    <div class="col-md-12">
                      <strong> Login Information &amp; Display Messages</strong>
                    </div>
                  </div>
                </div>
                <div class="w-100">
                  <div class="form-group">
                    <label class="control-label">Login Type</label>

                    <select class="siteInput" id="LoginType" name="LoginType">
                      <option value="">Select</option>
                      <option selected="selected" value="0">
                        Email Only
                      </option>
                      <option value="3">Email OPT</option>
                      <option value="2">Email Password</option>
                      <option value="1">Email Passcode</option>
                      <option value="4">Mobile Only</option>
                    </select>
                    <span
                      class="field-validation-valid"
                      data-valmsg-for="LoginType"
                      data-valmsg-replace="true"
                    ></span>
                  </div>

                  {/* <!--<div class="row mb-3 align-items-center">
                            <div class="col-4 fs_12">Login Type</div>
                            <div class="col-8">
                                <select class="form-control fs_12" id="LoginType" name="LoginType"><option value="">Select</option>
<option selected="selected" value="0">Email Only</option>
<option value="3">Email OPT</option>
<option value="2">Email Password</option>
<option value="1">Email Passcode</option>
<option value="4">Mobile Only</option>
</select>
                                <span class="field-validation-valid" data-valmsg-for="LoginType" data-valmsg-replace="true"></span>
                            </div>
                        </div>--> */}

                  <div class="form-group d-none">
                    <label class="control-label">Footer Text</label>

                    <textarea
                      class="siteInput"
                      cols="20"
                      id="FooterText"
                      name="FooterText"
                      rows="4"
                    >
                      Copyright © 2021. All rights reserved.
                    </textarea>
                    <span
                      class="field-validation-valid"
                      data-valmsg-for="FooterText"
                      data-valmsg-replace="true"
                    ></span>
                  </div>

                  <div class="form-group">
                    <label class="control-label">Stay Tuned Message</label>

                    <textarea
                      class="siteInput"
                      cols="20"
                      id="StaytuneMessage"
                      name="StaytuneMessage"
                      rows="4"
                    >
                      The clock is ticking &amp; we are in the process of
                      setting up some great sessions for you. Stay tuned to
                      www.techspectations.com &amp; register yourself to
                      experience magnified digital storytelling &amp; knowledge
                      sessions coming up your way.
                    </textarea>
                    <span
                      class="field-validation-valid"
                      data-valmsg-for="StaytuneMessage"
                      data-valmsg-replace="true"
                    ></span>
                  </div>

                  <div class="row mb-3 align-items-center">
                    <div class="col-8">
                      <div class="form-check form-switch">
                        <input
                          checked="checked"
                          class="form-check-input"
                          data-val="true"
                          data-val-required="The SocialIcons field is required."
                          id="ShowSocialIconCheckBox"
                          name="SocialIcons"
                          type="checkbox"
                          value="true"
                        />
                        <input name="SocialIcons" type="hidden" value="false" />

                        <label for="ShowSocialIconCheckBox" class="fs_12">
                          Show Social Icon
                        </label>
                      </div>
                      <span
                        class="field-validation-valid"
                        data-valmsg-for="SocialIcons"
                        data-valmsg-replace="true"
                      ></span>
                    </div>
                  </div>
                  <div class="row mb-3 align-items-center">
                    <div class="col-8">
                      <div class="form-check form-switch">
                        <input
                          class="form-check-input"
                          data-val="true"
                          data-val-required="The ShowBirdSeed field is required."
                          id="ShowBirdSeed"
                          name="ShowBirdSeed"
                          type="checkbox"
                          value="true"
                        />
                        <input
                          name="ShowBirdSeed"
                          type="hidden"
                          value="false"
                        />

                        <label for="ShowBirdSeed" class="col-4 fs_12">
                          Show Bird Seed
                        </label>
                      </div>
                      <span
                        class="field-validation-valid"
                        data-valmsg-for="ShowBirdSeed"
                        data-valmsg-replace="true"
                      ></span>
                    </div>
                  </div>
                  <div class="row mb-3 align-items-center">
                    <div
                      class="col-md-12"
                      id="birdDesc"
                      style={{ display: "none" }}
                    >
                      <div class="form-group">
                        <label class="control-label">Bird Seed Text</label>
                        <textarea
                          class="siteInput fs_12"
                          cols="20"
                          id="BirdSeedText"
                          name="BirdSeedText"
                          rows="4"
                        >
                          &lt;p class="MsoNormal" style="margin: 0cm 0cm
                          0.0001pt; box-sizing: border-box; color: #444;
                          font-size: 11pt; font-family: Calibri,sans-serif"&gt;
                          &lt;span style="box-sizing: border-box; font-size:
                          9pt; font-family: Arial,sans-serif"&gt; For more
                          information on how Dell uses and protect your data
                          please visit&amp;nbsp;&lt;a
                          href="http://www.dell.com/learn/in/en/incorp1/policies-privacy?c=in&amp;amp;cs=incorp1&amp;amp;l=en&amp;amp;s=corp"
                          style="color: blue; box-sizing: border-box;
                          text-decoration-line: none; background-color:
                          transparent" target="_blank"
                          data-saferedirecturl="https://www.google.com/url?q=http://www.dell.com/learn/in/en/incorp1/policies-privacy?c%3Din%26cs%3Dincorp1%26l%3Den%26s%3Dcorp&amp;amp;source=gmail&amp;amp;ust=1599224352304000&amp;amp;usg=AFQjCNEwNPv3wHLhiTzj7IHaTuVJbZKg-g"&gt;&lt;span
                          style="box-sizing: border-box; color:
                          rgb(0,125,184)"&gt;Dell's Privacy
                          Statement&lt;/span&gt;&lt;/a&gt; &lt;/span&gt;&lt;span
                          style="box-sizing: border-box; font-size: 9pt;
                          font-family: Arial,sans-serif; color:
                          rgb(0,125,184)"&gt;.&lt;/span&gt;&lt;span
                          style="box-sizing: border-box; font-size: 9pt;
                          font-family: Arial,sans-serif"&gt;&amp;nbsp;*Important
                          Dell Details. Dell's terms and conditions: All sales
                          subject to Dell's terms and conditions,
                          see&amp;nbsp;&lt;a
                          href="http://www.dell.com/learn/in/en/incorp1/terms-of-sale"
                          style="color: blue; box-sizing: border-box;
                          text-decoration-line: none; background-color:
                          transparent" target="_blank"
                          data-saferedirecturl="https://www.google.com/url?q=http://www.dell.com/learn/in/en/incorp1/terms-of-sale&amp;amp;source=gmail&amp;amp;ust=1599224352304000&amp;amp;usg=AFQjCNHShfxjJ94V1y3jOaZjg96wGiJ4Yg"&gt;&lt;span
                          style="box-sizing: border-box; color:
                          rgb(0,125,184)"&gt;Dell.co.in/tnc&lt;/span&gt;&lt;/a&gt;&lt;/span&gt;&lt;span
                          style="box-sizing: border-box; font-size: 9pt;
                          font-family: Arial,sans-serif; color:
                          rgb(0,125,184)"&gt;.&lt;/span&gt;&lt;span
                          style="box-sizing: border-box; font-size: 9pt;
                          font-family: Arial,sans-serif"&gt;&amp;nbsp;Goods by
                          delivery only. Mistakes: While all efforts are made to
                          check pricing and other errors, inadvertent errors do
                          occur from time to time and Dell reserves the right to
                          decline orders arising from such errors. More
                          Information: Go to&amp;nbsp;&lt;a
                          href="http://www.dell.com/learn/in/en/incorp1/terms-conditions/important-dell-details-in"
                          style="color: blue; box-sizing: border-box;
                          text-decoration-line: none; background-color:
                          transparent" target="_blank"
                          data-saferedirecturl="https://www.google.com/url?q=http://www.dell.com/learn/in/en/incorp1/terms-conditions/important-dell-details-in&amp;amp;source=gmail&amp;amp;ust=1599224352304000&amp;amp;usg=AFQjCNGGZ3g2hPu3wceF3MHaOii6myp6hQ"&gt;&lt;span
                          style="box-sizing: border-box; color:
                          rgb(0,125,184)"&gt;Dell.co.in/details&lt;/span&gt;&lt;/a&gt;&lt;/span&gt;&lt;span
                          style="box-sizing: border-box; font-size: 9pt;
                          font-family: Arial,sans-serif; color:
                          rgb(0,125,184)"&gt;.&lt;/span&gt;&lt;span
                          style="box-sizing: border-box; font-size: 9pt;
                          font-family: Arial,sans-serif"&gt; &lt;br
                          style="box-sizing: border-box"&gt; Dell Technologies
                          Global Headquarters is located at One Dell Way, Round
                          Rock, TX, 78682.&amp;nbsp; &lt;/span&gt; &lt;/p&gt;
                          &lt;p class="MsoNormal" style="margin: 0cm 0cm
                          0.0001pt; box-sizing: border-box; color:#444;
                          font-size: 11pt; font-family: Calibri,sans-serif"&gt;
                          &lt;span style="box-sizing: border-box; font-size:
                          9pt; font-family: Arial,sans-serif"&gt; &lt;span
                          style="box-sizing: border-box"&gt;Redington is a
                          registered trademark of Redington (India) Limited
                          and/or its affiliates visit us at &lt;a
                          href="https://redingtongroup.com/india/"
                          target="_blank" style="color: rgb(0,125,184);
                          box-sizing: border-box; text-decoration-line: none;
                          background-color:
                          transparent"&gt;https://redingtongroup.com/india/&lt;/a&gt;&lt;/span&gt;
                          &lt;br style="box-sizing: border-box"&gt; Copyright ©
                          2020 Dell Inc. or its subsidiaries. All Rights
                          Reserved. Dell Technologies, Dell, EMC, Dell EMC and
                          other trademarks are trademarks of Dell Inc. or its
                          subsidiaries. Other trademarks may be trademarks of
                          their respective owners.&lt;br style="box-sizing:
                          border-box"&gt; &lt;br style="box-sizing:
                          border-box"&gt; &lt;a
                          href="https://www.dell.com/preferences/em/?s=bsd&amp;amp;ee=f&amp;amp;c=IN&amp;amp;l=EN=&amp;amp;e"
                          style="color: blue; box-sizing: border-box;
                          text-decoration-line: none; background-color:
                          transparent" target="_blank"
                          data-saferedirecturl="https://www.google.com/url?q=https://www.dell.com/preferences/em/?s%3Dbsd%26ee%3Df%26c%3DIN%26l%3DEN%3D%26e&amp;amp;source=gmail&amp;amp;ust=1599224352304000&amp;amp;usg=AFQjCNHN5YH-gvrdzctE4vCcyzxGQJcJ6A"&gt;&lt;span
                          style="box-sizing: border-box; color:
                          rgb(0,125,184)"&gt;Manage Your
                          Preferences&lt;/span&gt;&lt;/a&gt;&amp;nbsp;|&amp;nbsp;&lt;a
                          href="http://www.dell.com/preferences/listremoval/?l=EN&amp;amp;c=IN"
                          style="color: blue; box-sizing: border-box;
                          text-decoration-line: none; background-color:
                          transparent" target="_blank"
                          data-saferedirecturl="https://www.google.com/url?q=http://www.dell.com/preferences/listremoval/?l%3DEN%26c%3DIN&amp;amp;source=gmail&amp;amp;ust=1599224352304000&amp;amp;usg=AFQjCNF-mRluswx9D8EmHpXb4GuLeWb9jQ"&gt;&lt;span
                          style="box-sizing: border-box; color:
                          rgb(0,125,184)"&gt;Unsubscribe&lt;/span&gt;&lt;/a&gt;&amp;nbsp;|&amp;nbsp;&lt;a
                          href="http://www.dell.com/learn/in/en/incorp1/policies-privacy?c=in&amp;amp;cs=incorp1&amp;amp;l=en&amp;amp;s=corp"
                          style="color: blue; box-sizing: border-box;
                          text-decoration-line: none; background-color:
                          transparent" target="_blank"
                          data-saferedirecturl="https://www.google.com/url?q=http://www.dell.com/learn/in/en/incorp1/policies-privacy?c%3Din%26cs%3Dincorp1%26l%3Den%26s%3Dcorp&amp;amp;source=gmail&amp;amp;ust=1599224352304000&amp;amp;usg=AFQjCNEwNPv3wHLhiTzj7IHaTuVJbZKg-g"&gt;&lt;span
                          style="box-sizing: border-box; color:
                          rgb(0,125,184)"&gt;Pr&lt;wbr&gt;ivacy
                          Statement&lt;/span&gt;&lt;/a&gt;&amp;nbsp;|&amp;nbsp;&lt;a
                          href="https://i.dell.com/sites/csdocuments/Legal_Docs/en/List-of-Dell-Technologies-Entities-for-Privacy-Statement.pdf"
                          style="color: blue; box-sizing: border-box;
                          text-decoration-line: none; background-color:
                          transparent" target="_blank"
                          data-saferedirecturl="https://www.google.com/url?q=https://i.dell.com/sites/csdocuments/Legal_Docs/en/List-of-Dell-Technologies-Entities-for-Privacy-Statement.pdf&amp;amp;source=gmail&amp;amp;ust=1599224352304000&amp;amp;usg=AFQjCNESSlhws4wpQco1enc-FOIibzti9Q"&gt;&lt;span
                          style="box-sizing: border-box; color:
                          rgb(0,125,184)"&gt;Dell Technologies and its group of
                          companies&lt;/span&gt;&lt;/a&gt;&lt;br
                          style="box-sizing: border-box"&gt; For questions about
                          your email preferences, contact us at&amp;nbsp;
                          &lt;/span&gt;&lt;span style="box-sizing: border-box;
                          font-size: 7.5pt; font-family:
                          Arial,sans-serif"&gt;&lt;span style="box-sizing:
                          border-box; color: rgb(0,125,184); font-size:
                          9pt"&gt;&lt;a href="mailto:Privacy@Dell.com"
                          style="color: rgb(0,125,184); box-sizing: border-box;
                          text-decoration-line: none; background-color:
                          transparent"
                          target="_blank"&gt;Privacy@Dell.com&lt;/a&gt;&lt;/span&gt;&lt;/span&gt;
                          &lt;/p&gt;
                        </textarea>
                        <span
                          class="field-validation-valid"
                          data-valmsg-for="BirdSeedText"
                          data-valmsg-replace="true"
                        ></span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-6  mt-4">
              <div class="w-100 bg-white p-3 h-100">
                <div class="border-bottom pb-3 mb-4 borColor1">
                  <div class="row align-items-center">
                    <div class="col-md-12">
                      <strong> Register Page</strong>
                    </div>
                  </div>
                </div>
                <div class="w-100">
                  <div class="form-group">
                    <label class="control-label">
                      Default Country for Mobile
                    </label>

                    <select
                      class="siteInput"
                      id="DefaultCountryCode"
                      name="DefaultCountryCode"
                    >
                      <option value="">Select</option>
                      <option value="AF">Afghanistan</option>
                      <option value="AX">Åland Islands</option>
                      <option value="AL">Albania</option>
                      <option value="DZ">Algeria</option>
                      <option value="AS">American Samoa</option>
                      <option value="AD">Andorra</option>
                      <option value="AO">Angola</option>
                      <option value="AI">Anguilla</option>
                      <option value="AQ">Antarctica</option>
                      <option value="AG">Antigua and Barbuda</option>
                      <option value="AR">Argentina</option>
                      <option value="AM">Armenia</option>
                      <option value="AW">Aruba</option>
                      <option value="AU">Australia</option>
                      <option value="AT">Austria</option>
                      <option value="AZ">Azerbaijan</option>
                      <option value="BS">Bahamas (the)</option>
                      <option value="BH">Bahrain</option>
                      <option value="BD">Bangladesh</option>
                      <option value="BB">Barbados</option>
                      <option value="BY">Belarus</option>
                      <option value="BE">Belgium</option>
                      <option value="BZ">Belize</option>
                      <option value="BJ">Benin</option>
                      <option value="BM">Bermuda</option>
                      <option value="BT">Bhutan</option>
                      <option value="BO">
                        Bolivia (Plurinational State of)
                      </option>
                      <option value="BQ">
                        Bonaire, Sint Eustatius and Saba
                      </option>
                      <option value="BA">Bosnia and Herzegovina</option>
                      <option value="BW">Botswana</option>
                      <option value="BV">Bouvet Island</option>
                      <option value="BR">Brazil</option>
                      <option value="IO">
                        British Indian Ocean Territory (the)
                      </option>
                      <option value="BN">Brunei Darussalam</option>
                      <option value="BG">Bulgaria</option>
                      <option value="BF">Burkina Faso</option>
                      <option value="BI">Burundi</option>
                      <option value="CV">Cabo Verde</option>
                      <option value="KH">Cambodia</option>
                      <option value="CM">Cameroon</option>
                      <option value="CA">Canada</option>
                      <option value="KY">Cayman Islands (the)</option>
                      <option value="CF">Central African Republic (the)</option>
                      <option value="TD">Chad</option>
                      <option value="CL">Chile</option>
                      <option value="CN">China</option>
                      <option value="CX">Christmas Island</option>
                      <option value="CC">Cocos (Keeling) Islands (the)</option>
                      <option value="CO">Colombia</option>
                      <option value="KM">Comoros (the)</option>
                      <option value="CD">
                        Congo (the Democratic Republic of the)
                      </option>
                      <option value="CG">Congo (the)</option>
                      <option value="CK">Cook Islands (the)</option>
                      <option value="CR">Costa Rica</option>
                      <option value="CI">Côte d'Ivoire</option>
                      <option value="HR">Croatia</option>
                      <option value="CU">Cuba</option>
                      <option value="CW">Curaçao</option>
                      <option value="CY">Cyprus</option>
                      <option value="CZ">Czechia</option>
                      <option value="DK">Denmark</option>
                      <option value="DJ">Djibouti</option>
                      <option value="DM">Dominica</option>
                      <option value="DO">Dominican Republic (the)</option>
                      <option value="EC">Ecuador</option>
                      <option value="EG">Egypt</option>
                      <option value="SV">El Salvador</option>
                      <option value="GQ">Equatorial Guinea</option>
                      <option value="ER">Eritrea</option>
                      <option value="EE">Estonia</option>
                      <option value="SZ">Eswatini</option>
                      <option value="ET">Ethiopia</option>
                      <option value="FK">
                        Falkland Islands (the) [Malvinas]
                      </option>
                      <option value="FO">Faroe Islands (the)</option>
                      <option value="FJ">Fiji</option>
                      <option value="FI">Finland</option>
                      <option value="FR">France</option>
                      <option value="GF">French Guiana</option>
                      <option value="PF">French Polynesia</option>
                      <option value="TF">
                        French Southern Territories (the)
                      </option>
                      <option value="GA">Gabon</option>
                      <option value="GM">Gambia (the)</option>
                      <option value="GE">Georgia</option>
                      <option value="DE">Germany</option>
                      <option value="GH">Ghana</option>
                      <option value="GI">Gibraltar</option>
                      <option value="GR">Greece</option>
                      <option value="GL">Greenland</option>
                      <option value="GD">Grenada</option>
                      <option value="GP">Guadeloupe</option>
                      <option value="GU">Guam</option>
                      <option value="GT">Guatemala</option>
                      <option value="GG">Guernsey</option>
                      <option value="GN">Guinea</option>
                      <option value="GW">Guinea-Bissau</option>
                      <option value="GY">Guyana</option>
                      <option value="HT">Haiti</option>
                      <option value="HM">
                        Heard Island and McDonald Islands
                      </option>
                      <option value="VA">Holy See (the)</option>
                      <option value="HN">Honduras</option>
                      <option value="HK">Hong Kong</option>
                      <option value="HU">Hungary</option>
                      <option value="IS">Iceland</option>
                      <option selected="selected" value="IN">
                        India
                      </option>
                      <option value="ID">Indonesia</option>
                      <option value="IR">Iran (Islamic Republic of)</option>
                      <option value="IQ">Iraq</option>
                      <option value="IE">Ireland</option>
                      <option value="IM">Isle of Man</option>
                      <option value="IL">Israel</option>
                      <option value="IT">Italy</option>
                      <option value="JM">Jamaica</option>
                      <option value="JP">Japan</option>
                      <option value="JE">Jersey</option>
                      <option value="JO">Jordan</option>
                      <option value="KZ">Kazakhstan</option>
                      <option value="KE">Kenya</option>
                      <option value="KI">Kiribati</option>
                      <option value="KP">
                        Korea (the Democratic People's Republic of)
                      </option>
                      <option value="KR">Korea (the Republic of)</option>
                      <option value="KW">Kuwait</option>
                      <option value="KG">Kyrgyzstan</option>
                      <option value="LA">
                        Lao People's Democratic Republic (the)
                      </option>
                      <option value="LV">Latvia</option>
                      <option value="LB">Lebanon</option>
                      <option value="LS">Lesotho</option>
                      <option value="LR">Liberia</option>
                      <option value="LY">Libya</option>
                      <option value="LI">Liechtenstein</option>
                      <option value="LT">Lithuania</option>
                      <option value="LU">Luxembourg</option>
                      <option value="MO">Macao</option>
                      <option value="MG">Madagascar</option>
                      <option value="MW">Malawi</option>
                      <option value="MY">Malaysia</option>
                      <option value="MV">Maldives</option>
                      <option value="ML">Mali</option>
                      <option value="MT">Malta</option>
                      <option value="MH">Marshall Islands (the)</option>
                      <option value="MQ">Martinique</option>
                      <option value="MR">Mauritania</option>
                      <option value="MU">Mauritius</option>
                      <option value="YT">Mayotte</option>
                      <option value="MX">Mexico</option>
                      <option value="FM">
                        Micronesia (Federated States of)
                      </option>
                      <option value="MD">Moldova (the Republic of)</option>
                      <option value="MC">Monaco</option>
                      <option value="MN">Mongolia</option>
                      <option value="ME">Montenegro</option>
                      <option value="MS">Montserrat</option>
                      <option value="MA">Morocco</option>
                      <option value="MZ">Mozambique</option>
                      <option value="MM">Myanmar</option>
                      <option value="NA">Namibia</option>
                      <option value="NR">Nauru</option>
                      <option value="NP">Nepal</option>
                      <option value="NL">Netherlands (the)</option>
                      <option value="NC">New Caledonia</option>
                      <option value="NZ">New Zealand</option>
                      <option value="NI">Nicaragua</option>
                      <option value="NE">Niger (the)</option>
                      <option value="NG">Nigeria</option>
                      <option value="NU">Niue</option>
                      <option value="NF">Norfolk Island</option>
                      <option value="MP">Northern Mariana Islands (the)</option>
                      <option value="NO">Norway</option>
                      <option value="OM">Oman</option>
                      <option value="PK">Pakistan</option>
                      <option value="PW">Palau</option>
                      <option value="PS">Palestine, State of</option>
                      <option value="PA">Panama</option>
                      <option value="PG">Papua New Guinea</option>
                      <option value="PY">Paraguay</option>
                      <option value="PE">Peru</option>
                      <option value="PH">Philippines (the)</option>
                      <option value="PN">Pitcairn</option>
                      <option value="PL">Poland</option>
                      <option value="PT">Portugal</option>
                      <option value="PR">Puerto Rico</option>
                      <option value="QA">Qatar</option>
                      <option value="MK">Republic of North Macedonia</option>
                      <option value="RE">Réunion</option>
                      <option value="RO">Romania</option>
                      <option value="RU">Russian Federation (the)</option>
                      <option value="RW">Rwanda</option>
                      <option value="BL">Saint Barthélemy</option>
                      <option value="SH">
                        Saint Helena, Ascension and Tristan da Cunha
                      </option>
                      <option value="KN">Saint Kitts and Nevis</option>
                      <option value="LC">Saint Lucia</option>
                      <option value="MF">Saint Martin (French part)</option>
                      <option value="PM">Saint Pierre and Miquelon</option>
                      <option value="VC">
                        Saint Vincent and the Grenadines
                      </option>
                      <option value="WS">Samoa</option>
                      <option value="SM">San Marino</option>
                      <option value="ST">Sao Tome and Principe</option>
                      <option value="SA">Saudi Arabia</option>
                      <option value="SN">Senegal</option>
                      <option value="RS">Serbia</option>
                      <option value="SC">Seychelles</option>
                      <option value="SL">Sierra Leone</option>
                      <option value="SG">Singapore</option>
                      <option value="SX">Sint Maarten (Dutch part)</option>
                      <option value="SK">Slovakia</option>
                      <option value="SI">Slovenia</option>
                      <option value="SB">Solomon Islands</option>
                      <option value="SO">Somalia</option>
                      <option value="ZA">South Africa</option>
                      <option value="GS">
                        South Georgia and the South Sandwich Islands
                      </option>
                      <option value="SS">South Sudan</option>
                      <option value="ES">Spain</option>
                      <option value="LK">Sri Lanka</option>
                      <option value="SD">Sudan (the)</option>
                      <option value="SR">Suriname</option>
                      <option value="SJ">Svalbard and Jan Mayen</option>
                      <option value="SE">Sweden</option>
                      <option value="CH">Switzerland</option>
                      <option value="SY">Syrian Arab Republic</option>
                      <option value="TW">Taiwan (Province of China)</option>
                      <option value="TJ">Tajikistan</option>
                      <option value="TZ">Tanzania, United Republic of</option>
                      <option value="TH">Thailand</option>
                      <option value="TL">Timor-Leste</option>
                      <option value="TG">Togo</option>
                      <option value="TK">Tokelau</option>
                      <option value="TO">Tonga</option>
                      <option value="TT">Trinidad and Tobago</option>
                      <option value="TN">Tunisia</option>
                      <option value="TR">Turkey</option>
                      <option value="TM">Turkmenistan</option>
                      <option value="TC">Turks and Caicos Islands (the)</option>
                      <option value="TV">Tuvalu</option>
                      <option value="UG">Uganda</option>
                      <option value="UA">Ukraine</option>
                      <option value="AE">United Arab Emirates (the)</option>
                      <option value="UM">
                        United States Minor Outlying Islands (the)
                      </option>
                      <option value="US">United States of America (the)</option>
                      <option value="UY">Uruguay</option>
                      <option value="UZ">Uzbekistan</option>
                      <option value="VU">Vanuatu</option>
                      <option value="VE">
                        Venezuela (Bolivarian Republic of)
                      </option>
                      <option value="VN">Viet Nam</option>
                      <option value="VG">Virgin Islands (British)</option>
                      <option value="VI">Virgin Islands (U.S.)</option>
                      <option value="WF">Wallis and Futuna</option>
                      <option value="EH">Western Sahara</option>
                      <option value="YE">Yemen</option>
                      <option value="ZM">Zambia</option>
                      <option value="ZW">Zimbabwe</option>
                    </select>
                    <span
                      class="field-validation-valid"
                      data-valmsg-for="DefaultCountryCode"
                      data-valmsg-replace="true"
                    ></span>
                  </div>

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
                    <div
                      class="col-md-12 "
                      id="regpage"
                      style={{ display: "none" }}
                    >
                      <div class="form-group">
                        <label class="control-label">
                          Registration Page Url{" "}
                        </label>

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
            <div class="col-md-6  mt-4">
              <div class="w-100 bg-white p-3 h-100">
                <div class="border-bottom pb-3 mb-4 borColor1">
                  <div class="row align-items-center">
                    <div class="col-md-12">
                      <strong> Rooms Information</strong>
                    </div>
                  </div>
                </div>
                <div class="w-100">
                  <div class="form-group">
                    <label class="control-label"> Number of tracks </label>

                    <input
                      class="siteInput"
                      data-val="true"
                      data-val-number="The field NoOfTracks must be a number."
                      id="NoOfTracks"
                      name="NoOfTracks"
                      type="number"
                      value="6"
                    />
                    <span
                      class="field-validation-valid"
                      data-valmsg-for="NoOfTracks"
                      data-valmsg-replace="true"
                    ></span>
                  </div>
                  <div class="form-group">
                    <label class="control-label">Number of booths </label>

                    <input
                      class="siteInput"
                      data-val="true"
                      data-val-number="The field NoOfExhibitors must be a number."
                      id="NoOfExhibitors"
                      name="NoOfExhibitors"
                      type="number"
                      value="20"
                    />
                    <span
                      class="field-validation-valid"
                      data-valmsg-for="NoOfExhibitors"
                      data-valmsg-replace="true"
                    ></span>
                  </div>
                  <div class="form-group">
                    <label class="control-label">
                      Default Room After login{" "}
                    </label>

                    <select
                      class="siteInput"
                      id="DefaultPageId"
                      name="DefaultPageId"
                    >
                      <option value="">Select</option>
                      <option selected="selected" value="Lobby">
                        Lobby
                      </option>
                      <option value="Auditorium">Auditorium</option>
                      <option value="Tracks">Tracks</option>
                      <option value="Exhibitors">Exhibitors</option>
                      <option value="NetworkingCenter">
                        Networking Center
                      </option>
                      <option value="ResourceCenter">Resource Center</option>
                      <option value="Helpdesk">Helpdesk</option>
                      <option value="Feedback">Feedback</option>
                      <option value="Exhibitor1">Exhibitor1</option>
                      <option value="Exhibitor2">Exhibitor2</option>
                      <option value="Track1">Microsoft Track</option>
                      <option value="Track2">Track 2</option>
                      <option value="Track3">Track 3</option>
                      <option value="Track4">Track 4</option>
                      <option value="Track5">Track 5</option>
                      <option value="Track6">Track 6</option>
                      <option value="Track7">Track 7</option>
                      <option value="Exhibitor3">Exhibitor3</option>
                      <option value="Exhibitor4">Exhibitor4</option>
                      <option value="Exhibitor5">Exhibitor5</option>
                      <option value="Exhibitor6">Exhibitor6</option>
                      <option value="Exhibitor7">Exhibitor7</option>
                      <option value="Exhibitor8">Exhibitor8</option>
                      <option value="Helpdesk">Helpdesk</option>
                      <option value="Feedback">Feedback</option>
                      <option value="Exhibitor9">Exhibitor9</option>
                      <option value="Exhibitor10">Exhibitor10</option>
                      <option value="Exhibitor11">Exhibitor11</option>
                      <option value="Exhibitor12">Exhibitor12</option>
                      <option value="Track9">Track9</option>
                      <option value="Track10">Track10</option>
                      <option value="Track11">Track11</option>
                      <option value="Track12">Track12</option>
                      <option value="Exhibitor13">Exhibitor13</option>
                      <option value="Exhibitor14">Exhibitor14</option>
                      <option value="Exhibitor15">Exhibitor15</option>
                      <option value="Auditorium1">Main Hall</option>
                      <option value="Auditorium2">Info</option>
                      <option value="NetworkingCenter1">
                        Networking Centre
                      </option>
                      <option value="Exhibitor16">Exhibitor16</option>
                      <option value="Exhibitor17">Exhibitor17</option>
                      <option value="Exhibitor18">Exhibitor18</option>
                      <option value="Exhibitor19">Exhibitor19</option>
                      <option value="Exhibitor20">Exhibitor20</option>
                      <option value="Helpdesk">Helpdesk</option>
                      <option value="Helpdesk">Helpdesk</option>
                    </select>
                    <span
                      class="field-validation-valid"
                      data-valmsg-for="DefaultPageId"
                      data-valmsg-replace="true"
                    ></span>
                  </div>

                  {/* <!--<div class="row mb-3 align-items-center">
    <div class="col-4 fs_12">Number of booths</div>
    <div class="col-8">

        <input class="form-control fs_12" id="NoOfExhibitors" name="NoOfExhibitors" type="number" value="20" />
        <span class="field-validation-valid" data-valmsg-for="NoOfExhibitors" data-valmsg-replace="true"></span>
    </div>
</div>--> */}
                </div>
              </div>
            </div>
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
                        value="nXPewi"
                      />
                      <span
                        class="field-validation-valid"
                        data-valmsg-for="FeedBackFormId"
                        data-valmsg-replace="true"
                      ></span>
                    </div>
                  </div>

                  {/* <!--<div class="col-md-6">
    <div class="row mb-3 align-items-center">
        <div class="col-4 fs_12">Feedback Form Id</div>
        <div class="col-8">

            <input class="form-control fs_12" id="FeedBackFormId" name="FeedBackFormId" type="text" value="nXPewi" />
            <span class="field-validation-valid" data-valmsg-for="FeedBackFormId" data-valmsg-replace="true"></span>
        </div>
    </div>-->
                            
                            <!--</div>--> */}
                  <div class="col-md-6">
                    <div class="form-group">
                      <label class="control-label">Photo Booth Id </label>

                      <input
                        class="siteInput"
                        id="PhotoBoothId"
                        name="PhotoBoothId"
                        type="text"
                        value="id=1234"
                      />
                      <span
                        class="field-validation-valid"
                        data-valmsg-for="PhotoBoothId"
                        data-valmsg-replace="true"
                      ></span>
                    </div>
                  </div>

                  {/* <!--<div class="col-md-6">
    <div class="row mb-3 align-items-center">
        <div class="col-4 fs_12">Photo Booth Id</div>
        <div class="col-8">

            <input class="form-control fs_12" id="PhotoBoothId" name="PhotoBoothId" type="text" value="id=1234" />
            <span class="field-validation-valid" data-valmsg-for="PhotoBoothId" data-valmsg-replace="true"></span>
        </div>
    </div>-->
                            
                            <!--</div>--> */}

                  <div class="col-md-6">
                    <div class="form-group">
                      <label class="control-label">Platform Tour Guide </label>

                      <input
                        class="siteInput"
                        id="PlatformTourGuide"
                        name="PlatformTourGuide"
                        type="text"
                        value="1609937545rUvj338"
                      />
                      <span
                        class="field-validation-valid"
                        data-valmsg-for="PlatformTourGuide"
                        data-valmsg-replace="true"
                      ></span>
                    </div>
                  </div>

                  {/* <!--<div class="col-md-6">
        <div class="row mb-3 align-items-center">
            <div class="col-3 fs_12">Platform Tour Guide </div>
            <div class="col-9">

                <input class="form-control fs_12" id="PlatformTourGuide" name="PlatformTourGuide" type="text" value="1609937545rUvj338" />
                <span class="field-validation-valid" data-valmsg-for="PlatformTourGuide" data-valmsg-replace="true"></span>
            </div>
        </div>-->
                            
                            <!--</div>--> */}

                  <div class="col-md-6">
                    <div class="form-group">
                      <label class="control-label">Exhibitor Tour Guide </label>
                      <input
                        class="siteInput"
                        id="ExhibitorTourGuide"
                        name="ExhibitorTourGuide"
                        type="text"
                        value="921212212"
                      />
                      <span
                        class="field-validation-valid"
                        data-valmsg-for="ExhibitorTourGuide"
                        data-valmsg-replace="true"
                      ></span>
                    </div>
                  </div>

                  {/* <!--<div class="col-md-6">
                                <div class="row mb-3 align-items-center">
                                    <div class="col-3 fs_12">Exhibitor Tour Guide </div>
                                    <div class="col-9">

                                        <input class="form-control fs_12" id="ExhibitorTourGuide" name="ExhibitorTourGuide" type="text" value="921212212" />
                                        <span class="field-validation-valid" data-valmsg-for="ExhibitorTourGuide" data-valmsg-replace="true"></span>
                                    </div>
                                </div>--> 
                            <!--</div>--> */}
                </div>
              </div>
            </div>
            <div class="col-md-12">
              <div class="w-100 bg-white p-3 h-100">
                <div class="row mt-4">
                  <div class="col-md-12">
                    <div class="border-bottom pb-3 mb-4 borColor1">
                      <div class="row align-items-center">
                        <div class="col-md-12">
                          <strong>Social Media Information</strong>
                        </div>
                      </div>
                    </div>
                    <div class="w-100">
                      <div class="dataTable">
                        <table class="table text-muted">
                          <thead>
                            <tr>
                              <th scope="col">Name</th>

                              <th scope="col" class="text-center">
                                <span class="dropdown-toggle">Embed Code</span>
                              </th>

                              <th scope="col" class="text-center">
                                <span class="dropdown-toggle">Order</span>
                              </th>
                              <th scope="col" class="text-center">
                                <span class="dropdown-toggle">
                                  Navigation link
                                </span>
                              </th>
                              <th scope="col" class="text-center">
                                <span class="dropdown-toggle">Action</span>
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td class="text-nowrap">
                                <i class="icon-people me-1"></i> Instagram
                              </td>

                              <td class="text-center" style={{ maxwidth: 200 }}>
                                <p> /Tracks/Track1</p>
                              </td>

                              <td class="text-center">145</td>
                              <td class="text-center">
                                <a
                                  href="https://www.instagram.com/sandeshetty"
                                  target="_blank"
                                  class="btn siteBtn btnOneOutline"
                                >
                                  View Link
                                </a>
                              </td>
                              <td class="text-center">
                                <button
                                  type="button"
                                  class="btn p-0 fs12 siteA "
                                  onclick="Edit('/EventConfig/Add/1')"
                                >
                                  <i class="fa fa-edit" title="Edit"></i>
                                </button>
                              </td>
                            </tr>
                            <tr>
                              <td class="text-nowrap">
                                <i class="icon-social-twitter me-1"></i> Twitter
                              </td>

                              <td class="text-center" style={{ maxwidth: 200 }}>
                                <p> KestoneIMS</p>
                              </td>

                              <td class="text-center">16</td>
                              <td class="text-center">
                                <a
                                  href="KestoneIMS"
                                  target="_blank"
                                  class="btn siteBtn btnOneOutline"
                                >
                                  View Link
                                </a>
                              </td>
                              <td class="text-center">
                                <button
                                  type="button"
                                  class="btn p-0 fs12 siteA "
                                  onclick="Edit('/EventConfig/Add/3')"
                                >
                                  <i class="fa fa-edit" title="Edit"></i>
                                </button>
                              </td>
                            </tr>
                            <tr>
                              <td class="text-nowrap">
                                <i class="icon-social-linkedin me-1"></i>{" "}
                                LinkedIn
                              </td>

                              <td class="text-center" style={{ maxwidth: 200 }}>
                                <p> AWS</p>
                              </td>

                              <td class="text-center">17</td>
                              <td class="text-center">
                                <a
                                  href="https://www.linkedin.com/company/kestone-integrated-marketing-services-pvt--ltd/mycompany/"
                                  target="_blank"
                                  class="btn siteBtn btnOneOutline"
                                >
                                  View Link
                                </a>
                              </td>
                              <td class="text-center">
                                <button
                                  type="button"
                                  class="btn p-0 fs12 siteA "
                                  onclick="Edit('/EventConfig/Add/4')"
                                >
                                  <i class="fa fa-edit" title="Edit"></i>
                                </button>
                              </td>
                            </tr>
                            <tr>
                              <td class="text-nowrap">
                                <i class="icon-puzzle me-1"></i> Quiz
                              </td>

                              <td class="text-center" style={{ maxwidth: 200 }}>
                                <p> Quiz</p>
                              </td>

                              <td class="text-center">160</td>
                              <td class="text-center">
                                <a
                                  href="https://www.google.co.in"
                                  target="_blank"
                                  class="btn siteBtn btnOneOutline"
                                >
                                  View Link
                                </a>
                              </td>
                              <td class="text-center">
                                <button
                                  type="button"
                                  class="btn p-0 fs12 siteA "
                                  onclick="Edit('/EventConfig/Add/12')"
                                >
                                  <i class="fa fa-edit" title="Edit"></i>
                                </button>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-12">
                    <div class="border-bottom pb-3 mb-4 borColor1">
                      <div class="row align-items-center">
                        <div class="col-md-12">
                          <strong>Integrations</strong>
                        </div>
                      </div>
                    </div>
                    <div class="w-100">
                      <div class="dataTable">
                        <table class="table text-muted">
                          <thead>
                            <tr>
                              <th scope="col">Name</th>

                              <th scope="col" class="text-center">
                                <span class="dropdown-toggle">Embed Code</span>
                              </th>
                              <th scope="col" class="text-center">
                                <span class="dropdown-toggle">Order</span>
                              </th>
                              <th scope="col" class="text-center">
                                <span class="dropdown-toggle">
                                  Navigation Link
                                </span>
                              </th>
                              <th scope="col" class="text-center">
                                <span class="dropdown-toggle">Action</span>
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td class="text-nowrap">
                                <i class="icon-bubbles mr-2 me-1"></i> Chat
                              </td>
                              <td class="text-center" style={{ maxwidth: 200 }}>
                                <p> Chat</p>
                              </td>
                              <td class="text-center">3</td>
                              <td class="text-center">
                                <a>
                                  <button
                                    type="button"
                                    class="btn siteBtn btnOneOutline"
                                  >
                                    View Link
                                  </button>
                                </a>
                              </td>
                              <td class="text-center">
                                <button
                                  type="button"
                                  class="btn p-0 fs12 siteA"
                                  onclick="Edit('/EventConfig/Add/8')"
                                >
                                  <i class="fa fa-edit" title="Edit"></i>
                                </button>
                              </td>
                            </tr>
                            <tr>
                              <td class="text-nowrap">
                                <i class="icon-note mr-2 me-1"></i> Feedback
                              </td>
                              <td class="text-center" style={{ maxwidth: 200 }}>
                                <p>
                                  {" "}
                                  https://kestoneglobal.typeform.com/to/nXPewi#email=xxxxx
                                </p>
                              </td>
                              <td class="text-center">40</td>
                              <td class="text-center">
                                <a>
                                  <button
                                    type="button"
                                    class="btn siteBtn btnOneOutline"
                                  >
                                    View Link
                                  </button>
                                </a>
                              </td>
                              <td class="text-center">
                                <button
                                  type="button"
                                  class="btn p-0 fs12 siteA"
                                  onclick="Edit('/EventConfig/Add/10')"
                                >
                                  <i class="fa fa-edit" title="Edit"></i>
                                </button>
                              </td>
                            </tr>
                            <tr>
                              <td class="text-nowrap">
                                <i class="icon-puzzle mr-2 me-1"></i> Virsa
                              </td>
                              <td class="text-center" style={{ maxwidth: 200 }}>
                                <p> KestoneIMS</p>
                              </td>
                              <td class="text-center">7</td>
                              <td class="text-center">
                                <a>
                                  <button
                                    type="button"
                                    class="btn siteBtn btnOneOutline"
                                  >
                                    View Link
                                  </button>
                                </a>
                              </td>
                              <td class="text-center">
                                <button
                                  type="button"
                                  class="btn p-0 fs12 siteA"
                                  onclick="Edit('/EventConfig/Add/13')"
                                >
                                  <i class="fa fa-edit" title="Edit"></i>
                                </button>
                              </td>
                            </tr>
                            <tr>
                              <td class="text-nowrap">
                                <i class="icon-camera mr-2 me-1"></i> Photobooth
                              </td>
                              <td class="text-center" style={{ maxwidth: 200 }}>
                                <p>
                                  {" "}
                                  https://photoops.kestoneglobal.com/v1/datamatics?id=id=1234
                                </p>
                              </td>
                              <td class="text-center">9</td>
                              <td class="text-center">
                                <a>
                                  <button
                                    type="button"
                                    class="btn siteBtn btnOneOutline"
                                  >
                                    View Link
                                  </button>
                                </a>
                              </td>
                              <td class="text-center">
                                <button
                                  type="button"
                                  class="btn p-0 fs12 siteA"
                                  onclick="Edit('/EventConfig/Add/14')"
                                >
                                  <i class="fa fa-edit" title="Edit"></i>
                                </button>
                              </td>
                            </tr>
                            <tr>
                              <td class="text-nowrap">
                                <i class="mr-2 me-1"></i> Facebook
                              </td>
                              <td class="text-center" style={{ maxwidth: 200 }}>
                                <p> /Tracks/Track6</p>
                              </td>
                              <td class="text-center">15</td>
                              <td class="text-center">
                                <a href="KestoneIMS">
                                  <button
                                    type="button"
                                    class="btn siteBtn btnOneOutline"
                                  >
                                    View Link
                                  </button>
                                </a>
                              </td>
                              <td class="text-center">
                                <button
                                  type="button"
                                  class="btn p-0 fs12 siteA"
                                  onclick="Edit('/EventConfig/Add/2')"
                                >
                                  <i class="fa fa-edit" title="Edit"></i>
                                </button>
                              </td>
                            </tr>
                            <tr>
                              <td class="text-nowrap">
                                <i class="icon-event mr-2 me-1"></i> Agenda
                              </td>
                              <td class="text-center" style={{ maxwidth: 200 }}>
                                <p> Agenda</p>
                              </td>
                              <td class="text-center">1</td>
                              <td class="text-center">
                                <a href="https://www.google.com/">
                                  <button
                                    type="button"
                                    class="btn siteBtn btnOneOutline"
                                  >
                                    View Link
                                  </button>
                                </a>
                              </td>
                              <td class="text-center">
                                <button
                                  type="button"
                                  class="btn p-0 fs12 siteA"
                                  onclick="Edit('/EventConfig/Add/5')"
                                >
                                  <i class="fa fa-edit" title="Edit"></i>
                                </button>
                              </td>
                            </tr>
                            <tr>
                              <td class="text-nowrap">
                                <i class="icon-trophy mr-2 me-1"></i>{" "}
                                Leaderboard
                              </td>
                              <td class="text-center" style={{ maxwidth: 200 }}>
                                <p> LeaderBoard</p>
                              </td>
                              <td class="text-center">2</td>
                              <td class="text-center">
                                <a href="https://www.google.com/">
                                  <button
                                    type="button"
                                    class="btn siteBtn btnOneOutline"
                                  >
                                    View Link
                                  </button>
                                </a>
                              </td>
                              <td class="text-center">
                                <button
                                  type="button"
                                  class="btn p-0 fs12 siteA"
                                  onclick="Edit('/EventConfig/Add/7')"
                                >
                                  <i class="fa fa-edit" title="Edit"></i>
                                </button>
                              </td>
                            </tr>
                            <tr>
                              <td class="text-nowrap">
                                <i class="icon-cloud-download mr-2 me-1"></i>{" "}
                                Resource
                              </td>
                              <td
                                class="text-center"
                                style={{ maxwidth: "200px" }}
                              >
                                <p> Resource</p>
                              </td>
                              <td class="text-center">8</td>
                              <td class="text-center">
                                <a>
                                  <button
                                    type="button"
                                    class="btn siteBtn btnOneOutline"
                                  >
                                    View Link
                                  </button>
                                </a>
                              </td>
                              <td class="text-center">
                                <button
                                  type="button"
                                  class="btn p-0 fs12 siteA"
                                  onclick="Edit('/EventConfig/Add/15')"
                                >
                                  <i class="fa fa-edit" title="Edit"></i>
                                </button>
                              </td>
                            </tr>
                            <tr>
                              <td class="text-nowrap">
                                <i class="icon-puzzle mr-2 me-1"></i> Game
                              </td>
                              <td
                                class="text-center"
                                style={{ maxwidth: "200px" }}
                              >
                                <p>
                                  {" "}
                                  https://www.olivr.world/cricket/?autoplay=1
                                </p>
                              </td>
                              <td class="text-center">5</td>
                              <td class="text-center">
                                <a href="Game Link Here">
                                  <button
                                    type="button"
                                    class="btn siteBtn btnOneOutline"
                                  >
                                    View Link
                                  </button>
                                </a>
                              </td>
                              <td class="text-center">
                                <button
                                  type="button"
                                  class="btn p-0 fs12 siteA"
                                  onclick="Edit('/EventConfig/Add/11')"
                                >
                                  <i class="fa fa-edit" title="Edit"></i>
                                </button>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default EventSettingsMain;
