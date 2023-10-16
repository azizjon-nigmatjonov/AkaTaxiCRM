import request from "../../utils/request";
const permissionService = {
  getList: () => request.get("/admins"),
};

export default permissionService;
