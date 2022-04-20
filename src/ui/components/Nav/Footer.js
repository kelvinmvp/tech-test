import React from "react";
import { Link } from "react-router-dom";
import { Box, Text } from "ui/base";

const Footer = () => {
  return (
    <Box mb={4} mt="auto">
      <Text textAlign="center" color="primary" fontSize={1} fontWeight="bold">
        <Link to="/">{"Terms & Conditions"}</Link>
        {" | "}
        <Link to="/">{"Privacy Policy"}</Link>
      </Text>
    </Box>
  );
};

export default Footer;
