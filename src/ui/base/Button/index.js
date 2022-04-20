import { IconButton } from "./IconButton";
import { Base, Parent, Input } from "./Base";
import { Cell } from "./Cell";
import { Spinner } from "..";

const Submit = ({ children, err, endAdornment, loading, ...props }) => {
  return (
    <Cell.Container err={err} bg="primary">
      <Cell.Child endAdornment={endAdornment} button {...props}>
        {loading ? <Spinner width={12} height={12} /> : children}
      </Cell.Child>
    </Cell.Container>
  );
};

export { IconButton as Icon, Base, Cell, Parent, Input, Submit };
