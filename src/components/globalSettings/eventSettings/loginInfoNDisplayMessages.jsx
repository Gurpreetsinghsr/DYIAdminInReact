const LoginInfoNDisplayMessages = () => {
  return (
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
              The clock is ticking &amp; we are in the process of setting up
              some great sessions for you. Stay tuned to www.techspectations.com
              &amp; register yourself to experience magnified digital
              storytelling &amp; knowledge sessions coming up your way.
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
                <input name="ShowBirdSeed" type="hidden" value="false" />

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
            <div class="col-md-12" id="birdDesc" style={{ display: "none" }}>
              <div class="form-group">
                <label class="control-label">Bird Seed Text</label>
                <textarea
                  class="siteInput fs_12"
                  cols="20"
                  id="BirdSeedText"
                  name="BirdSeedText"
                  rows="4"
                >
                  &lt;p class="MsoNormal" style="margin: 0cm 0cm 0.0001pt;
                  box-sizing: border-box; color: #444; font-size: 11pt;
                  font-family: Calibri,sans-serif"&gt; &lt;span
                  style="box-sizing: border-box; font-size: 9pt; font-family:
                  Arial,sans-serif"&gt; For more information on how Dell uses
                  and protect your data please visit&amp;nbsp;&lt;a
                  href="http://www.dell.com/learn/in/en/incorp1/policies-privacy?c=in&amp;amp;cs=incorp1&amp;amp;l=en&amp;amp;s=corp"
                  style="color: blue; box-sizing: border-box;
                  text-decoration-line: none; background-color: transparent"
                  target="_blank"
                  data-saferedirecturl="https://www.google.com/url?q=http://www.dell.com/learn/in/en/incorp1/policies-privacy?c%3Din%26cs%3Dincorp1%26l%3Den%26s%3Dcorp&amp;amp;source=gmail&amp;amp;ust=1599224352304000&amp;amp;usg=AFQjCNEwNPv3wHLhiTzj7IHaTuVJbZKg-g"&gt;&lt;span
                  style="box-sizing: border-box; color:
                  rgb(0,125,184)"&gt;Dell's Privacy
                  Statement&lt;/span&gt;&lt;/a&gt; &lt;/span&gt;&lt;span
                  style="box-sizing: border-box; font-size: 9pt; font-family:
                  Arial,sans-serif; color:
                  rgb(0,125,184)"&gt;.&lt;/span&gt;&lt;span style="box-sizing:
                  border-box; font-size: 9pt; font-family:
                  Arial,sans-serif"&gt;&amp;nbsp;*Important Dell Details. Dell's
                  terms and conditions: All sales subject to Dell's terms and
                  conditions, see&amp;nbsp;&lt;a
                  href="http://www.dell.com/learn/in/en/incorp1/terms-of-sale"
                  style="color: blue; box-sizing: border-box;
                  text-decoration-line: none; background-color: transparent"
                  target="_blank"
                  data-saferedirecturl="https://www.google.com/url?q=http://www.dell.com/learn/in/en/incorp1/terms-of-sale&amp;amp;source=gmail&amp;amp;ust=1599224352304000&amp;amp;usg=AFQjCNHShfxjJ94V1y3jOaZjg96wGiJ4Yg"&gt;&lt;span
                  style="box-sizing: border-box; color:
                  rgb(0,125,184)"&gt;Dell.co.in/tnc&lt;/span&gt;&lt;/a&gt;&lt;/span&gt;&lt;span
                  style="box-sizing: border-box; font-size: 9pt; font-family:
                  Arial,sans-serif; color:
                  rgb(0,125,184)"&gt;.&lt;/span&gt;&lt;span style="box-sizing:
                  border-box; font-size: 9pt; font-family:
                  Arial,sans-serif"&gt;&amp;nbsp;Goods by delivery only.
                  Mistakes: While all efforts are made to check pricing and
                  other errors, inadvertent errors do occur from time to time
                  and Dell reserves the right to decline orders arising from
                  such errors. More Information: Go to&amp;nbsp;&lt;a
                  href="http://www.dell.com/learn/in/en/incorp1/terms-conditions/important-dell-details-in"
                  style="color: blue; box-sizing: border-box;
                  text-decoration-line: none; background-color: transparent"
                  target="_blank"
                  data-saferedirecturl="https://www.google.com/url?q=http://www.dell.com/learn/in/en/incorp1/terms-conditions/important-dell-details-in&amp;amp;source=gmail&amp;amp;ust=1599224352304000&amp;amp;usg=AFQjCNGGZ3g2hPu3wceF3MHaOii6myp6hQ"&gt;&lt;span
                  style="box-sizing: border-box; color:
                  rgb(0,125,184)"&gt;Dell.co.in/details&lt;/span&gt;&lt;/a&gt;&lt;/span&gt;&lt;span
                  style="box-sizing: border-box; font-size: 9pt; font-family:
                  Arial,sans-serif; color:
                  rgb(0,125,184)"&gt;.&lt;/span&gt;&lt;span style="box-sizing:
                  border-box; font-size: 9pt; font-family: Arial,sans-serif"&gt;
                  &lt;br style="box-sizing: border-box"&gt; Dell Technologies
                  Global Headquarters is located at One Dell Way, Round Rock,
                  TX, 78682.&amp;nbsp; &lt;/span&gt; &lt;/p&gt; &lt;p
                  class="MsoNormal" style="margin: 0cm 0cm 0.0001pt; box-sizing:
                  border-box; color:#444; font-size: 11pt; font-family:
                  Calibri,sans-serif"&gt; &lt;span style="box-sizing:
                  border-box; font-size: 9pt; font-family: Arial,sans-serif"&gt;
                  &lt;span style="box-sizing: border-box"&gt;Redington is a
                  registered trademark of Redington (India) Limited and/or its
                  affiliates visit us at &lt;a
                  href="https://redingtongroup.com/india/" target="_blank"
                  style="color: rgb(0,125,184); box-sizing: border-box;
                  text-decoration-line: none; background-color:
                  transparent"&gt;https://redingtongroup.com/india/&lt;/a&gt;&lt;/span&gt;
                  &lt;br style="box-sizing: border-box"&gt; Copyright © 2020
                  Dell Inc. or its subsidiaries. All Rights Reserved. Dell
                  Technologies, Dell, EMC, Dell EMC and other trademarks are
                  trademarks of Dell Inc. or its subsidiaries. Other trademarks
                  may be trademarks of their respective owners.&lt;br
                  style="box-sizing: border-box"&gt; &lt;br style="box-sizing:
                  border-box"&gt; &lt;a
                  href="https://www.dell.com/preferences/em/?s=bsd&amp;amp;ee=f&amp;amp;c=IN&amp;amp;l=EN=&amp;amp;e"
                  style="color: blue; box-sizing: border-box;
                  text-decoration-line: none; background-color: transparent"
                  target="_blank"
                  data-saferedirecturl="https://www.google.com/url?q=https://www.dell.com/preferences/em/?s%3Dbsd%26ee%3Df%26c%3DIN%26l%3DEN%3D%26e&amp;amp;source=gmail&amp;amp;ust=1599224352304000&amp;amp;usg=AFQjCNHN5YH-gvrdzctE4vCcyzxGQJcJ6A"&gt;&lt;span
                  style="box-sizing: border-box; color:
                  rgb(0,125,184)"&gt;Manage Your
                  Preferences&lt;/span&gt;&lt;/a&gt;&amp;nbsp;|&amp;nbsp;&lt;a
                  href="http://www.dell.com/preferences/listremoval/?l=EN&amp;amp;c=IN"
                  style="color: blue; box-sizing: border-box;
                  text-decoration-line: none; background-color: transparent"
                  target="_blank"
                  data-saferedirecturl="https://www.google.com/url?q=http://www.dell.com/preferences/listremoval/?l%3DEN%26c%3DIN&amp;amp;source=gmail&amp;amp;ust=1599224352304000&amp;amp;usg=AFQjCNF-mRluswx9D8EmHpXb4GuLeWb9jQ"&gt;&lt;span
                  style="box-sizing: border-box; color:
                  rgb(0,125,184)"&gt;Unsubscribe&lt;/span&gt;&lt;/a&gt;&amp;nbsp;|&amp;nbsp;&lt;a
                  href="http://www.dell.com/learn/in/en/incorp1/policies-privacy?c=in&amp;amp;cs=incorp1&amp;amp;l=en&amp;amp;s=corp"
                  style="color: blue; box-sizing: border-box;
                  text-decoration-line: none; background-color: transparent"
                  target="_blank"
                  data-saferedirecturl="https://www.google.com/url?q=http://www.dell.com/learn/in/en/incorp1/policies-privacy?c%3Din%26cs%3Dincorp1%26l%3Den%26s%3Dcorp&amp;amp;source=gmail&amp;amp;ust=1599224352304000&amp;amp;usg=AFQjCNEwNPv3wHLhiTzj7IHaTuVJbZKg-g"&gt;&lt;span
                  style="box-sizing: border-box; color:
                  rgb(0,125,184)"&gt;Pr&lt;wbr&gt;ivacy
                  Statement&lt;/span&gt;&lt;/a&gt;&amp;nbsp;|&amp;nbsp;&lt;a
                  href="https://i.dell.com/sites/csdocuments/Legal_Docs/en/List-of-Dell-Technologies-Entities-for-Privacy-Statement.pdf"
                  style="color: blue; box-sizing: border-box;
                  text-decoration-line: none; background-color: transparent"
                  target="_blank"
                  data-saferedirecturl="https://www.google.com/url?q=https://i.dell.com/sites/csdocuments/Legal_Docs/en/List-of-Dell-Technologies-Entities-for-Privacy-Statement.pdf&amp;amp;source=gmail&amp;amp;ust=1599224352304000&amp;amp;usg=AFQjCNESSlhws4wpQco1enc-FOIibzti9Q"&gt;&lt;span
                  style="box-sizing: border-box; color: rgb(0,125,184)"&gt;Dell
                  Technologies and its group of
                  companies&lt;/span&gt;&lt;/a&gt;&lt;br style="box-sizing:
                  border-box"&gt; For questions about your email preferences,
                  contact us at&amp;nbsp; &lt;/span&gt;&lt;span
                  style="box-sizing: border-box; font-size: 7.5pt; font-family:
                  Arial,sans-serif"&gt;&lt;span style="box-sizing: border-box;
                  color: rgb(0,125,184); font-size: 9pt"&gt;&lt;a
                  href="mailto:Privacy@Dell.com" style="color: rgb(0,125,184);
                  box-sizing: border-box; text-decoration-line: none;
                  background-color: transparent"
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
  );
};

export default LoginInfoNDisplayMessages;
