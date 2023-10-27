import request from "../../utils/request";
const driverService = {
  getList: () => request.get("/drivers"),
  createElement: (data: any) => request.post('/drivers', { ...data }),
  getActives: () => request.get('/drivers-popular'),
  deleteElement: (id: string) => request.delete(`/drivers/${id}`)
};

export default driverService;
