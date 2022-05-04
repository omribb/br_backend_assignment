import { IAirlineCommission } from "../../models/IAirlineCommission";

export function calcNetPrice(
  airlinesCommissions: Readonly<IAirlineCommission[]>,
  airlineCode: string,
  base: number,
  tax: number
): number {
  const airlineCommission = airlinesCommissions.find(
    (c) => c.airlineCode === airlineCode
  )?.commission;
  if (!airlineCommission) {
    throw new Error("no commission was found for airline " + airlineCode);
  }
  return base * (airlineCommission + 1) + tax;
}
