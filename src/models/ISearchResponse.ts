export interface ISearchResponse {
  Results: ISearchResponseResult[];
}

export interface ISearchResponseResult {
  Id: number;
  Airline: string;
  Class: string;
  Legs: Leg[];
  Pricing: Pricing[];
  TotalPrice: number;
}

export interface Leg {
  Index: number;
  Flights: Flight[];
}

export interface Flight {
  Index: number;
  Airline?: string;
  FromcityCode?: string;
  ToCityCode: string;
  DepartDate: Date;
  ArrivalDate: Date;
  FromCityCode?: string;
}

export interface Pricing {
  Type: string;
  Price: number;
  Amount: number;
}
