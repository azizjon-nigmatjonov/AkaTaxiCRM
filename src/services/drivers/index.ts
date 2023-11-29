import request from "../../utils/request";
const driverService = {
  getList: (params: any) =>
    request.get(`/drivers?page=${params.page}&perPage=${params.perPage}`),
  createElement: (data: any) => request.post("/drivers", { ...data }),
  getActives: () => request.get("/drivers-popular"),
  updateElement: (id: string, data: any) => request.put(`/drivers/${id}`, data),
  deleteElement: (id: string) => request.delete(`/drivers/${id}`),
  getElement: (id: string) => request.get(`/drivers/${id}`)
};

export default driverService;
