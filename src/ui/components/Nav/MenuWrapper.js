import React, { Children, cloneElement, isValidElement, useState } from "react";
import styled, { useTheme, css, keyframes } from "styled-components/macro";
import { Box, Flex } from "ui/base";
import { NavBar, SideBar, Footer } from ".";
import { useView } from "context";

const ContentContainer = styled(Flex)`
  min-height: calc(
    100vh - ${(props) => props.theme.sizes[props.theme.navBarTopPadding]}px
  );
`;

const MenuWrapper = ({ children }) => {
  const { sidebarOpen } = useView();
  const theme = useTheme();

  const toggleSideBar = () => sidebarOpen.set(!sidebarOpen.value);

  return (
    <Box position="relative">
      <NavBar toggleSideBar={toggleSideBar} />
      {sidebarOpen.value && <SideBar />}
      <ContentContainer
        position="absolute"
        flexDirection="column"
        width={theme.computedSizes.content.width}
        ml={theme.computedSizes.content.ml}
        pt={theme.navBarTopPadding}
        mr={[4, 7]}
      >
        {children}
        <Footer />
      </ContentContainer>
    </Box>
  );
};

export default MenuWrapper;
