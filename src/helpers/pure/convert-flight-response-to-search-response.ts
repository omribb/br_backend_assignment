import { IFlightsResponse } from "../../models/IFlightsResponse";
import {
  ISearchResponse,
  ISearchResponseResult,
} from "../../models/ISearchResponse";
import { TPassengersComposition } from "../../models/TPassengersComposition";

export function convertFlightResponseToSearchResponse(
  passengerComposition: TPassengersComposition,
  flightResponse: IFlightsResponse
): ISearchResponse {
  const result: ISearchResponse = { Results: [] };
  for (const flight of flightResponse.Results) {
    const flightResponse: ISearchResponseResult = {
      Airline: flight.Airline,
      Class: flight.Class,
      Id: flight.Id,
      Legs: flight.Legs,
      Pricing: flight.Pricing.map((p) => ({
        Amount: passengerComposition[p.Type.toLowerCase()] ?? 0,
        Type: p.Type,
        Price:
          (p.netPrice ?? 0) * (passengerComposition[p.Type.toLowerCase()] ?? 0),
      })),
      TotalPrice: flight.totalPrice ?? 0,
    };
    result.Results.push(flightResponse);
  }
  return result;
}
