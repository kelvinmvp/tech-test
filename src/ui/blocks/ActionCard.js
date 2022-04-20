import React from "react";
import { Flex, Box, Text } from "ui/base";
import { useTheme } from "styled-components";

export const ActionCard = ({ title, subtitle, actions, ...containerProps }) => {
  return (
    <Flex {...containerProps}>
      <Box>
        <Text color="textPrimary" fontSize={2} fontWeight="bold">
          {title}
        </Text>
        <Text color="textSecondary" fontSize={1} fontWeight="bold">
          {subtitle}
        </Text>
      </Box>
      {actions}
    </Flex>
  );
};
