import axios from "axios";

export default {
  createUser: function (newUser) {
    return axios.post("http://localhost:3001/api/auth/signup", newUser);
  },
  loginUser: function (user) {
    return axios.post("http://localhost:3001/api/auth/signin", user);
  },
};
