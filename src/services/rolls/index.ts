import request from "../../utils/request";
const roleService = {
  deleteElement: (id: number) => request.delete(`/roles/${id}`),
  getList: () => request.get("/roles"),
  createElement: (data: any) => request.post("/roles", data),
};

export default roleService;
