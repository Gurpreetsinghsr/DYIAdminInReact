const IntegrationsTable = () => {
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
                <span class="dropdown-toggle">Navigation Link</span>
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
                  <button type="button" class="btn siteBtn btnOneOutline">
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
                <p> https://kestoneglobal.typeform.com/to/nXPewi#email=xxxxx</p>
              </td>
              <td class="text-center">40</td>
              <td class="text-center">
                <a>
                  <button type="button" class="btn siteBtn btnOneOutline">
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
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default IntegrationsTable;
