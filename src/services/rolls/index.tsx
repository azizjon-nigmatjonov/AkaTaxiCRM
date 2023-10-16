import request from "../../utils/request";
const roleService = {
  getList: () => request.get("/roles"),
  createElement: (data: any) => request.post("/roles", { ...data, team_id: 1 }),
};

export default roleService;
