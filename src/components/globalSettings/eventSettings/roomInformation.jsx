import DefaultRoomSelect from "./defaultRoomSelect";

const RoomInformation = () => {
  return (
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
          <DefaultRoomSelect></DefaultRoomSelect>

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
  );
};

export default RoomInformation;
