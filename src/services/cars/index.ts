import request from "../../utils/request";
const carService = {
  getList: (car?: any) => request.get(`/cars${car ? `?class=${car}` : ''}`),
  getCarClasses: () => request.get('/car-classes'),
  createElement: (data: any) => request.post('/cars', data),
  updateElement: (data: any, id: number) => request.put(`/cars/${id}`, data)
};

export default carService;
