import React from "react";
import { Spinner, Text, Flex } from "ui/base";

export const UserInfo = ({ user, loading, error }) => {
  return (
    <Flex
      ml={"auto"}
      cursor={"pointer"}
      mr={[4, 7]}
      height={3}
      textAlign="center"
    >
      {!loading && !error && user ? (
        <>
          <Text
            textAlign="center"
            fontSize={2}
            fontWeight="bold"
            p={1}
            borderRadius={2}
            mr={1}
            color="white"
            bg="accent"
          >
            {user.firstName?.charAt(0)}
            {user.lastName?.charAt(0)}
          </Text>
          <Text
            textAlign="center"
            color="primary"
            fontSize={1}
            fontWeight="bold"
          >
            {user.firstName} {user.lastName}
          </Text>
        </>
      ) : (
        !error && <Spinner />
      )}
    </Flex>
  );
};
