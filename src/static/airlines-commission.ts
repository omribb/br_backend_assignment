import { IAirlineCommission } from "../models/IAirlineCommission";

export const AIRLINES_COMMISSION: Readonly<IAirlineCommission[]> =
  Object.freeze([
    { airlineCode: "LY", commission: 0.02 },
    { airlineCode: "TK", commission: -0.005 },
    { airlineCode: "AA", commission: 0.012 },
    { airlineCode: "DL", commission: 0.03 },
    { airlineCode: "A3", commission: -0.05 },
    { airlineCode: "SU", commission: 0.04 },
  ]);
