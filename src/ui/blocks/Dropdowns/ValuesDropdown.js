import React from "react";
import { Cell, Box, Flex } from "ui/base";
import { ReactComponent as ArrowDown } from "assets/icons/arrow-down.svg";
import { useTheme } from "styled-components/macro";

const Dropdown = ({
  itemKey,
  options,
  selected,
  onSelect,
  selectAll,
  err,
  ...containerProps
}) => {
  const all = `All ${itemKey}s`;
  return (
    <>
      <Cell.Container err={err} {...containerProps}>
        <Cell.Child endAdornment={<ArrowDown />} button firstRow>
          {Array.isArray(selected) && selected.length === 0
            ? all
            : selected?.name || `Select ${itemKey}...`}
        </Cell.Child>
        <Cell.Child width="full" selectable onClick={selectAll}>
          {all}
        </Cell.Child>
        {options?.map((option, index) => (
          <Cell.Child
            key={`${option.name}-${index}-${option.appId}`}
            width="full"
            selectable
            onClick={() => onSelect(option.appId)}
            lastRow={index === options.length - 1}
          >
            {option.name}
          </Cell.Child>
        ))}
      </Cell.Container>
    </>
  );
};

// Dropdown.propTypes = {
//   placeholder: string,
//   options: {
//     id: number,
//     label: string,
//     value: object,
//   },
//   selected: number,
//   onSelect: func,
// };

export default Dropdown;
