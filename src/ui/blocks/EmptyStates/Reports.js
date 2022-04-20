import React from "react";
import { ReactComponent as EmptySVG } from "assets/EmptyStates/Reports.svg";
import { Box, Text, Flex } from "ui/base";

const ReportsEmptyState = () => {
  return (
    <Flex
      flexDirection="column"
      maxWidth={470}
      my="auto"
      justifyContent={"space-evenly"}
    >
      <Box mb={4}>
        <Text
          color="textPrimary"
          fontSize={2}
          mb={1}
          textAlign="center"
          fontWeight="bold"
        >
          <b>No reports</b>
        </Text>
        <Text
          color="textSecondary"
          textAlign="center"
          fontSize={1}
          fontWeight="bold"
        >
          Currently you have no data for the reports to be generated. Once you
          start generating traffic through the Balance application the reports
          will be shown.
        </Text>
      </Box>
      <EmptySVG />
    </Flex>
  );
};

export default ReportsEmptyState;
