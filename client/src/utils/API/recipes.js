import axios from 'axios';

export default {
    create: function (userId, recipe) {
        return axios.post("/api/recipe/" + userId, recipe)
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
        return axios.delete(`/api/recipe/delete/${id}/${userId}`)
            .catch(err => console.log(err));
    }
}