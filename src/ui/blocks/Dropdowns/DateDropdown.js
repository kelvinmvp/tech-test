import React, { forwardRef } from "react";
import { Box, Cell, Flex, Text } from "ui/base";
import { ReactComponent as CalendarIcon } from "assets/icons/calendar.svg";

import DatePicker from "react-datepicker";
import styled, { useTheme } from "styled-components/macro";

const DateDropdown = ({ placeholder, err, selected, onSelect, onReset }) => {
  const DropdownButton = forwardRef(({ onClick }, ref) => {
    return (
      <Cell.Child
        endAdornment={<CalendarIcon />}
        onClick={onClick}
        button
        ref={ref}
        firstRow
      >
        {selected ? selected.toLocaleDateString() : placeholder}
      </Cell.Child>
    );
  });
  const theme = useTheme();
  return (
    <Cell.Container err={err}>
      <DatePicker
        selected={selected}
        onChange={onSelect}
        customInput={<DropdownButton placeholder={placeholder} />}
        renderCustomHeader={({
          monthDate,
          customHeaderCount,
          decreaseMonth,
          increaseMonth,
        }) => (
          <Flex justifyContent="space-around" px={32} alignItems="center">
            <style>{`
            .react-datepicker__day-name{color:white}
            .react-datepicker__header--custom{
              color:white!important;
              background-color:${theme.colors.secondary}!important;
            }
            
            .react-datepicker__triangle{
              display:none;
            }
            `}</style>
            <button
              aria-label="Previous Month"
              className={
                "react-datepicker__navigation react-datepicker__navigation--previous"
              }
              onClick={decreaseMonth}
            >
              <span
                className={
                  "react-datepicker__navigation-icon react-datepicker__navigation-icon--previous"
                }
              >
                {"<"}
              </span>
            </button>
            <Text color="white" fontSize={1}>
              <b>
                {monthDate.toLocaleString("en-US", {
                  month: "short",
                  year: "numeric",
                })}
              </b>
            </Text>
            <a style={{ marginTop: 2.5, cursor: "pointer" }} onClick={onReset}>
              Reset
            </a>
            <button
              aria-label="Next Month"
              className={
                "react-datepicker__navigation react-datepicker__navigation--next"
              }
              onClick={increaseMonth}
            >
              <span
                className={
                  "react-datepicker__navigation-icon react-datepicker__navigation-icon--next"
                }
              >
                {">"}
              </span>
            </button>
          </Flex>
        )}
      />
    </Cell.Container>
  );
};

export default styled(DateDropdown)`
  & > .react-datepicker-wrapper {
    display: inherit;
  }
`;
