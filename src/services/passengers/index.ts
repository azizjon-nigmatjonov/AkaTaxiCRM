import request from "../../utils/request";
import requestForm from '../../utils/requestFormdata'
const passengerService = {
  getList: (data: any) =>
    request.get(
      `/passengers?page=${data.page}&perPage=${data.perPage}${data.q ? `&q=${data.q}` : ""}${data.region_id ? `&region_id=${data.region_id}` : ""}`
    ),
  createElement: (data: any) => request.post("/passengers", { ...data }),
  deleteElement: (id: string) => requestForm.delete(`passengers/${id}`),
  updateElement: (id: string, data: any) =>
    request.put(`passengers/${id}`, { ...data }),
  getElement: (id: string) => request.get(`passengers/${id}`),
  getActivePassengers: (params: any) =>
    request.get(
      `/passengers-popular${params.page ? `?page=${params.page || 1}` : ""
      }${params.q ? `&q=${params.q}` : ""}${params?.region_id ? `&region_id=${params.region_id}` : ''}${params.birthday ? `&birthday=${params.birthday}` : ''}`
    ),
  getTicket: (params: any) => request.get(`/passengers-tickets/${params.id}${params?.status ? `?status=${params.status}` : ''}`),
  activePassengerWidget: () => request.get('/passenger-statistics/booking-widgets'),
  bookingTrip: (data: any) => request.post('/booking', data)
};

export default passengerService;
