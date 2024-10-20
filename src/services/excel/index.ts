import requestWithoutApi from "../../utils/requestWithoutApi";
const excelService = {
  getList: (params: any) => requestWithoutApi.get(`/users/export`, { params }),
};

export default excelService;
