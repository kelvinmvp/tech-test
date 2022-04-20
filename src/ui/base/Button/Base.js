import styled from "styled-components";
import { Flex } from "..";
import {
  color,
  position,
  flexbox,
  layout,
  space,
  borders,
} from "styled-system";

const Input = styled.input``;

const Base = styled.button`
  display: flex;
  ${color} ${position} ${flexbox}
    ${layout} ${space} ${borders}
  ${(props) => props.selectable && "display:none!important;"}
  cursor: pointer;
  align-items: start;
  &:hover {
    background-color: ${(props) =>
      props.selectable && props.theme.colors.primary};
  }
`;

Base.defaultProps = {
  px: 3,
  py: 1,
  as: "a",

  alignItems: "center",
};

const Parent = styled(Flex)`
  ${(props) => props.err && ``}
  &:hover > * {
    display: flex !important;
  }
  &:hover {
    z-index: 100;
  }
`;
export { Base, Parent, Input };
