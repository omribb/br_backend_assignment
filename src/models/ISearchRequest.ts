import { TPassengersComposition } from "./TPassengersComposition";

export interface ISearchRequest {
  departCityCode: string;
  destCityCode: string;
  departDate: string;
  returnDateToOrigin: string;
  passengers: TPassengersComposition;
}
