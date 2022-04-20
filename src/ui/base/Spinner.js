import React from "react";
import styled from "styled-components/macro";
import { layout, space } from "styled-system";

const Spinner = ({ ...props }) => (
  <StyledSpinner viewBox="0 0 50 50" {...props}>
    <circle
      className="path"
      cx="25"
      cy="25"
      r="20"
      fill="none"
      strokeWidth="4"
    />
  </StyledSpinner>
);

const StyledSpinner = styled.svg`
  ${layout}
  ${space}
  animation: rotate 2s linear infinite;
  width: ${(props) => props.width || props.theme.sizes[3]}px;
  height: ${(props) => props.height || props.theme.sizes[3]}px;

  & .path {
    stroke: ${(props) =>
      props.theme.colors[props.spinnerColor] || props.theme.colors.lightGray};
    stroke-linecap: round;
    animation: dash 1.5s ease-in-out infinite;
  }

  @keyframes rotate {
    100% {
      transform: rotate(360deg);
    }
  }

  @keyframes dash {
    0% {
      stroke-dasharray: 1, 150;
      stroke-dashoffset: 0;
    }
    50% {
      stroke-dasharray: 90, 150;
      stroke-dashoffset: -35;
    }
    100% {
      stroke-dasharray: 90, 150;
      stroke-dashoffset: -124;
    }
  }
`;

export { Spinner };
