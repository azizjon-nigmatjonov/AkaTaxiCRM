import request from "../../utils/request";
const driverService = {
  getList: (params: any) => request.get(`/drivers?page=${params.page}&perPage=${params.perPage}`),
  createElement: (data: any) => request.post('/drivers', { ...data }),
  getActives: () => request.get('/drivers-popular'),
  deleteElement: (id: string) => request.delete(`/drivers/${id}`)
};

export default driverService;
