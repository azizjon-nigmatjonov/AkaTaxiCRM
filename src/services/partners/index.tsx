import request from "../../utils/request";
const partnerService = {
  getList: () => request.get("/partners"),
  getElement: (id: string) => request.get(`partners/${id}`)
};

export default partnerService;
