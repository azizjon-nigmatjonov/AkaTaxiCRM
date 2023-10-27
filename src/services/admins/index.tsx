import request from "../../utils/request";
const adminService = {
  getList: () => request.get("/admins"),
};

export default adminService;
