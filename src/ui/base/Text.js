import {
  fontSize,
  fontWeight,
  space,
  lineHeight,
  color,
  typography,
} from "styled-system";
import styled from "styled-components/macro";
import { Box } from "./Box";

const Text = styled(Box)`
  ${space}
  ${fontSize}
  ${fontWeight}
  ${lineHeight}
  ${color}
  ${typography}
`;
Text.propTypes = {
  ...space.propTypes,
  ...fontSize.propTypes,
  ...fontWeight.propTypes,
  ...lineHeight.propTypes,
  ...color.propTypes,
  ...typography.propTypes,
};

export { Text };
