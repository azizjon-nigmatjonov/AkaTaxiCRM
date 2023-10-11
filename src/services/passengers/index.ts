import request from "../../utils/request";
const passengerService = {
  getList: () => request.get("/passengers"),
  createElement: (data: any) => request.post('/passegners', { data })
};

export default passengerService;
