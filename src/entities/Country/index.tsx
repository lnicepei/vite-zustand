import React from "react";
import { useParams } from "react-router-dom";

const Country = () => {
  const { countryName } = useParams();

  console.log(countryName);

  return <div>{countryName}</div>;
};

export default Country;
