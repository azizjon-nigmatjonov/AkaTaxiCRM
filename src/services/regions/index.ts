import request from "../../utils/request";
const regionService = {
  getList: () => request.get("/regions"),
};

export default regionService;
