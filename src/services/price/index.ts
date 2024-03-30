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
  updateStaticPrice: (data: any) => request.put("prices/update", data),
  getBookingPrice: (data?: any) => request.post('prices/get-by-class', data),

  // getBookingPrice: (data?: any) => request.post(`prices/get-by-class${data?.start_location_id ? `start_location_id=${data.start_location_id}` : ''}${data?.end_location_id ? `&end_location_id=${data.end_location_id}` : ''}${data.place_order ? `&place_order=${data.place_order}` : ''}${data.driver_gender ? `&driver_gender=${data.driver_gender}` : ''}${data.can_stop ? `&can_stop=${data.can_stop}` : ''}${data.heater ? `&heater=${data.heater}` : ''}${data.chargers ? `&chargers=${data.chargers}` : ''}${data.additional_trunk ? `&additional_trunk=${data.additional_trunk}` : ''}${data.air_conditioner ? `&air_conditioner=${data.air_conditioner}` : ''}${data.gas ? `&gas=${data.air_conditioner}` : ''}${data.petrol ? `&petrol=${data.petrol}` : ''}${data.electric ? `&electric=${data.electric}` : ''}`)
};

export default priceService;
