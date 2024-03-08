import request from "../../utils/request";

const mapService = {
    getList: () => request.get(`/map`),
    getElement: (id: string) => request.get(`/map/${id}`),
}

export default mapService;