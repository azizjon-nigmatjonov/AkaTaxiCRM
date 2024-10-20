import request from "../../utils/request";
import requestForm from "../../utils/requestFormdata";

const driverService = {
  getAllDriver: ({ q, locationIds }: { q: string; locationIds: any }) =>
    request.get(
      `/drivers-all?q=${q}&start_location_id=${locationIds.start}&end_location_id=${locationIds.end}`
    ),
  getList: (params: any) =>
    request.get(`/drivers`, {
      params,
    }),
  createElement: (data: any) => requestForm.post("/drivers", data),
  getActives: (params: any) =>
    request.get(
      `/drivers-popular${params.page ? `?page=${params.page || 1}` : ""}${
        params.q ? `&q=${params.q}` : ""
      }${params.region_id ? `&region_id=${params.region_id}` : ""}${
        params.gender ? `&gender=${params.gender}` : ""
      }${params.car_model_id ? `&car_model_id=${params.car_model_id}` : ""}${
        params.birthday ? `&birthday=${params.birthday}` : ""
      }${params.status ? `&status=${params.status}` : ""}`
    ),
  updateElement: (id: any, data: any) =>
    requestForm.put(`/drivers/${id}`, data, {
      headers: {
        "Content-Type": "application/json",
      },
    }),
  updateCarInfo: (id: any, data: any) => request.patch(`/drivers/${id}`, data),
  deleteElement: (id: any) => request.delete(`/drivers/${id}`),
  getElement: (id: string | undefined) => request.get(`/drivers/${id}`),
  getDriverTripHistory: (data: any | undefined) =>
    request.get(
      `drivers/${data.id}/trips?${data.page ? `page=${data.page}` : ""}`
    ),
  getWidgets: (params: any) =>
    request.get(`statistics/drivers/widgets`, { params }),
  getDriversGraph: (params: any) =>
    request.get(`statistics/drivers/graph`, { params }),
  getUserRegion: () => request.get("statistics/drivers/users-by-region"),
  getDriverBallance: (data?: any) =>
    request.get(
      `drivers/${data.id}/transactions?${
        data.page ? `page=${data.page}` : ""
      } ${data?.created_at ? `&created_at=${data.created_at}` : ""}`
    ),
  getDriverBallanceCard: (data?: any) =>
    request.get(
      `drivers/${data.id}/balance${
        data?.created_at ? `?created_at=${data.created_at}` : ""
      }`
    ),
  getFotoContols: (data?: any) =>
    request.get(`stickers`, {
      params: data,
    }),
  getFotoControlUser: (id?: string) => request.get(`stickers/${id}`),
  updateFotoControl: (id: any, data: any) =>
    request.put(`stickers/${id}`, data),
  topUpBallance: (data: any) =>
    request.post(`drivers/${data.id}/top-up-balance`, data.balance),
  getActiveDriverCount: () => request.get("/trips/all-status"),
};

export default driverService;
