import request from "../../utils/request";

const dashboardService = {
  getWidgets: () => request(`/dashboard/widgets`),
  getSocialWidgets: (data: any) =>
    request(
      `/dashboard/social-widget${
        data?.created_at ? `?created_at=${data.created_at}` : ""
      }`
    ),
  getPessengersFromCity: (params: any) =>
    request(`/dashboard/passenger-from-tashkent`, {
      params,
    }),

  getPessengersFromVilage: (params: any) =>
    request(`/dashboard/passenger-from-tashkent`, { params }),

  getDriverTripsFromCity: (params: any) =>
    request(`/dashboard/driver-trips`, { params }),
  getDriverTripsFromVilage: (params: any) => request(`/dashboard/driver-trips`, { params }),
};

export default dashboardService;
