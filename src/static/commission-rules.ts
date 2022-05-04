import { ICommissionRule } from "../models/ICommissionRule";

export const COMMISSION_RULES: Readonly<ICommissionRule[]> = Object.freeze([
  {
    FromPrice: 300,
    ToPrice: 450,
    Airlines: ["LY"],
    Commission: -1.5,
    Class: "Economy",
  },
  {
    FromPrice: 451,
    ToPrice: 600,
    Airlines: ["LY"],
    Commission: -2.5,
    Class: "Economy",
  },
  {
    FromPrice: 500,
    ToPrice: 600,
    Airlines: ["LY", "TK"],
    Commission: -3.2,
    Class: "First",
  },
  {
    FromPrice: 450,
    ToPrice: 700,
    Airlines: ["AA", "LY"],
    Commission: -1.2,
    Class: "Business",
  },
  {
    FromPrice: 701,
    ToPrice: 800,
    Airlines: ["AA", "DL"],
    Commission: -0.8,
    Class: "Business",
  },
  {
    FromPrice: 400,
    ToPrice: 500,
    Airlines: ["TK", "SU"],
    Commission: 1.3,
    Class: "Economy",
  },
]);
