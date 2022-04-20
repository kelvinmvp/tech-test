import { derive, proxyWithHistory } from "valtio/utils";
import { proxy } from "valtio";
const storeFactory = ({
  apiMethod,
  resourceName,
  idKey,
  loadOnRender,
  ...extraProperties
}) => {
  const baseStore = proxy({
    data: null,
    loading: false,
    error: null,
    selected: null,
    apiMethod,
    resourceName,
    idKey,
    loadOnRender,
    load: async (params) => {
      baseStore.loading = true;
      baseStore.data = null;

      //this is just for the UI spinner to show up a bit
      const r = await new Promise((resolve) =>
        setTimeout(async () => {
          resolve(
            await baseStore.apiMethod(params).catch((e) => {
              console.error(`Failed to load ${baseStore.resourceName}`, e);
              baseStore.error = true;
            })
          );
        }, 800)
      );
      baseStore.data =
        r?.data?.map((item) => ({ ...item, appId: item[baseStore.idKey] })) ||
        null;
      baseStore.loading = false;
    },
    select: (id) => {
      baseStore.selected = baseStore.findById(id);
    },
    selectAll: () => {
      baseStore.selected = null;
    },
    findByName: (name) => {
      return baseStore.data?.find((item) => item.name === name);
    },
    findById: (id) => {
      return baseStore.data?.find((item) => item[baseStore.idKey] === id);
    },
    ...extraProperties,
  });
  if (baseStore.loadOnRender) baseStore.load();
  return baseStore;
};

export default storeFactory;
