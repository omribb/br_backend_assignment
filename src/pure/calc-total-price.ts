import { ICommissionRule } from "../models/ICommissionRule";
import { IFlightsResponsePricing } from "../models/IFlightsResponse";
import { TPassengersComposition } from "../models/TPassengersComposition";

export function calcTotalPrice(
  passengerComposition: TPassengersComposition,
  flightPricing: IFlightsResponsePricing[],
  commissionRules: Readonly<ICommissionRule[]>,
  airlineCode: string
): number {
  let totalPrice = 0;
  for (const price of flightPricing) {
    totalPrice +=
      (price.netPrice ?? 0) *
      (passengerComposition[price.Type.toLowerCase()] ?? 0);
  }
  const rule = commissionRules.find(
    (r) =>
      r.Airlines.includes(airlineCode) &&
      r.FromPrice <= totalPrice &&
      r.ToPrice >= totalPrice
  );
  if (!rule) {
    console.warn("no rule matched the itinerary");
    return totalPrice;
  }
  return (rule.Commission / 100 + 1) * totalPrice;
}
