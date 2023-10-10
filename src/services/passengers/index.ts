import request from "../../utils/request";
const passengerService = {
  getList: () => request.get("/passengers")
};

export default passengerService;
