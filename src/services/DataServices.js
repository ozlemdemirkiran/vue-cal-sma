import http from "../http-link";

class DataServices {
    getAllData() {
        return http.get("/");
    }
}
export default new DataServices();