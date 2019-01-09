import axios from 'axios';

module.exports = {
    create: function (userData) {
        return axios.post("/api/recipe", userData)
            .catch(err => console.log(err));
    },
    get: function (id) {
        return axios.get("/api/recipe/" + id)
            .catch(err => console.log(err));
    },
    update: function (id, updateData) {
        return axios.put("/api/recipe/" + id, updateData)
            .catch(err => console.log(err));
    },
    delete: function (id, userId) {
        return axios.delete(`/api/recipe/${id}/${userId}`)
            .catch(err => console.log(err));
    }
}