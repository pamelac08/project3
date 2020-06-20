import axios from "axios";

export default {
    signup: function() {
        return axios.post("http://localhost:3001/api/auth/signup");
     }
}