import React, { useState } from "react";
import styled from "styled-components";

import { Flex, Text, Box } from "ui/base";

import { formatAmount } from "utils/formatAmount";

const Table = styled.table`
  -ms-overflow-style: none; /* Internet Explorer 10+ */
  scrollbar-width: none; /* Firefox */
  &::-webkit-scrollbar {
    display: none; /* Safari and Chrome */
  }
`;

const CollapsableTable = ({ item, itemKey, open, onClick, hidePanel }) => {
  const total = item.reduce((sum, payment) => {
    sum += payment.amount;
    return sum;
  }, 0);

  const rowStyle = (index) => ({
    backgroundColor: index % 2 === 1 ? "white" : "",
    display: "flex",
    justifyContent: "space-between",
    paddingLeft: 23,
    paddingRight: 23,
  });
  return (
    <Box width="full" mb={"2.5px"}>
      {!hidePanel && (
        <Flex
          borderRadius={3}
          mt={"2.5px"}
          bg="white"
          width="full"
          onClick={onClick}
          style={{ cursor: "pointer" }}
          height="70px"
          jusifyContent="start"
          alignItems="center"
          px={24}
        >
          <Text color="textPrimary" fontSize={1} fontWeight="bold">
            {itemKey}
          </Text>
          <Text color="textPrimary" fontSize={1} fontWeight="bold" ml="auto">
            Total: {formatAmount(total)} USD
          </Text>
        </Flex>
      )}
      {open && (
        <Box width="full" px={15} pt={hidePanel ? 0 : 14}>
          <Table
            style={{
              width: "100%",
              tableLayout: "fixed",
              display: "flex",
              flexDirection: "column",
              height: 120,
              overflowY: "scroll",
            }}
          >
            <thead>
              <tr style={rowStyle(1)}>
                <td>Date</td>
                <td>Transaction ID</td>
                <td>Amount</td>
              </tr>
            </thead>
            <tbody>
              {item.map((payment, index) => {
                return (
                  <tr style={rowStyle(index)}>
                    <td>{payment.created}</td>
                    <td>{payment.paymentId.slice(-5, -1)}</td>
                    <td>{formatAmount(payment.amount)} USD</td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </Box>
      )}
    </Box>
  );
};

const CollapsableTablesPanel = ({ title, groupedReports, ...props }) => {
  const [openIndex, setOpenIndex] = useState(0);
  // console.log(items);
  return (
    <Flex
      bg="lightBlue"
      flexDirection="column"
      borderRadius={2}
      p={4}
      width="full"
      alignItems="start"
      {...props}
    >
      <Text
        color="textPrimary"
        fontSize={1}
        mb={4}
        textAlign="start"
        fontWeight="bold"
      >
        <b>{title}</b>
      </Text>
      <Flex flexDirection="column" width="full">
        {Object.keys(groupedReports).map((key, index) => (
          <CollapsableTable
            hidePanel={Object.keys(groupedReports).length === 1}
            itemKey={key}
            item={groupedReports[key]}
            open={index === openIndex}
            onClick={() => setOpenIndex(index)}
          />
        ))}
      </Flex>
    </Flex>
  );
};

export default CollapsableTablesPanel;
