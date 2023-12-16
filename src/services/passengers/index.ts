import request from "../../utils/request";
const passengerService = {
  getList: (data: any) => request.get(`/passengers?page=${data.page}&perPage=${data.perPage}&q=${data.q}` ),
  createElement: (data: any) => request.post('/passengers', { ...data }),
  deleteElement: (id: string) => request.delete(`passengers/${id}`),
  updateElement: (id: string, data: any) => request.put(`passengers/${id}`, { ...data }),
  getElement: (id: string) => request.get(`passengers/${id}`),
  getActivePassengers: (params: any) => request.get(`/passengers-popular?q=${params?.q}`)
};

export default passengerService;
