import request from "../../utils/request";
const callcenterService = {
  getCallcenterList: (data: { sip_id: undefined | number }) =>
    request.get("/call-center", { params: data }),
};

export default callcenterService;
