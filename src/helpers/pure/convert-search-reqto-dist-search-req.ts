import { IDistributerSearchRequest } from "../../models/IDistributerSearchRequest";
import { ISearchRequest } from "../../models/ISearchRequest";

export function convertSearchReqToDistributerSearchReq(
  request: ISearchRequest
): IDistributerSearchRequest {
  return {
    DepartDate: request.departDate,
    ReturnDateToOrigin: request.returnDateToOrigin,
    FromCityCode: request.departCityCode,
    ToCityCode: request.destCityCode,
    Passengers: request.passengers,
    FullName: "John Doe",
  };
}
