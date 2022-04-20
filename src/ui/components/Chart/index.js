import React from "react";
import { Flex, Text, Box } from "ui/base";
import { Chart as ChartJS, ArcElement } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { useTheme } from "styled-components";

ChartJS.register(ArcElement);

export const Chart = ({ groupedReports, total, chartType }) => {
  const theme = useTheme();
  const labels = Object.keys(groupedReports);
  const data = labels.map((label) => {
    const reports = groupedReports[label];
    const sum = reports.reduce((acc, report) => {
      acc += report.amount;
      return acc;
    }, 0);
    return sum.toFixed(2);
  });
  const chartData = {
    labels,
    datasets: [
      {
        data,
        backgroundColor: theme.chartColors,
        borderWidth: 0,
      },
    ],
  };
  return (
    <Flex width="full" flexDirection="column" ml={15}>
      <Flex bg="lightBlue" borderRadius={2} mb={5} p={4} width="full">
        {labels.map((label, index) => {
          return (
            <Flex key={`${index}`} flexDirection="row" mr={36}>
              <Box
                height={15}
                width={15}
                borderRadius={2}
                bg={theme.chartColors[index]}
                mr={12}
              />
              <Box>{label}</Box>
            </Flex>
          );
        })}
      </Flex>
      <Box height={212} width={212}>
        <Doughnut data={chartData} />
      </Box>
      <Flex bg="lightBlue" borderRadius={2} mt={5} p={4} width="full">
        <Text color="textPrimary" fontSize={1} fontWeight="bold" mr="auto">
          {chartType.toUpperCase()} TOTAL | {total} USD
        </Text>
      </Flex>
    </Flex>
  );
};
