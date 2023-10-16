import request from "../../utils/request";
const carService = {
  getList: () => request.get("/cars"),
};

export default carService;
