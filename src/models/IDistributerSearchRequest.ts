import { TPassengersComposition } from "./TPassengersComposition";

export interface IDistributerSearchRequest {
  FullName: string;
  FromCityCode: string;
  ToCityCode: string;
  DepartDate: string;
  ReturnDateToOrigin: string;
  Passengers: TPassengersComposition;
}
