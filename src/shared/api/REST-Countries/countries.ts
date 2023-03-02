import { AxiosPromise } from "axios";

import { apiInstance } from "./base";
import { Country } from "./models";

const BASE_URL = "/name";

type OnSuccess = ({ data }: { data: Country[] }) => void;

export type GetCountryParams = {
  countryName: string;
  onSuccess: OnSuccess;
};

export type GetCountriesListAsyncParams = {
  onSuccess: OnSuccess;
};

export const getCountryByName = ({
  countryName,
  ...params
}: GetCountryParams): AxiosPromise<Country[]> =>
  apiInstance.get(`${BASE_URL}/${countryName}`, { params });

export const getCountriesList = (
  params?: GetCountriesListAsyncParams
): AxiosPromise<Country[]> => apiInstance.get(`${BASE_URL}/all`, { params });