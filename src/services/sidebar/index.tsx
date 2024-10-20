import request from "../../utils/request";
const sidebarService = {
  getSidebarData: () => request.get(`/dashboard/sidebar`),
};

export default sidebarService;
