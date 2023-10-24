import request from "../../utils/request";
const carService = {
  getList: (car: any) => request.get(`/cars?class=${car}`),
};

export default carService;
