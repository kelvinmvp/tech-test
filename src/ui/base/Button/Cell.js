import React, { forwardRef, useEffect, useRef, useState } from "react";
import styled from "styled-components/macro";
import { Flex, Box } from "ui/base";
import { Base, Parent } from "./Base";

const Child = forwardRef(({ children, endAdornment, ...props }, ref) => {
  return (
    <Base
      borderTopLeftRadius={props.firstRow && 2}
      borderTopRightRadius={props.firstRow && 2}
      borderBottomLeftRadius={props.lastRow && 2}
      borderBottomRightRadius={props.lastRow && 2}
      width="100%"
      justifyContent="start"
      ref={ref}
      {...props}
    >
      <nobr>{children}</nobr>
      {endAdornment !== undefined && (
        <Box ml="auto" pl={5}>
          {endAdornment}
        </Box>
      )}
    </Base>
  );
});

const Container = ({ children, err, ...props }) => {
  // useEffect(() => setWidth(sizeRef.current?.clientWidth), [sizeRef]);
  const parentProps = {
    bg: "secondary",
    color: "white",
    borderRadius: 2,
    border: err && "1px solid red",
    flexDirection: "column",
    as: "div",
  };
  return (
    <Box position="relative" mt={[10, 10]}>
      <Parent position="absolute" {...parentProps} {...props}>
        {children}
      </Parent>
      <Parent style={{ visibility: "hidden" }} {...parentProps} {...props}>
        {children}
      </Parent>
    </Box>
  );
};

export const Cell = { Parent, Child, Container };
