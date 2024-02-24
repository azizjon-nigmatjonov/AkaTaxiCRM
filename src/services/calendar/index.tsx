import request from "../../utils/request";
const calendarService = {
  getList: (params?: string) => request.get(`/calendar/?${params ? `&startDate=${params}` : ''}`),
};

export default calendarService;
