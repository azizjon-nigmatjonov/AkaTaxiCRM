import request from "../../utils/request";

const dashboardService = {
    getWidgets: () => request(`/dashboard/widgets`),
    getPessengers: () => request(`/dashboard/passenger-from-tashkent`),
    getDriverTrips: () => request(`/dashboard/driver-trips`)
}


export default dashboardService;