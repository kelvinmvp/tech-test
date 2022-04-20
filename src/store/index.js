import apiService from "services/api";
import storeFactory from "./base";

const userStore = storeFactory({
  apiMethod: apiService.fetchUsers,
  resourceName: "users",
  idKey: "userId",
  loadOnRender: true,
});
const projectStore = storeFactory({
  apiMethod: apiService.fetchProjects,
  resourceName: "projects",
  idKey: "projectId",
  loadOnRender: true,
});
const gatewayStore = storeFactory({
  apiMethod: apiService.fetchGateways,
  resourceName: "gateways",
  idKey: "gatewayId",
  loadOnRender: true,
});
const reportStore = storeFactory({
  apiMethod: apiService.fetchReports,
  resourceName: "reports",
  idKey: "paymentId",
  loadOnRender: false,
});

// derive({ data }, { proxy: baseStore });

export { userStore, projectStore, gatewayStore, reportStore };
