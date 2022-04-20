import styled from "styled-components/macro";
import { Flex } from "ui/base";

const IconBox = styled(Flex)`
  cursor: pointer;
  align-items: center;
  &:hover {
    ${(props) =>
      !props.disabledHover &&
      `
      background-color:${props.theme.colors.lightGray}
    `}
  }
`;

const IconButton = ({ icon, active, ...boxProps }) => {
  return (
    <IconBox {...boxProps} p={1} borderRadius={1}>
      {icon}
    </IconBox>
  );
};

export { IconButton };
