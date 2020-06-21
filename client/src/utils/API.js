import axios from "axios";

export default {
  getAllMovements: function () {
    return axios.get("http://localhost:3001/api/coach");
  },
  createMovement: function (newMovement) {
    return axios.post("http://localhost:3001/api/coach", newMovement);
  },
  getOneMovement: function (id) {
    return axios.get("/api/coach/" + id);
  },
  updateMovement: function (id, updateObject) {
    return axios.put("http://localhost:3001/api/coach/" + id, updateObject);
  },
  deleteMovement: function (id) {
    return axios.delete("http://localhost:3001/api/coach/" + id);
  },
  getAllHabits: function () {
    return axios.get("http://localhost:3001/api/coach/habits");
  },
  saveHabit: function (newHabit) {
    return axios.post("http://localhost:3001/api/coach/habits", newHabit);
  },
  getOneHabit: function (id) {
    return axios.get("http://localhost:3001/api/coach/habits/" + id);
  },
  updateHabitTracker: function (id, updateObject) {
    return axios.put(
      "http://localhost:3001/api/coach/habits/" + id,
      updateObject
    );
  },
  deleteHabit: function (id) {
    return axios.delete("http://localhost:3001/api/coach/habits/" + id);
  },
};
