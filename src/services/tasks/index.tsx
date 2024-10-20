import request from "../../utils/request";
const taskService = {
  createTask: (data: any) => request.post(`/tasks`, data),
  getTasks: (params: any) => request.get(`/tasks`, { params }),
};

export default taskService;
