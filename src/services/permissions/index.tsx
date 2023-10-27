import request from "../../utils/request";
const permissionService = {
  getList: () => request.get("/permissions"),
  createElement: (data: any) => request.post('/permissions', { ...data })
};

export default permissionService;
