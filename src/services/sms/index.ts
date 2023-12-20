import request from "../../utils/request";
const smsService = {
  getList: (type: string) => request.get(`mailing/get/${type}`),
  createElement: (data: any) => request.post("/mailing/send", { ...data }),
};

export default smsService;
