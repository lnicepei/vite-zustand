import { Box, Text } from "@chakra-ui/react";
import React from "react";
import { useParams } from "react-router-dom";

const Country = () => {
  const { countryName } = useParams();
  console.log(countryName);

  return (
    <Box w={50} bg="azure">
      <Text color="GrayText">{countryName}</Text>
    </Box>
  );
};

export default Country;