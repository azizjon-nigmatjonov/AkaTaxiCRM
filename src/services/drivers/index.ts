import request from "../../utils/request";
const driverService = {
  getList: () => request.get("/drivers")
};

export default driverService;
