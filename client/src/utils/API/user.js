import axios from 'axios';

export default {
    create: function (userData) {
        return axios.post("/api/user", userData)
            .catch(err => console.log(err));
    },
    validate: function (username, password) {
        return axios.get(`/api/user/validate/${username}/${password}`)
            .catch(err => console.log(err));
    },
    get: function (id) {
        return axios.get("/api/user/" + id)
            .catch(err => console.log(err));
    },
    update: function (id, updateData) {
        return axios.put("/api/user/" + id, updateData)
            .catch(err => console.log(err));
    },
    delete: function (id) {
        return axios.delete("/api/user/" + id)
            .catch(err => console.log(err));
    }
}