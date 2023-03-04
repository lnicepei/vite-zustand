import { StateCreator, create } from "zustand";
import { devtools, persist } from "zustand/middleware";

import { useQuery } from "react-query";

import {
  Country,
  GetCountriesListAsyncParams,
  GetCountryParams,
  ListCountry,
  getCountriesList,
  getCountryByName,
} from "shared/api";

interface CountriesSlice {
  listCountries: ListCountry[];
  activeCountry: Country;
  setActiveCountry: (country: Country) => void;
  setListCountries: (country: ListCountry[]) => void;
}

export const withMiddlewares = (
  f: StateCreator<CountriesSlice>,
  name: string
) => devtools(persist(f, { name }));

export const countryStore = create<CountriesSlice>()(
  withMiddlewares(
    (set) => ({
      listCountries: [],
      activeCountry: {} as Country,
      setActiveCountry: (activeCountry) => set(() => ({ activeCountry })),
      setListCountries: (listCountries) => set(() => ({ listCountries })),
    }),
    "all-countries"
  )
);

export const getCountryByNameAsync = (params: GetCountryParams) =>
  useQuery("county-single", () => getCountryByName(params), {
    onSuccess: params.onSuccess,
  });

export const getCountriesListAsync = (params: GetCountriesListAsyncParams) =>
  useQuery("countries-all", () => getCountriesList(params), {
    onSuccess: params.onSuccess,
  });