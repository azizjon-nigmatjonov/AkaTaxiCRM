import request from "../../utils/request";
const regionService = {
  getList: () => request.get("/regions"),
  getDistrict: () => request.get("/districts")
};

export default regionService;
