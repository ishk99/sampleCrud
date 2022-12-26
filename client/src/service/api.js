// API Calls using axios
import axios from "axios";

const URL = "http://localhost:8000"; // comes from backend
export const addUser = async (data) => {
  try {
    // POST API
    // mention the url and the endpoint
    // since the URL is dynamic and a string
    return await axios.post(`${URL}/add`, data);
  } catch (error) {
    console.log("Error while calling addUser API", error);
  }
};

export const getUsers = async (req, res) => {
  try {
    // /all is the endpoint -- for which we will also create a route
    // axios.get makes a request to the given URL & endpoint
    return await axios.get(`${URL}/all`);
  } catch (error) {
    console.log("Error while calling getUsers API", error);
  }
};

export const getUser = async (id) => {
  try {
    return await axios.get(`${URL}/${id}`);
  } catch (error) {
    console.log(error.message);
  }
};

export const editUser = async (id, user) => {
  try {
    return await axios.put(`${URL}/${id}`, user);
  } catch (error) {
    console.log("Error in edit user api " + error.message);
  }
};

export const deleteUser = async (id) => {
  try {
    return await axios.delete(`${URL}/${id}`);
  } catch (error) {
    console.log("Error while calling delete user api", error);
  }
};
