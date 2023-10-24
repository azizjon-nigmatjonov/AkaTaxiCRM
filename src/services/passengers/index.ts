import request from "../../utils/request";
const passengerService = {
  getList: () => request.get("/passengers"),
  createElement: (data: any) => request.post('/passengers', { ...data }),
  deleteElement: (id: string) => request.delete(`passengers/${id}`),
  updateElement: (id: string) => request.put(`passengers/${id}`),
  getElement: (id: string) => request.get(`passengers/${id}`),
  getActivePassengers: () => request.get('/passengers-popular')
};

export default passengerService;
