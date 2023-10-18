import request from "../../utils/request";
const calendarService = {
  getList: () => request.get("/calendar"),
};

export default calendarService;
