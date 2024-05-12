import request from "../../utils/request";
const roleService = {
  deleteElement: (id: number) => request.get(`/roles/${id}`),
  getList: () => request.get("/roles"),
  createElement: (data: any) => request.post("/roles", { ...data, team_id: 1 }),
};

export default roleService;
