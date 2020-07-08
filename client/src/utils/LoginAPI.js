import axios from "axios";

export default {
  createUser: function (newUser) {
    return axios.post("/api/auth/signup", newUser);
  },
  loginUser: function (user) {
    return axios.post("/api/auth/signin", user);
  },
  deleteUser: function (id) {
    return axios.delete("/api/coach/users/" + id);
  },
  updateUser: function (id, updatedUser) {
    return axios.put("/api/coach/users/" + id, updatedUser);
  },
  getAllUsers: function () {
    return axios.get("/api/users")
  }
};
