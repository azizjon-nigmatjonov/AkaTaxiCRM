import request from "../../utils/request";
const smsService = {
  getList: (type: string) => request.get(`mailing/get/${type}`),
  createElement: (data: any) => request.post("/mailing/send", { ...data }),
  getReports: ()=>request.get('/mailing/detailing')
};

export default smsService;
