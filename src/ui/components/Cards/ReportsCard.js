import React, { useState } from "react";
import { useTheme } from "styled-components/macro";
import { ActionCard } from "ui/blocks";
import { InputGroup } from "ui/components";
import { useSnapshot } from "valtio";
import { projectStore, gatewayStore, reportStore } from "store";

const ReportsCard = () => {
  const theme = useTheme();
  const projects = useSnapshot(projectStore);
  const gateways = useSnapshot(gatewayStore);
  const reports = useSnapshot(reportStore);
  const [dates, setDates] = useState({
    from: null,
    to: null,
  });
  const mapItem = ({ appId, name }) => ({ appId, name });
  const getDropdownOptions = (store) => ({
    selected: store.selected,
    options: store.data?.map(mapItem) || [],
    onSelect: (appId) => store.select(appId),
    selectAll: () => store.selectAll(),
  });
  return (
    <ActionCard
      title="Reports"
      subtitle="Easily generate a report of your transactions"
      flexDirection={["column", "row"]}
      pr={[4, 7]}
      width={theme.computedSizes.content.width}
      actions={
        <InputGroup
          ml={[0, "auto"]}
          justifyContent={["center", "flex-end"]}
          elements={[
            {
              type: "values",
              itemKey: "project",
              width: 185.25,
              ...getDropdownOptions(projects),
            },
            {
              type: "values",
              itemKey: "gateway",
              width: 185.25,
              ...getDropdownOptions(gateways),
            },
            {
              type: "date",
              placeholder: "From date...",
              selected: dates.from,
              onSelect: (date) => setDates({ ...dates, from: date }),
              onReset: () => setDates({ ...dates, from: null }),
            },
            {
              type: "date",
              placeholder: "To date...",
              selected: dates.to,
              onSelect: (date) => setDates({ ...dates, to: date }),
              onReset: () => setDates({ ...dates, to: null }),
            },
            {
              type: "submit",
              text: "Generate Report",
              onClick: () => {
                reports.load({
                  to: dates.to?.toISOString().split("T")[0],
                  from: dates.from?.toISOString().split("T")[0],
                  projectId: projects.selected?.projectId || '',
                  gatewayId: gateways.selected?.gatewayId || '',
                });
              },
            },
          ]}
        />
      }
    />
  );
};

export default ReportsCard;
