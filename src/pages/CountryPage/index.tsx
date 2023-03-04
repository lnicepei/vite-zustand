import { Box, Image } from "@chakra-ui/react";
import React from "react";
import { useParams } from "react-router-dom";

const CountryPage = () => {
  const { countryName } = useParams();
  // const activeCountry = countryStore((state) => state.activeCountry);
  // const setActiveCountry = countryStore((state) => state.setActiveCountry);
  //
  // const { isFetching } = getCountryByNameAsync({
  //   countryName: countryName!,
  //   onSuccess: ({ data }) => setActiveCountry(data[0]),
  // });

  // if (isFetching) return <>Loading...</>;
  //
  // if (!activeCountry) return <>No such country</>;

  return (
    <Box
      bg="white"
      rounded="md"
      p={6}
      filter="auto"
      blur="5px"
      boxShadow="2xl"
      m={4}
    >
      <Image src="https://bit.ly/dan-abramov" />
      {/*<Text color="GrayText">{activeCountry.area}</Text>*/}
    </Box>
  );
};

export default CountryPage;