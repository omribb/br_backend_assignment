import { Router } from "express";
import { ISearchRequest } from "../models/ISearchRequest";
import { calcNetPrice } from "../helpers/pure/calc-net-price";
import { calcTotalPrice } from "../helpers/pure/calc-total-price";
import { convertFlightResponseToSearchResponse } from "../helpers/pure/convert-flight-response-to-search-response";
import { convertSearchReqToDistributerSearchReq } from "../helpers/pure/convert-search-reqto-dist-search-req";
import { searchFlightsOnDistributer } from "../helpers/side-effects/search-flights-on-distributer";
import { AIRLINES_COMMISSION } from "../static/airlines-commission";
import { COMMISSION_RULES } from "../static/commission-rules";

export const searchController = Router();

searchController.post("/", async function (req, res) {
  const request = req.body as ISearchRequest;
  const flights = await searchFlightsOnDistributer(
    convertSearchReqToDistributerSearchReq(request)
  );
  for (const result of flights.Results) {
    for (const price of result.Pricing) {
      price.netPrice = calcNetPrice(
        AIRLINES_COMMISSION,
        result.Airline,
        price.Base,
        price.Tax
      );
    }
    result.totalPrice = calcTotalPrice(
      request.passengers,
      result.Pricing,
      COMMISSION_RULES,
      result.Airline
    );
  }
  res.send(convertFlightResponseToSearchResponse(request.passengers, flights));
});
