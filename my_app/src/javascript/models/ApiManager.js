import axios from 'axios'

//use 'http://' or 'https://' fix the problem of cross-origin permission
const API_URI = 'http://localhost:3030/my_api_dashbord_TWProject';

const client_id = "5e008ff897d026518650315d";
const client_secret = "YAUl7pjjnujR8cCIWp0ToHt8l1fqlVTs";
const test_username = "votre_identifiant";
const test_password = "votre_mot_de_passe";

class ApiManager {

    // find all users
    fetchAllUsers() {
        return axios.get(`${API_URI}/users`);
    }

    // find all sensors
    fetchAllSensors() {
        return axios.get(`${API_URI}/sensors`);
    }

    // find all measure
    fetchAllMeasures() {
        return axios.get(`${API_URI}/measures`);
    }

    deleteOneUser(user) {
        return axios.delete(`${API_URI}/users/${user._id}`)
    }

    fetchOneUser(id) {
        return axios.get(`${API_URI}/users/${id}`);
    }

    deleteOneSensor(sensor) {
        return axios.delete(`${API_URI}/sensors/${sensor._id}`)
    }

    createOneUser(data) {
        return axios.put(`${API_URI}/users?location=${data[0]}&personsInHouse=${data[1]}&houseSize=${data[2]}`);
    }

    createOneSensor(data) {
        return axios.put(`${API_URI}/sensors?location=${data[1]}&userID=${data[0]}`);
    }

    createOneMeasure(data) {
        return axios.put(`${API_URI}/measures?type=${data[1]}&value=${data[2]}&sensorID=${data[0]}`);
    }
}

export default ApiManager;