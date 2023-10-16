import request from "../../utils/request";
const driverService = {
  getList: () => request.get("/drivers"),
  createElement: (data: any) => request.post('/drivers', { ...data })
};

export default driverService;
