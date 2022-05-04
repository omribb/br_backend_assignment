export interface IFlightsResponse {
  Results: Result[];
}

export interface Result {
  Id: number;
  Airline: string;
  Class: string;
  Legs: Leg[];
  Pricing: IFlightsResponsePricing[];
  totalPrice?: number;
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

export interface IFlightsResponsePricing {
  Type: string;
  Tax: number;
  Base: number;
  netPrice?: number;
}
