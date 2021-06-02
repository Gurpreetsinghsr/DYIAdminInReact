const SocialMediaInformationTable = () => {
  return (
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
                <span class="dropdown-toggle">Navigation link</span>
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
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SocialMediaInformationTable;
