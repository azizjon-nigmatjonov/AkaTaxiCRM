import request from "../../utils/request";
const passengerService = {
  getList: () => request.get("/passengers"),
  createElement: (data: any) => request.post('/passegners', { ...data }),
  deleteElement: (id: string) => request.delete(`passengers/${id}`),
  updateElement: (id: string) => request.put(`passengers/${id}`)
};

export default passengerService;
