import axios from "axios";

export default {
  createUser: function (newUser) {
    return axios.post("http://localhost:3001/api/auth/signup", newUser);
  },
  loginUser: function (user) {
    return axios.post("http://localhost:3001/api/auth/signin", user);
  },
  deleteUser: function (id) {
    return axios.delete("http://localhost:3001/api/coach/users/" + id);
  },
  updateUser: function (id, updatedUser) {
    return axios.put(
      "http://localhost:3001/api/coach/users/" + id,
      updatedUser
    );
  },
  getAllUsers: function () {
    return axios.get("http://localhost:3001/api/users");
  },
};
