
import request from "../../utils/request";
const driverService = {
  getList: (params: any) =>
    request.get(
      `/drivers?page=${params.page}${params.q ? `&q=${params.q}` : ""
      }&perPage=${params.perPage}${params?.car_id ? `&car_id=${params.car_id}` : ""
      }`
    ),
  createElement: (data: any) => request.post("/drivers", data),

  getActives: (params: any) =>
    request.get(
      `/drivers-popular${params.page ? `?page=${params.page || 1}` : ""}${params.q ? `&q=${params.q}` : ""}${params.region_id ? `&region_id=${params.region_id}` : ""}${params.gender ? `&gender=${params.gender}` : ""}${params.car_model_id ? `&car_model_id=${params.car_model_id}` : ""}${params.birthday ? `&birthday=${params.birthday}` : ""}`
    ),
  updateElement: (id: string, data: any) => request.put(`/drivers/${id}`, data),
  deleteElement: (id: string) => request.delete(`/drivers/${id}`),
  getElement: (id: string | undefined) => request.get(`/drivers/${id}`),
  getDriverTripHistory: (id: string | undefined) =>
    request.get(`drivers/${id}/trips`),
  getWidgets: () => request.get('statistics/drivers/widgets'),
  getDriversGraph: () => request.get('statistics/drivers/graph'),
  getUserRegion: () => request.get('statistics/drivers/users-by-region'),
  getDriverBallance: (id?: string) => request.get(`drivers/${id}/balance`),
};

export default driverService;
