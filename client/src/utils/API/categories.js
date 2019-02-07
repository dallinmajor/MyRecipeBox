import axios from 'axios';

export default {
    create: function (id, category) {
        return axios.post("/api/category/" + id, {category})
            .catch(err => console.log(err));
    },
    getAll: function (id) {
        return axios.get("/api/category/" + id)
            .catch(err => console.log(err));
    },
    delete: function (id) {
        return axios.delete(`/api/category/${id}/delete`)
            .catch(err => console.log(err));
    }
}