import request from "../../utils/request";
const priceService = {
  getList: ({
    start_region_id,
    end_region_id,
  }: {
    start_region_id: string;
    end_region_id: string;
  }) =>
    request.get(
      `/distance-prices?start_region_id=${start_region_id}&end_region_id=${end_region_id}`
    ),
  updateElement: (data: any) =>
    request.put(`distance-prices/update`, { prices: data }),
  createElement: (data: any) =>
    request.post("/prices", { ...data, team_id: 1 }),
  getStaticPrices: () => request.get("/prices"),
};

export default priceService;
