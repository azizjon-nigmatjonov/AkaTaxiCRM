import request from "../../utils/request";
const coinService = {
  getList: () => request.get(`/passengers/coin-history`),
};

export default coinService;
