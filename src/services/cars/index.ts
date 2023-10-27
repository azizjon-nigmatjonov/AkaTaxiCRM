import request from "../../utils/request";
const carService = {
  getList: (car: any) => request.get(`/cars?class=${car}`),
  getCarClasses: () => request.get('/car-classes')
};

export default carService;
