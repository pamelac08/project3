import axios from "axios";

export default {
    getAllMovements: function() {
       return axios.get("/api/coach");
    },
    createMovement: function(newMovement) {
       return axios.post("/api/coach", newMovement);   
    },
    getOneMovement: function(id) {
       return axios.get("/api/coach/" + id);   
    },
    updateMovement: function(id, updateObject) {
       return axios.put("/api/coach/" + id, updateObject);   
    },
    deleteMovement: function(id) {
       return axios.delete("/api/coach/" + id);   
    },
    getAllHabits: function() {
        return axios.get("/api/coach/habits");   
    },
    saveHabit: function(newHabit) {
        return axios.post("/api/coach/habits", newHabit);
    },
    getOneHabit: function(id) {
       return axios.get("/api/coach/habits/" + id);   
    },
    updateHabitTracker: function(id, updateObject) {
        return axios.put("/api/coach/habits/" + id, updateObject);
    },
    deleteHabit: function(id) {
        return axios.delete("/api/coach/habits/" + id);
    }
}