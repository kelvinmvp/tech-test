import React, { useCallback, useMemo } from "react";
import { reportStore } from "store";
import { CollapsableTablesPanel } from "ui/blocks/Panels";
import { useSnapshot } from "valtio";
import { Flex, Text } from "ui/base";
import { projectStore } from "store";
import { gatewayStore } from "store";

import { Chart } from "ui/components/Chart";
import { formatAmount } from "utils/formatAmount";

export const ReportsPanel = () => {
  const reports = useSnapshot(reportStore);
  const projects = useSnapshot(projectStore);
  const gateways = useSnapshot(gatewayStore);

  const type = useMemo(() => {
    return {
      projects: projects.selected?.name ? "single" : "all",
      gateways: gateways.selected?.name ? "single" : "all",
    };
  }, [reports]);

  const title = useMemo(
    () =>
      `${projects.selected?.name || "All projects"} | ${
        gateways.selected?.name || "All gateways"
      } `,
    [reports]
  );

  const reduceByGateway = (items, payment) => {
    const { gatewayId } = payment;
    const name = gateways.findById(gatewayId)?.name;
    const prev = items[name] || [];
    items[name] = [...prev, payment];
    return items;
  };
  const reduceByProject = (items, payment) => {
    const { projectId } = payment;
    const name = projects.findById(projectId)?.name;
    const prev = items[name] || [];
    items[name] = [...prev, payment];
    return items;
  };

  const dataFormatter = useMemo(() => {
    if (type.projects === "all")
      return { reducer: reduceByProject, reducerType: "project" };
    if (type.projects === "single" && type.gateways === "all")
      return { reducer: reduceByGateway, reducerType: "gateway" };
    if (type.projects === "single" && type.gateways === "single")
      return { reducer: reduceByProject, reducerType: "project" };
  }, [reports]);

  const displayChart = type.projects !== type.gateways;

  const total = useMemo(
    () =>
      reports?.data?.reduce((sum, payment) => {
        sum += payment.amount;
        return sum;
      }, 0),
    [reports]
  );

  return (
    <Flex
      mt={4}
      pr={[4, 7]}
      width="full"
      flexDirection={displayChart ? "row" : "column"}
      alignItems="stretch"
    >
      <CollapsableTablesPanel
        title={title}
        groupedReports={reports?.data?.reduce(dataFormatter.reducer, {})}
        reportType={dataFormatter.reducerType}
        mr={displayChart ? 15 : 0}
      />
      {displayChart && (
        <Chart
          groupedReports={reports?.data?.reduce(dataFormatter.reducer, {})}
          total={formatAmount(total || 0)}
          chartType={
            dataFormatter.reducerType === "project" ? "gateway" : "project"
          }
        />
      )}
      {!displayChart && (
        <Flex bg="lightBlue" borderRadius={2} mt={5} p={4} width="full">
          <Text color="textPrimary" fontSize={1} fontWeight="bold" mr="auto">
            Total: {formatAmount(total || 0)} USD
          </Text>
        </Flex>
      )}
    </Flex>
  );
};
