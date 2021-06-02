const HeaderUpdateButton = (props) => {
  return (
    <div class="pageHeader p-3 bg-white d-flex align-items-center justify-content-between mb-4">
      <h5 class="fs-6 m-0">{props.Title}</h5>
      <button type="button" class="btn siteBtn btnOne">
        {props.ButtonName}
      </button>
    </div>
  );
};

export default HeaderUpdateButton;
