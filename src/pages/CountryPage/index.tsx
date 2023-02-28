import { countryStore, getCountryByNameAsync } from "entities";

import { useParams } from "react-router-dom";

const CountryPage = () => {
  const { countryName } = useParams();
  const activeCountry = countryStore((state) => state.activeCountry);
  const setActiveCountry = countryStore((state) => state.setActiveCountry);

  const { isFetching } = getCountryByNameAsync({
    countryName: countryName!,
    onSuccess: ({ data }) => setActiveCountry(data[0]),
  });

  if (isFetching) return <>Loading...</>;

  if (!activeCountry) return <>No such country</>;

  return <div>{activeCountry.area}</div>;
};

export default CountryPage;