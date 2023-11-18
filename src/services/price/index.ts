import request from "../../utils/request";
const priceService = {
  getList: () => request.get(`/distance-prices?start_region_id=9&end_region_id=10`),
  updateElement: (data: any) => request.put(`distance-prices/update`, { prices: [data] }),
  createElement: (data: any) => request.post("/prices", { ...data, team_id: 1 }),
};

export default priceService;
