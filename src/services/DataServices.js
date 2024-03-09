import http from "../http-link";

class DataServices {
    getAllData() {
        return http.get("/todos");
    }
    getTodoDetail(id)
    {
        return http.get(`/todos/${id}`);
    }
    createTutorial(data) 
    {
    return http.post("/todos",data);
    }
    updateTutorial(id,data)
    {
        return http.put(`/todos/${id}`,data);
    }
    deleteTutorial(id)
    {
        return http.delete(`/todos/${id}`);
    }

}
export default new DataServices();