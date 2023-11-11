import request from "../../utils/request";
const passengerService = {
  getList: (data: any) => request.get(`/passengers?page=${data.page}&perPage=${data.perPage}` ),
  createElement: (data: any) => request.post('/passengers', { ...data }),
  deleteElement: (id: string) => request.delete(`passengers/${id}`),
  updateElement: (id: string, data: any) => request.put(`passengers/${id}`, { ...data }),
  getElement: (id: string) => request.get(`passengers/${id}`),
  getActivePassengers: () => request.get('/passengers-popular')
};

export default passengerService;
