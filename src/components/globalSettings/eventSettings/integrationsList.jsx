import IntegrationsTable from "./IntegrationsTable";

const IntegrationsList = () => {
  return (
    <div class="col-md-12">
      <div class="border-bottom pb-3 mb-4 borColor1">
        <div class="row align-items-center">
          <div class="col-md-12">
            <strong>Integrations</strong>
          </div>
        </div>
      </div>
      <IntegrationsTable></IntegrationsTable>
    </div>
  );
};

export default IntegrationsList;
