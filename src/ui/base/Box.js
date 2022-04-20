import styled from "styled-components/macro";
import { space, layout, color, border, position, borders } from "styled-system";

const Box = styled.div`
  visibility: ${(props) => props.visibility || "initial"};
  ${color} ${position}
    ${layout} ${space} ${borders};
`;
Box.defaultProps = {
  alignItems: "center",
};

export { Box };
