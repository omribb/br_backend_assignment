import axios from "axios";
import _ from "lodash";
import { IDistributerSearchRequest } from "../../models/IDistributerSearchRequest";
import { IFlightsResponse } from "../../models/IFlightsResponse";

export async function searchFlightsOnDistributer(
  request: IDistributerSearchRequest
): Promise<IFlightsResponse> {
  const endpoint = process.env["DISTRIBUTER_ENDPOINT"];
  if (!endpoint) {
    throw new Error("env var DISTRIBUTER_ENDPOINT is not defined");
  }
  try {
    const res = await axios.post<IFlightsResponse>(endpoint, request);
    return res.data;
  } catch (ex) {
    console.error(_.get(ex, "response.data"));
    throw new Error("failed to fetch flights");
  }
}
