import request from "../../utils/request";
const bookingService = {
  getList: (id: string) => request.get(`/booking/${id}`),
  cancelBooking: (id: number) => request.post(`/booking/cancel/${id}`),
};

export default bookingService;
