import request from "../../utils/request";
export const routeService = {
  getList: () => request.get("/permission-route"),
  createElement: (data: any) => request.post("/permission-route", data),
};
