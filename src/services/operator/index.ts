import request from "../../utils/request";
const operatorService = {
  getList: () => request.get("/operators"),
};

export default operatorService;
