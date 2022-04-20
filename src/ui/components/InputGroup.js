import React from "react";

import { Box, Flex, Button } from "ui/base";
import { Dropdowns } from "ui/blocks";

const InputGroup = ({ elements, ...props }) => {
  return (
    <Flex flexWrap="wrap" pt={[3, 0]} {...props}>
      {elements.map((element, index) => {
        const type = element.type;
        return (
          <Flex pl={1} key={`${index}`}>
            {(type === "values" && <Dropdowns.Values {...element} />) ||
              (type === "date" && <Dropdowns.Date {...element} />) ||
              (type === "submit" && (
                <Button.Submit {...element}>{element.text}</Button.Submit>
              ))}
          </Flex>
        );
      })}
    </Flex>
  );
};

export default InputGroup;
