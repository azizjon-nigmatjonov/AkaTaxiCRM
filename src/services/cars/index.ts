import request from "../../utils/request";
const carService = {
  getList: (car?: any) => request.get(`/cars${car ? `?class=${car}` : ''}`),
  getCarClasses: () => request.get('/car-classes')
};

export default carService;
